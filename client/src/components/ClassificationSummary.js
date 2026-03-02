import React from "react";
import "./ClassificationSummary.css";

function ClassificationSummary({ summary, total }) {
  const wosCategories = ["Q1", "Q2", "Q3", "Q4", "Others", "Not indexed"];
  const scopusCategories = ["Q1", "Q2", "Q3", "Q4", "Others", "Not indexed"];

  const getColor = (category) => {
    const colorMap = {
      Q1: "#10b981",
      Q2: "#3b82f6",
      Q3: "#f59e0b",
      Q4: "#ef4444",
      Others: "#8b5cf6",
      "Not indexed": "#9ca3af",
    };
    return colorMap[category] || "#6b7280";
  };

  return (
    <div className="summary-section">
      <h2>Classification Summary</h2>
      <p className="total-count">
        Total Publications: <strong>{total}</strong>
      </p>

      <div className="summary-grid">
        {/* Web of Science */}
        <div className="summary-card">
          <h3>Web of Science (WoS)</h3>
          <div className="category-list">
            {wosCategories.map((category) => (
              <div key={`wos-${category}`} className="category-item">
                <div
                  className="category-bar"
                  style={{ backgroundColor: getColor(category) }}
                ></div>
                <span className="category-name">{category}</span>
                <span className="category-count">
                  {summary.counts.webOfScience[category] || 0}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scopus */}
        <div className="summary-card">
          <h3>Scopus</h3>
          <div className="category-list">
            {scopusCategories.map((category) => (
              <div key={`scopus-${category}`} className="category-item">
                <div
                  className="category-bar"
                  style={{ backgroundColor: getColor(category) }}
                ></div>
                <span className="category-name">{category}</span>
                <span className="category-count">
                  {summary.counts.scopus[category] || 0}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassificationSummary;
