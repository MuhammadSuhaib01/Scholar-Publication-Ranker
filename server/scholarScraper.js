// Google Scholar Scraper
// Fetches publications from a Google Scholar profile

const axios = require("axios");
const cheerio = require("cheerio");

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";

/**
 * Extract user ID from Google Scholar URL
 */
function extractUserIdFromUrl(url) {
  const match = url.match(/user=([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

/**
 * Parse Google Scholar publications with pagination support
 */
async function getScholarPublications(userId, pageSize = 100) {
  try {
    const allPublications = [];
    let startIndex = 0;
    let hasMorePublications = true;
    let pageCount = 0;
    const maxPages = 50; // Safety limit to prevent infinite loops

    console.log(`🔍 Fetching publications for user: ${userId}`);

    while (hasMorePublications && pageCount < maxPages) {
      const url = `https://scholar.google.com/citations?user=${userId}&hl=en&pagesize=${pageSize}&view_op=list_works&sortby=pubdate&cstart=${startIndex}`;

      const response = await axios.get(url, {
        headers: {
          "User-Agent": USER_AGENT,
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
          Referer: "https://scholar.google.com/",
        },
        timeout: 10000,
      });

      const $ = cheerio.load(response.data);
      const publications = [];

      // Parse each publication row
      $("tr.gsc_a_tr").each((index, element) => {
        const $row = $(element);

        // Extract title
        const title = $row.find(".gsc_a_t a").text().trim();

        // Extract authors
        const authors = $row.find(".gs_gray").first().text().trim();

        // Extract venue/journal
        const venue = $row.find(".gs_gray").eq(1).text().trim();

        // Extract year
        const yearText = $row.find(".gsc_a_y span").text().trim();
        const year = parseInt(yearText) || null;

        // Extract citations
        const citationsText = $row.find(".gsc_a_c a").text().trim();
        const citations = parseInt(citationsText) || 0;

        if (title) {
          publications.push({
            title,
            authors,
            venue,
            year,
            citations,
          });
        }
      });

      // If no publications found on this page, we're done
      if (publications.length === 0) {
        hasMorePublications = false;
      } else {
        allPublications.push(...publications);
        pageCount++;
        console.log(
          `📄 Page ${pageCount}: Fetched ${publications.length} publications (Total: ${allPublications.length})`,
        );
        startIndex += pageSize;

        // Add small delay between requests to be respectful
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    console.log(
      `✅ Completed fetching ${allPublications.length} total publications in ${pageCount} pages`,
    );

    return {
      success: true,
      count: allPublications.length,
      publications: allPublications,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      publications: [],
    };
  }
}

/**
 * Fetch publications from Google Scholar URL
 */
async function fetchPublicationsFromUrl(scholarUrl) {
  const userId = extractUserIdFromUrl(scholarUrl);

  if (!userId) {
    return {
      success: false,
      error: "Invalid Google Scholar URL or could not extract user ID",
      publications: [],
    };
  }

  return await getScholarPublications(userId);
}

module.exports = {
  extractUserIdFromUrl,
  getScholarPublications,
  fetchPublicationsFromUrl,
};
