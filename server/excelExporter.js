// Excel Export Utility
// Exports classified publications to Excel format

const XLSX = require("xlsx");
const path = require("path");
const fs = require("fs");

/**
 * Generate Excel file from classified publications
 * @param {Array} publications - Array of classified publication objects
 * @returns {Buffer} Excel file buffer
 */
function generateExcelFile(publications) {
  // Prepare data for Excel
  const excelData = publications.map((pub, index) => ({
    "#": index + 1,
    "Article Title": pub.title || "N/A",
    Authors: pub.authors || "N/A",
    "Journal/Venue": pub.venue || "N/A",
    "Year Published": pub.year || "N/A",
    Citations: pub.citations || 0,
    "WoS Quartile": pub.classification?.wos || "Not found",
    "Scopus Quartile": pub.classification?.scopus || "Not found",
    "WoS Status": pub.classification?.wos === "Not indexed" ? "Not Indexed" : "Indexed",
    "Scopus Status": pub.classification?.scopus === "Not indexed" ? "Not Indexed" : "Indexed",
    "Classification Source": pub.classification?.source || "Unknown",
    "Found in Database": pub.classification?.indexed ? "Yes" : "No",
  }));

  // Create workbook
  const wb = XLSX.utils.book_new();

  // Convert data to worksheet
  const ws = XLSX.utils.json_to_sheet(excelData);

  // Set column widths for better readability
  const colWidths = {
    A: { wch: 5 },    // #
    B: { wch: 50 },   // Article Title
    C: { wch: 40 },   // Authors
    D: { wch: 30 },   // Journal/Venue
    E: { wch: 12 },   // Year Published
    F: { wch: 10 },   // Citations
    G: { wch: 12 },   // WoS Quartile
    H: { wch: 14 },   // Scopus Quartile
    I: { wch: 12 },   // WoS Status
    J: { wch: 14 },   // Scopus Status
    K: { wch: 20 },   // Classification Source
    L: { wch: 18 },   // Found in Database
  };
  ws["!cols"] = Object.values(colWidths);

  // Add the sheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws, "Publications");

  // Create summary sheet
  const summary = [
    { Metric: "Total Publications", Value: publications.length },
    { Metric: "WoS Indexed", Value: publications.filter(p => p.classification?.wos !== "Not indexed").length },
    { Metric: "Scopus Indexed", Value: publications.filter(p => p.classification?.scopus !== "Not indexed").length },
    { Metric: "Both WoS & Scopus", Value: publications.filter(p => p.classification?.wos !== "Not indexed" && p.classification?.scopus !== "Not indexed").length },
    { Metric: "", Value: "" },
    { Metric: "Q1 Publications (WoS)", Value: publications.filter(p => p.classification?.wos === "Q1").length },
    { Metric: "Q2 Publications (WoS)", Value: publications.filter(p => p.classification?.wos === "Q2").length },
    { Metric: "Q3 Publications (WoS)", Value: publications.filter(p => p.classification?.wos === "Q3").length },
    { Metric: "Q4 Publications (WoS)", Value: publications.filter(p => p.classification?.wos === "Q4").length },
    { Metric: "Conference/Other (WoS)", Value: publications.filter(p => p.classification?.wos === "Others").length },
    { Metric: "Not Indexed (WoS)", Value: publications.filter(p => p.classification?.wos === "Not indexed").length },
  ];

  const summarySheet = XLSX.utils.json_to_sheet(summary);
  summarySheet["!cols"] = [{ wch: 30 }, { wch: 15 }];
  XLSX.utils.book_append_sheet(wb, summarySheet, "Summary");

  // Generate buffer
  return XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
}

module.exports = {
  generateExcelFile,
};
