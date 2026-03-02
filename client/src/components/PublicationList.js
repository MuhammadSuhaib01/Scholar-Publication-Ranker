import React, { useState } from "react";
import "./PublicationList.css";

function PublicationList({ publications, title = "Publications" }) {
  const [sortBy, setSortBy] = useState("year");
  const [filterWos, setFilterWos] = useState("All");
  const [filterScopus, setFilterScopus] = useState("All");

  // Get unique classifications - convert Set to Array and sort
  const wosList = [
    "All",
    ...Array.from(
      new Set(publications.map((p) => p.classification.wos)),
    ).sort(),
  ];
  const scopusList = [
    "All",
    ...Array.from(
      new Set(publications.map((p) => p.classification.scopus)),
    ).sort(),
  ];

  // Filter publications based on WoS and Scopus selections
  let filteredPublications = publications.filter((pub) => {
    const wosMatch =
      filterWos === "All" || pub.classification.wos === filterWos;
    const scopusMatch =
      filterScopus === "All" || pub.classification.scopus === filterScopus;
    return wosMatch && scopusMatch;
  });

  // Sort publications
  filteredPublications = [...filteredPublications].sort((a, b) => {
    switch (sortBy) {
      case "year":
        return (b.year || 0) - (a.year || 0);
      case "citations":
        return b.citations - a.citations;
      case "title":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const getBadgeClass = (classification) => {
    if (classification.startsWith("Q")) {
      return `badge badge-${classification.toLowerCase()}`;
    } else if (classification === "Others") {
      return "badge badge-others";
    } else {
      return "badge badge-not-indexed";
    }
  };

  return (
    <div className="publication-section">
      <h2>
        {title} ({filteredPublications.length} of {publications.length})
      </h2>

      <div className="filters">
        <div className="filter-group">
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="year">Publication Year</option>
            <option value="citations">Citations</option>
            <option value="title">Title</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="wosFilter">WoS:</label>
          <select
            id="wosFilter"
            value={filterWos}
            onChange={(e) => setFilterWos(e.target.value)}
          >
            {wosList.map((item) => (
              <option key={`wos-${item}`} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="scopusFilter">Scopus:</label>
          <select
            id="scopusFilter"
            value={filterScopus}
            onChange={(e) => setFilterScopus(e.target.value)}
          >
            {scopusList.map((item) => (
              <option key={`scopus-${item}`} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredPublications.length === 0 ? (
        <div className="no-results">
          No publications match the selected filters.
        </div>
      ) : (
        <div className="publication-list">
          {filteredPublications.map((pub, index) => (
            <div key={index} className="publication-card">
              <div className="publication-header">
                <h3 className="publication-title">{pub.title}</h3>
                {pub.year && (
                  <span className="publication-year">{pub.year}</span>
                )}
              </div>

              {pub.authors && (
                <p className="publication-authors">{pub.authors}</p>
              )}

              {pub.venue && (
                <p className="publication-venue">
                  <strong>Venue:</strong> {pub.venue}
                </p>
              )}

              <div className="publication-footer">
                <div className="classifications">
                  <span className={getBadgeClass(pub.classification.wos)}>
                    WoS: {pub.classification.wos}
                  </span>
                  <span className={getBadgeClass(pub.classification.scopus)}>
                    Scopus: {pub.classification.scopus}
                  </span>
                </div>
                {pub.citations > 0 && (
                  <span className="citations">
                    <strong>{pub.citations}</strong> citations
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PublicationList;
