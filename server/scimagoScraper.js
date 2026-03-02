// Scimago Journal Ranking Scraper
// Fetches journal quartile information from Scimago (free public source)

const axios = require("axios");
const cheerio = require("cheerio");
const NodeCache = require("node-cache");

// Cache quartile data for 24 hours to avoid excessive requests
const quartileCache = new NodeCache({ stdTTL: 86400 });

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";

/**
 * Fetch quartile information from Scimago Journal Ranking
 * Returns { scopus: "Q1", wos: "..." } or null if not found
 * Skips invalid venue names and handles rate limiting gracefully
 */
async function fetchQuartileFromScimago(journalName) {
  if (!journalName) return null;

  // Skip malformed venue names (likely parsing errors from Google Scholar)
  // Ignore entries with excessive numbers, commas, special characters, or low-quality data
  if (
    !isValidVenueName(journalName) ||
    journalName.length < 5 ||
    journalName.split(",").length > 2
  ) {
    return null;
  }

  // Check cache first
  const cacheKey = `scimago_${journalName.toLowerCase()}`;
  const cached = quartileCache.get(cacheKey);
  if (cached !== undefined) {
    return cached;
  }

  try {
    // Search Scimago for the journal
    const searchUrl = `https://www.scimagojr.com/journalsearch.php?q=${encodeURIComponent(
      journalName,
    )}&tip=pub&clean=0`;

    const response = await axios.get(searchUrl, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate",
      },
      timeout: 10000,
    });

    const $ = cheerio.load(response.data);

    // Parse the first result from Scimago search
    // Scimago shows quartile in the rankings table
    let quartileData = null;

    // Look for ranking rows in the results table
    $("table tr").each((index, element) => {
      const $row = $(element);
      const cells = $row.find("td");

      if (cells.length > 0) {
        // Scimago table structure: Rank | Title | Type | H index | Total Docs | Total Cites | Cites/Doc | ...
        const title = cells.eq(1).text().trim();
        const ranksText = cells.eq(6)?.text().trim() || ""; // Ranking info

        // Check if this is our journal (case-insensitive partial match)
        if (
          title.toLowerCase().includes(journalName.toLowerCase()) ||
          journalName.toLowerCase().includes(title.toLowerCase())
        ) {
          // Scimago stores quartile in SJR Rank
          // Extract from the ranking cell
          const sjrRank = cells.eq(6)?.text().trim() || "";

          // Determine quartile from Scimago's SJR ranking percentile
          // Q1: Top 25%, Q2: 25-50%, Q3: 50-75%, Q4: 75-100%
          quartileData = parseQuartileFromScimago(sjrRank);

          return false; // break from each loop
        }
      }
    });

    // Cache the result (even if null, to avoid repeated failed requests)
    quartileCache.set(cacheKey, quartileData || null);
    return quartileData;
  } catch (error) {
    // Silently handle rate limiting errors (403) without logging spam
    if (error.response?.status === 403) {
      // Store null in cache to avoid retry
      quartileCache.set(`scimago_${journalName.toLowerCase()}`, null);
      return null;
    }

    // Log other types of errors
    if (error.response?.status !== 404) {
      console.error(
        `Error fetching from Scimago for "${journalName}": ${error.message}`,
      );
    }
    return null;
  }
}

/**
 * Validate if a venue name is likely a real journal (not a malformed string)
 */
function isValidVenueName(journalName) {
  // Reject if it's mostly numbers or special characters
  const cleanName = journalName.replace(/\d+/g, "").trim();
  if (cleanName.length < 3) return false;

  // Reject if it looks like a URL or email domain
  if (journalName.includes(".") && journalName.includes(",")) return false;

  // Reject common malformed patterns
  if (/^[a-z0-9\-_.]+\.[a-z]{2,}$/.test(journalName.toLowerCase())) {
    return false;
  }

  return true;
}

/**
 * Parse quartile information from Scimago ranking
 */
function parseQuartileFromScimago(rankingText) {
  if (!rankingText) return null;

  const normalized = rankingText.toLowerCase();

  // Check for explicit quartile mentions
  if (normalized.includes("q1")) {
    return { scopus: "Q1", wos: "Q1" };
  }
  if (normalized.includes("q2")) {
    return { scopus: "Q2", wos: "Q2" };
  }
  if (normalized.includes("q3")) {
    return { scopus: "Q3", wos: "Q3" };
  }
  if (normalized.includes("q4")) {
    return { scopus: "Q4", wos: "Q4" };
  }

  return null;
}

/**
 * Fetch multiple journals' quartiles
 * Returns array of { journalName, quartile }
 */
async function fetchMultipleJournalQuartiles(journalNames) {
  const results = [];

  for (const journalName of journalNames) {
    try {
      const quartile = await fetchQuartileFromScimago(journalName);
      results.push({
        journalName,
        quartile,
        timestamp: new Date(),
      });

      // Add small delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.error(
        `Failed to fetch quartile for ${journalName}:`,
        error.message,
      );
      results.push({
        journalName,
        quartile: null,
        error: error.message,
      });
    }
  }

  return results;
}

/**
 * Clear the cache manually
 */
function clearQuartileCache() {
  quartileCache.flushAll();
  console.log("Quartile cache cleared");
}

/**
 * Get cache statistics
 */
function getCacheStats() {
  return quartileCache.getStats();
}

module.exports = {
  fetchQuartileFromScimago,
  fetchMultipleJournalQuartiles,
  clearQuartileCache,
  getCacheStats,
};
