# Scholar Publication Classifier

A React-based web application that classifies academic publications from a Google Scholar profile according to Web of Science (WoS) and Scopus rankings.

## Features

- 📚 Fetches publications from any Google Scholar profile
- 🏆 Classifies publications by WoS quartiles (Q1-Q4)
- 🌍 Classifies publications by Scopus quartiles (Q1-Q4)
- 📊 Provides visual summary of classifications
- 🔍 Filter and sort publications by various criteria
- ⚡ Fast scraping and classification

## Tech Stack

**Frontend:**

- React 18
- Axios for HTTP requests
- CSS3 for styling

**Backend:**

- Node.js with Express.js
- Cheerio for HTML parsing
- Axios for web scraping

## Project Structure

```
.
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                # Node.js backend
│   ├── index.js          # Main server file
│   ├── scholarScraper.js # Google Scholar scraper
│   ├── journalDatabase.js # Journal classification DB
│   └── package.json
├── package.json          # Root package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Install root dependencies:

```bash
npm install
```

2. Install server dependencies:

```bash
cd server && npm install && cd ..
```

3. Install client dependencies:

```bash
cd client && npm install && cd ..
```

### Running the Application

#### Development Mode (run both frontend and backend)

```bash
npm run dev
```

This will start:

- Backend server on `http://localhost:5000`
- React app on `http://localhost:3000`

#### Running separately:

**Backend:**

```bash
npm run server
```

**Frontend:**

```bash
cd client && npm start
```

## Usage

1. Open http://localhost:3000 in your browser
2. Paste your full Google Scholar profile URL
3. Click "Classify Publications"
4. View the classification summary and detailed publication list
5. Filter and sort as needed

### Example URL

```
https://scholar.google.com/citations?user=9VRnoDEAAAAJ&hl=en
```

## API Endpoints

### POST `/api/classify`

Classifies publications from a Google Scholar profile.

**Request:**

```json
{
  "scholarUrl": "https://scholar.google.com/citations?user=..."
}
```

**Response:**

```json
{
  "success": true,
  "totalPublications": 42,
  "publications": [...],
  "summary": {
    "counts": {...},
    "details": {...}
  }
}
```

### GET `/api/health`

Health check endpoint.

## Classifications

### Web of Science (WoS)

- **Q1**: Highest ranked journals (top 25%)
- **Q2**: High ranked journals (25-50%)
- **Q3**: Medium ranked journals (50-75%)
- **Q4**: Lower ranked journals (75-100%)
- **Others**: Conference proceedings and unranked venues
- **Not indexed**: Articles not found in WoS

### Scopus

- **Q1**: Highest ranked journals (top 25%)
- **Q2**: High ranked journals (25-50%)
- **Q3**: Medium ranked journals (50-75%)
- **Q4**: Lower ranked journals (75-100%)
- **Others**: Conference proceedings and unranked venues
- **Not indexed**: Articles not found in Scopus

## Extending the Journal Database

The application uses a local journal database in `server/journalDatabase.js`. To add more journals:

```javascript
addJournal("Journal Name", "Q1", "Q1"); // Last two params: WoS ranking, Scopus ranking
```

## Limitations

- Google Scholar scraping may be rate-limited
- The journal database is currently limited to example entries
- Requires manual updates to the journal database for comprehensive coverage
- Google Scholar pages may change structure, affecting scraper reliability

## Future Enhancements

- [ ] Integrate with official WoS and Scopus APIs for real-time rankings
- [ ] Add more comprehensive journal database
- [ ] Export results to CSV/Excel
- [ ] Compare multiple profiles
- [ ] Caching system for better performance
- [ ] Support for different citation metrics
- [ ] Database integration for persistent storage

## Troubleshooting

**"Error connecting to server"**

- Make sure the backend is running on port 5000
- Check that Express server started successfully

**"Failed to classify publications"**

- Verify the Google Scholar URL is correct
- Check that the user has a public profile
- Try again (may be rate-limited)

**Port already in use**

- Change the port in `server/index.js` and `client/package.json`

## License

MIT

## Author

Created as an academic publication classification tool

## Support

For issues or suggestions, please refer to the project repository.
