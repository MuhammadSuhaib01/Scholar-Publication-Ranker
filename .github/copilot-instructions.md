# Copilot Instructions for Scholar Classifier Project

This is a React + Node.js web application that classifies Google Scholar publications by Web of Science and Scopus indices.

## Project Overview

- **Frontend**: React 18 with CSS3
- **Backend**: Express.js with Google Scholar web scraping
- **Purpose**: Classify academic publications by WoS and Scopus quartiles

## Key Features

1. Google Scholar profile URL input
2. Publication scraping and parsing
3. Classification by WoS and Scopus rankings
4. Visual summary with filtering and sorting
5. Publication details display

## Development Guidelines

- Use Express for REST API endpoints
- Maintain separate frontend and backend
- Keep journal database in `server/journalDatabase.js`
- Use React hooks for state management
- Use CSS modules or inline styles for styling

## Important Files

- `server/index.js` - Main Express server
- `server/scholarScraper.js` - Google Scholar scraper logic
- `server/journalDatabase.js` - Journal classification database
- `client/src/App.js` - Main React component
- `client/src/components/` - React components

## Running the Project

```bash
# Install all dependencies
npm install

# Run in development (both frontend and backend)
npm run dev

# Run only server
npm run server

# Run only client
cd client && npm start
```

## API Structure

- `POST /api/classify` - Main classification endpoint
- `GET /api/health` - Health check

## Notes for Future Development

- The journal database is currently limited to examples
- Consider integrating official WoS/Scopus APIs for production use
- Google Scholar scraping may have access restrictions
- Consider adding a persistent database for caching results
