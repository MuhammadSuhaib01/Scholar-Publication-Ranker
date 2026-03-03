const express = require("express");
const cors = require("cors");
const path = require("path");
const { fetchPublicationsFromUrl } = require("./scholarScraper");
const { classifyJournal, classifyJournalAsync } = require("./journalDatabase");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from React build directory
app.use(express.static(path.join(__dirname, "../client/build")));

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

/**
 * Cache management endpoint - Clear Scimago cache
 */
app.post("/api/cache/clear", (req, res) => {
  try {
    const { clearQuartileCache } = require("./scimagoScraper");
    clearQuartileCache();
    res.json({ success: true, message: "Scimago cache cleared" });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/**
 * Cache stats endpoint - Get Scimago cache statistics
 */
app.get("/api/cache/stats", (req, res) => {
  try {
    const { getCacheStats } = require("./scimagoScraper");
    const stats = getCacheStats();
    res.json({
      success: true,
      cacheStats: stats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/**
 * Main endpoint: Classify publications from Google Scholar URL
 */
app.post("/api/classify", async (req, res) => {
  const { scholarUrl } = req.body;

  if (!scholarUrl) {
    return res.status(400).json({
      success: false,
      error: "Please provide a Google Scholar URL",
    });
  }

  try {
    // Fetch publications from Google Scholar
    const publicationsResult = await fetchPublicationsFromUrl(scholarUrl);

    if (!publicationsResult.success) {
      return res.status(400).json({
        success: false,
        error: publicationsResult.error,
      });
    }

    // Classify each publication with async classification (including Scimago lookup)
    const classifiedPublications = await Promise.all(
      publicationsResult.publications.map(async (pub) => {
        const classification = await classifyJournalAsync(pub.venue);
        return {
          ...pub,
          classification: {
            venue: pub.venue,
            wos: classification.wos,
            scopus: classification.scopus,
            indexed: classification.found,
            source: classification.source,
          },
        };
      }),
    );

    // Organize by classification with deduplication
    const organized = organizeByClassification(classifiedPublications);

    // Separate publications by deduplication rule
    const wosPublications = [];
    const scopusOnlyPublications = [];

    classifiedPublications.forEach((pub) => {
      const wos = pub.classification.wos;

      // All articles go to wosPublications (WoS table)
      wosPublications.push(pub);

      // Only add to Scopus if NOT indexed in WoS (deduplication rule)
      if (wos === "Not indexed") {
        scopusOnlyPublications.push(pub);
      }
    });

    // Log deduplication info
    const wosTotal = Object.values(organized.counts.webOfScience).reduce(
      (a, b) => a + b,
      0,
    );
    const scopusTotal = Object.values(organized.counts.scopus).reduce(
      (a, b) => a + b,
      0,
    );

    console.log(`\n📊 Classification Summary:`);
    console.log(`   Web of Science: ${wosTotal} publications`);
    console.log(`   Scopus (non-WoS only): ${scopusTotal} publications`);
    console.log(`   Total: ${wosTotal + scopusTotal} publications indexed\n`);

    res.json({
      success: true,
      totalPublications: classifiedPublications.length,
      publications: classifiedPublications,
      wosPublications: wosPublications,
      scopusOnlyPublications: scopusOnlyPublications,
      summary: organized,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server error: " + error.message,
    });
  }
});

/**
 * Organize publications by WoS and Scopus classification with deduplication
 * Rule: If indexed in WoS, don't list in Scopus (keep unique to WoS)
 */
function organizeByClassification(publications) {
  const summary = {
    webOfScience: {
      Q1: [],
      Q2: [],
      Q3: [],
      Q4: [],
      Others: [],
      "Not indexed": [],
    },
    scopus: {
      Q1: [],
      Q2: [],
      Q3: [],
      Q4: [],
      Others: [],
      "Not indexed": [],
    },
  };

  publications.forEach((pub) => {
    const wos = pub.classification.wos;
    const scopus = pub.classification.scopus;

    // Always add to Web of Science
    if (summary.webOfScience[wos]) {
      summary.webOfScience[wos].push(pub);
    }

    // Only add to Scopus if NOT indexed in WoS (deduplication rule)
    // If it's in WoS with Q1-Q4 or "Others", don't list it under Scopus
    if (wos === "Not indexed") {
      // Only articles not in WoS can appear in Scopus
      if (summary.scopus[scopus]) {
        summary.scopus[scopus].push(pub);
      }
    }
  });

  // Count publications in each category
  const counts = {
    webOfScience: {},
    scopus: {},
  };

  for (const category in summary.webOfScience) {
    counts.webOfScience[category] = summary.webOfScience[category].length;
  }

  for (const category in summary.scopus) {
    counts.scopus[category] = summary.scopus[category].length;
  }

  return {
    counts,
    details: summary,
  };
}

/**
 * Export publications to Excel file
 */
app.post("/api/export/excel", (req, res) => {
  try {
    const { publications } = req.body;

    if (!publications || publications.length === 0) {
      return res.status(400).json({
        success: false,
        error: "No publications provided for export",
      });
    }

    const { generateExcelFile } = require("./excelExporter");
    const excelBuffer = generateExcelFile(publications);

    // Set response headers for file download
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="scholar_publications.xlsx"',
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    );

    res.send(excelBuffer);
  } catch (error) {
    console.error("Excel export error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to generate Excel file: " + error.message,
    });
  }
});

// Serve React app for any non-API route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`\n✅ Server running at http://localhost:${PORT}`);
  console.log(`\nAvailable endpoints:`);
  console.log(`  GET  /api/health           - Health check`);
  console.log(
    `  POST /api/classify         - Classify publications from Google Scholar`,
  );
  console.log(`  POST /api/export/excel     - Export publications to Excel`);
  console.log(`  POST /api/cache/clear      - Clear Scimago cache`);
  console.log(`  GET  /api/cache/stats      - Get cache statistics`);
  console.log(`\nFeatures:`);
  console.log(`  ✓ Google Scholar scraping`);
  console.log(`  ✓ Local journal database with 150+ journals`);
  console.log(`  ✓ Scimago Journal Ranking scraper (automatic fallback)`);
  console.log(`  ✓ Excel export of results`);
  console.log(`  ✓ 24-hour caching for performance\n`);
});
