import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import PublicationList from "./components/PublicationList";
import ClassificationSummary from "./components/ClassificationSummary";

function App() {
  const [scholarUrl, setScholarUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const [activeTab, setActiveTab] = useState("wos"); // "wos" or "scopus"
  const [exporting, setExporting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/classify", {
        scholarUrl: scholarUrl,
      });

      if (response.data.success) {
        setResult(response.data);
        setActiveTab("wos"); // Reset to WoS tab
      } else {
        setError(response.data.error || "Failed to classify publications");
      }
    } catch (err) {
      console.error("Error:", err);
      setError(
        err.response?.data?.error ||
          "Error connecting to server. Make sure the backend is running.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleExportExcel = async (publications, filename) => {
    setExporting(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/export/excel",
        { publications },
        { responseType: "blob" },
      );

      // Create a blob URL and trigger download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.parentElement.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Export error:", err);
      alert("Failed to export Excel file: " + (err.response?.data?.error || err.message));
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>📚 Scholar Publication Classifier</h1>
        <p>
          Classify your Google Scholar publications by Web of Science and Scopus
          indices
        </p>
      </header>

      <main className="container">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="scholarUrl">Google Scholar Profile URL</label>
              <input
                id="scholarUrl"
                type="text"
                placeholder="https://scholar.google.com/citations?user=..."
                value={scholarUrl}
                onChange={(e) => setScholarUrl(e.target.value)}
                required
                className="input-field"
              />
              <small className="help-text">
                Paste your full Google Scholar profile URL
              </small>
            </div>

            <button type="submit" disabled={loading} className="submit-button">
              {loading ? "Processing..." : "Classify Publications"}
            </button>
          </form>
        </div>

        {error && (
          <div className="error-message">
            <strong>Error:</strong> {error}
          </div>
        )}

        {result && (
          <div className="results">
            <ClassificationSummary
              summary={result.summary}
              total={result.totalPublications}
            />

            {/* Tab container */}
            <div className="tabs-container">
              <div className="tabs">
                <button
                  className={`tab-button ${activeTab === "wos" ? "active" : ""}`}
                  onClick={() => setActiveTab("wos")}
                >
                  Web of Science ({result.wosPublications.length})
                </button>
                <button
                  className={`tab-button ${activeTab === "scopus" ? "active" : ""}`}
                  onClick={() => setActiveTab("scopus")}
                >
                  Scopus Only ({result.scopusOnlyPublications.length})
                </button>
              </div>

              {/* Export buttons */}
              <div className="export-buttons">
                <button
                  className="export-button"
                  onClick={() =>
                    handleExportExcel(
                      result.wosPublications,
                      "scholar_publications_wos.xlsx",
                    )
                  }
                  disabled={exporting || result.wosPublications.length === 0}
                >
                  {exporting ? "Exporting..." : "📥 Export WoS as Excel"}
                </button>
                <button
                  className="export-button"
                  onClick={() =>
                    handleExportExcel(
                      result.scopusOnlyPublications,
                      "scholar_publications_scopus.xlsx",
                    )
                  }
                  disabled={exporting || result.scopusOnlyPublications.length === 0}
                >
                  {exporting ? "Exporting..." : "📥 Export Scopus as Excel"}
                </button>
                <button
                  className="export-button export-button-all"
                  onClick={() =>
                    handleExportExcel(
                      result.publications,
                      "scholar_publications_all.xlsx",
                    )
                  }
                  disabled={exporting}
                >
                  {exporting ? "Exporting..." : "📥 Export All as Excel"}
                </button>
              </div>

              {/* WoS Tab */}
              {activeTab === "wos" && (
                <PublicationList
                  publications={result.wosPublications}
                  title="Web of Science Publications"
                />
              )}

              {/* Scopus Only Tab */}
              {activeTab === "scopus" && (
                <PublicationList
                  publications={result.scopusOnlyPublications}
                  title="Scopus Only Publications (Not indexed in WoS)"
                />
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
