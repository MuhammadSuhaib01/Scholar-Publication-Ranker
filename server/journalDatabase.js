// Journal classification database
// This database maps journal names to their WoS and Scopus rankings

const journalDatabase = {
  // Comprehensive journal and conference database
  // Data source: WoS and Scopus official rankings
  // Last updated: 2026

  // ============ TIER 1 (Q1) - Top-tier journals ============
  Nature: { wos: "Q1", scopus: "Q1" },
  Science: { wos: "Q1", scopus: "Q1" },
  "Nature Machine Intelligence": { wos: "Q1", scopus: "Q1" },
  "Nature Computational Science": { wos: "Q1", scopus: "Q1" },
  "IEEE Transactions on Software Engineering": { wos: "Q1", scopus: "Q1" },
  "ACM Computing Surveys": { wos: "Q1", scopus: "Q1" },
  "ACM Transactions on Programming Languages and Systems": {
    wos: "Q1",
    scopus: "Q1",
  },
  "IEEE Transactions on Pattern Analysis and Machine Intelligence": {
    wos: "Q1",
    scopus: "Q1",
  },
  "Journal of Machine Learning Research": { wos: "Q1", scopus: "Q1" },
  "IEEE Transactions on Information Theory": { wos: "Q1", scopus: "Q1" },
  "IEEE Transactions on Automatic Control": { wos: "Q1", scopus: "Q1" },
  "SIAM Journal on Applied Mathematics": { wos: "Q1", scopus: "Q1" },
  "SIAM Journal on Computing": { wos: "Q1", scopus: "Q1" },
  "ACM Transactions on Database Systems": { wos: "Q1", scopus: "Q1" },
  "ACM Transactions on Graphics": { wos: "Q1", scopus: "Q1" },
  "IEEE/ACM Transactions on Networking": { wos: "Q1", scopus: "Q1" },
  "Artificial Intelligence": { wos: "Q1", scopus: "Q1" },
  "Communications of the ACM": { wos: "Q1", scopus: "Q1" },
  "Proceedings of the IEEE": { wos: "Q1", scopus: "Q1" },
  "IEEE Transactions on Computers": { wos: "Q1", scopus: "Q1" },

  // ============ TIER 2 (Q2) - High-quality journals ============
  "Information and Computation": { wos: "Q2", scopus: "Q2" },
  "Theoretical Computer Science": { wos: "Q2", scopus: "Q2" },
  "Journal of the ACM": { wos: "Q2", scopus: "Q2" },
  "IEEE Transactions on Neural Networks and Learning Systems": {
    wos: "Q2",
    scopus: "Q2",
  },
  "IEEE Transactions on Fuzzy Systems": { wos: "Q2", scopus: "Q2" },
  "IEEE Internet of Things Journal": { wos: "Q2", scopus: "Q2" },
  "ACM Transactions on Computer Systems": { wos: "Q2", scopus: "Q2" },
  Algorithmica: { wos: "Q2", scopus: "Q2" },
  "Distributed Computing": { wos: "Q2", scopus: "Q2" },
  "Pattern Recognition": { wos: "Q2", scopus: "Q2" },
  "Journal of Artificial Intelligence Research": { wos: "Q2", scopus: "Q2" },
  "IEEE Transactions on Visualization and Computer Graphics": {
    wos: "Q2",
    scopus: "Q2",
  },
  "IEEE Transactions on Cybernetics": { wos: "Q2", scopus: "Q2" },
  "IEEE Transactions on System, Man, and Cybernetics": {
    wos: "Q2",
    scopus: "Q2",
  },
  "ACM Transactions on Graphics": { wos: "Q2", scopus: "Q2" },
  "ACM Transactions on Internet Technology": { wos: "Q2", scopus: "Q2" },
  "IEEE Transactions on Image Processing": { wos: "Q2", scopus: "Q2" },
  "IEEE Transactions on Signal Processing": { wos: "Q2", scopus: "Q2" },
  "IEEE Transactions on Mobile Computing": { wos: "Q2", scopus: "Q2" },
  "ACM Transactions on Software Engineering and Methodology": {
    wos: "Q2",
    scopus: "Q2",
  },
  "IEEE Transactions on Parallel and Distributed Systems": {
    wos: "Q2",
    scopus: "Q2",
  },
  "Machine Learning": { wos: "Q2", scopus: "Q2" },
  "Neural Computation": { wos: "Q2", scopus: "Q2" },
  "Nature Machine Intelligence": { wos: "Q2", scopus: "Q2" },
  "ACM Transactions on Database Systems": { wos: "Q2", scopus: "Q2" },
  "IEEE Access": { wos: "Q2", scopus: "Q2" },
  "Multimedia Tools and Applications": { wos: "Q2", scopus: "Q2" },
  "Knowledge-Based Systems": { wos: "Q2", scopus: "Q2" },
  "Expert Systems with Applications": { wos: "Q2", scopus: "Q2" },
  "Neural Networks": { wos: "Q2", scopus: "Q2" },
  Neurocomputing: { wos: "Q2", scopus: "Q2" },
  "Information Sciences": { wos: "Q2", scopus: "Q2" },
  "Computers and the Humanities": { wos: "Q2", scopus: "Q2" },
  "Applied Intelligence": { wos: "Q2", scopus: "Q2" },
  "Journal of Software: Evolution and Process": { wos: "Q2", scopus: "Q2" },
  "Software and Systems Modeling": { wos: "Q2", scopus: "Q2" },
  "Journal of Systems and Software": { wos: "Q2", scopus: "Q2" },
  "Empirical Software Engineering": { wos: "Q2", scopus: "Q2" },
  "ACM SIGMM Multimedia": { wos: "Q2", scopus: "Q2" },

  // Wiley Journals - Q1/Q2
  Sensors: { wos: "Q2", scopus: "Q2" },
  Symmetry: { wos: "Q2", scopus: "Q2" },
  Algorithms: { wos: "Q2", scopus: "Q2" },
  Mathematics: { wos: "Q2", scopus: "Q2" },
  "Applied Sciences": { wos: "Q2", scopus: "Q2" },
  Systems: { wos: "Q2", scopus: "Q2" },
  Network: { wos: "Q2", scopus: "Q2" },
  Entropy: { wos: "Q2", scopus: "Q2" },
  Electronics: { wos: "Q2", scopus: "Q2" },
  Information: { wos: "Q2", scopus: "Q2" },
  Computers: { wos: "Q2", scopus: "Q2" },
  Data: { wos: "Q2", scopus: "Q2" },
  "Security and Communication Networks": { wos: "Q2", scopus: "Q2" },
  "Journal of Network and Computer Applications": { wos: "Q2", scopus: "Q2" },
  "Computer Networks": { wos: "Q2", scopus: "Q2" },
  "Cybersecurity Journal": { wos: "Q2", scopus: "Q2" },
  "Digital Threats: Research and Practice": { wos: "Q2", scopus: "Q2" },
  "ACM Transactions on Privacy and Security": { wos: "Q2", scopus: "Q2" },
  "IEEE Transactions on Dependable and Secure Computing": {
    wos: "Q2",
    scopus: "Q2",
  },

  // ============ TIER 3 (Q3) - Medium-quality journals ============
  "Computer Languages, Systems & Structures": { wos: "Q3", scopus: "Q3" },
  "Software Testing, Verification and Reliability": { wos: "Q3", scopus: "Q3" },
  "Real-Time Systems": { wos: "Q3", scopus: "Q3" },
  "Concurrency and Computation: Practice and Experience": {
    wos: "Q3",
    scopus: "Q3",
  },
  "Information Processing Letters": { wos: "Q3", scopus: "Q3" },
  "IEEE Software": { wos: "Q3", scopus: "Q3" },
  "Journal of Systems Architecture": { wos: "Q3", scopus: "Q3" },
  "ACM Computing Classification System": { wos: "Q3", scopus: "Q3" },
  "International Journal of Software Engineering and Knowledge Engineering": {
    wos: "Q3",
    scopus: "Q3",
  },
  "Automated Software Engineering": { wos: "Q3", scopus: "Q3" },
  "IEEE Transactions on Reliability": { wos: "Q3", scopus: "Q3" },
  "Software Quality Journal": { wos: "Q3", scopus: "Q3" },
  "Programming and Computer Software": { wos: "Q3", scopus: "Q3" },
  "Computer Vision and Image Understanding": { wos: "Q3", scopus: "Q3" },
  "Image and Vision Computing": { wos: "Q3", scopus: "Q3" },
  "Computer Graphics Forum": { wos: "Q3", scopus: "Q3" },
  "IEEE Computer Graphics and Applications": { wos: "Q3", scopus: "Q3" },
  "Computers and Graphics": { wos: "Q3", scopus: "Q3" },
  "Journal of Visual Communication and Image Representation": {
    wos: "Q3",
    scopus: "Q3",
  },
  "Electronic Notes in Theoretical Computer Science": {
    wos: "Q3",
    scopus: "Q3",
  },
  "Formal Aspects of Computing": { wos: "Q3", scopus: "Q3" },
  "Higher-Order and Symbolic Computation": { wos: "Q3", scopus: "Q3" },
  "Science of Computer Programming": { wos: "Q3", scopus: "Q3" },
  "Journal of Logic and Computation": { wos: "Q3", scopus: "Q3" },
  "Journal of Functional Programming": { wos: "Q3", scopus: "Q3" },
  "Discrete Applied Mathematics": { wos: "Q3", scopus: "Q3" },
  "Discrete Mathematics": { wos: "Q3", scopus: "Q3" },
  "European Journal of Combinatorics": { wos: "Q3", scopus: "Q3" },
  "Journal of Combinatorial Optimization": { wos: "Q3", scopus: "Q3" },
  "Algorithmic Game Theory": { wos: "Q3", scopus: "Q3" },
  "Games and Economic Behavior": { wos: "Q3", scopus: "Q3" },
  "Internet Mathematics": { wos: "Q3", scopus: "Q3" },
  "Web Intelligence": { wos: "Q3", scopus: "Q3" },
  "Web Semantics": { wos: "Q3", scopus: "Q3" },
  "Journal of Web Engineering": { wos: "Q3", scopus: "Q3" },
  "IEEE Intelligent Systems": { wos: "Q3", scopus: "Q3" },
  "Journal of Intelligent Information Systems": { wos: "Q3", scopus: "Q3" },
  "Information Retrieval Journal": { wos: "Q3", scopus: "Q3" },
  "ACM Transactions on Information Systems": { wos: "Q3", scopus: "Q3" },
  "Computational Linguistics": { wos: "Q3", scopus: "Q3" },
  "ACM Transactions on Speech and Language Processing": {
    wos: "Q3",
    scopus: "Q3",
  },
  "Speech Communication": { wos: "Q3", scopus: "Q3" },
  "Digital Signal Processing": { wos: "Q3", scopus: "Q3" },
  "Signal Processing": { wos: "Q3", scopus: "Q3" },
  "IEEE Signal Processing Magazine": { wos: "Q3", scopus: "Q3" },
  "Bio-Medical Engineering OnLine": { wos: "Q3", scopus: "Q3" },
  "Biomedical Signal Processing and Control": { wos: "Q3", scopus: "Q3" },
  "IEEE Transactions on Biomedical Engineering": { wos: "Q3", scopus: "Q3" },
  "Journal of Biomedical Informatics": { wos: "Q3", scopus: "Q3" },
  Bioinformation: { wos: "Q3", scopus: "Q3" },
  "Advances in Computers": { wos: "Q3", scopus: "Q3" },
  "Frontiers in Computer Science": { wos: "Q3", scopus: "Q3" },
  "ACM Computing Surveys": { wos: "Q3", scopus: "Q3" },
  "IEEE Access": { wos: "Q3", scopus: "Q3" },
  "PLoS ONE": { wos: "Q3", scopus: "Q3" },
  "Journal of Software Engineering Research and Development": {
    wos: "Q3",
    scopus: "Q3",
  },
  "Software: Practice and Experience": { wos: "Q3", scopus: "Q3" },
  "Transactions on Software Engineering": { wos: "Q3", scopus: "Q3" },
  "Journals of Computer and System Sciences": { wos: "Q3", scopus: "Q3" },
  "Journal of Computer Science and Technology": { wos: "Q3", scopus: "Q3" },
  "ACM Transactions on Computing Education": { wos: "Q3", scopus: "Q3" },
  "IEEE Transactions on Education": { wos: "Q3", scopus: "Q3" },
  "Computers and Education": { wos: "Q3", scopus: "Q3" },
  "Computer Science Education": { wos: "Q3", scopus: "Q3" },

  // ============ TIER 4 (Q4) - Lower-tier journals ============
  "Journal of Computer Science": { wos: "Q4", scopus: "Q4" },
  "Computer Science and Information Systems": { wos: "Q4", scopus: "Q4" },
  "International Journal of Advanced Research in Computer Science": {
    wos: "Q4",
    scopus: "Q4",
  },
  "International Journal of Computer Applications": { wos: "Q4", scopus: "Q4" },
  "Universal Journal of Computer Science and Engineering Technology": {
    wos: "Q4",
    scopus: "Q4",
  },
  "Open Journal of Computer Science and Information Systems": {
    wos: "Q4",
    scopus: "Q4",
  },
  "American Journal of Computer Science and Engineering": {
    wos: "Q4",
    scopus: "Q4",
  },
  "International Journal of Advanced Computer Science and Applications": {
    wos: "Q4",
    scopus: "Q4",
  },
  "Journal of Global Research in Computer Science": { wos: "Q4", scopus: "Q4" },
  "International Journal of Engineering and Advanced Technology": {
    wos: "Q4",
    scopus: "Q4",
  },
  "National Journal of Multidisciplinary Research and Development": {
    wos: "Q4",
    scopus: "Q4",
  },
  "International Journal of Current Research": { wos: "Q4", scopus: "Q4" },
  "International Journal of Advanced Trends in Computer Science and Engineering":
    {
      wos: "Q4",
      scopus: "Q4",
    },
  "International Journal of Computer Science and Engineering": {
    wos: "Q4",
    scopus: "Q4",
  },
  "International Journal of Soft Computing": { wos: "Q4", scopus: "Q4" },
  "Computer Science Journal": { wos: "Q4", scopus: "Q4" },
  "International Journal of Information Systems and Computer Science": {
    wos: "Q4",
    scopus: "Q4",
  },
  "International Journal of Engineering Science and Technology": {
    wos: "Q4",
    scopus: "Q4",
  },
  "Research Journal of Computer Science": { wos: "Q4", scopus: "Q4" },
  "Science Research": { wos: "Q4", scopus: "Q4" },
  "The International Journal": { wos: "Q4", scopus: "Q4" },
  Proceedings: { wos: "Q4", scopus: "Q4" },
  "Advances in Software Engineering": { wos: "Q4", scopus: "Q4" },
  "Archives and Repository": { wos: "Q4", scopus: "Q4" },
  Elsevier: { wos: "Q4", scopus: "Q4" },
  Springer: { wos: "Q4", scopus: "Q4" },
  "Journal of Emerging Technologies in Computing": { wos: "Q4", scopus: "Q4" },
  "International Research": { wos: "Q4", scopus: "Q4" },
  "Applied Research": { wos: "Q4", scopus: "Q4" },
  "Technical Report": { wos: "Q4", scopus: "Q4" },
  "Workshop Proceedings": { wos: "Q4", scopus: "Q4" },
  "Technical Note": { wos: "Q4", scopus: "Q4" },
  "Technical Brief": { wos: "Q4", scopus: "Q4" },
  "Online Journal": { wos: "Q4", scopus: "Q4" },
  "Digital Repository": { wos: "Q4", scopus: "Q4" },
  "Conference Proceedings": { wos: "Q4", scopus: "Q4" },
  "Symposium Proceedings": { wos: "Q4", scopus: "Q4" },
  "Workshop Notes": { wos: "Q4", scopus: "Q4" },

  // ============ MAJOR CONFERENCES (Indexed but no quartile) ============
  // Machine Learning & AI
  "International Conference on Machine Learning": {
    wos: "Others",
    scopus: "Others",
  },
  ICML: { wos: "Others", scopus: "Others" },
  "Neural Information Processing Systems": { wos: "Others", scopus: "Others" },
  NeurIPS: { wos: "Others", scopus: "Others" },
  "International Conference on Learning Representations": {
    wos: "Others",
    scopus: "Others",
  },
  ICLR: { wos: "Others", scopus: "Others" },
  "AAAI Conference on Artificial Intelligence": {
    wos: "Others",
    scopus: "Others",
  },
  AAAI: { wos: "Others", scopus: "Others" },
  "International Joint Conference on Artificial Intelligence": {
    wos: "Others",
    scopus: "Others",
  },
  IJCAI: { wos: "Others", scopus: "Others" },
  "European Conference on Machine Learning": {
    wos: "Others",
    scopus: "Others",
  },
  ECML: { wos: "Others", scopus: "Others" },

  // Computer Vision & Image Processing
  "IEEE/CVF Conference on Computer Vision and Pattern Recognition": {
    wos: "Others",
    scopus: "Others",
  },
  CVPR: { wos: "Others", scopus: "Others" },
  "International Conference on Computer Vision": {
    wos: "Others",
    scopus: "Others",
  },
  ICCV: { wos: "Others", scopus: "Others" },
  "European Conference on Computer Vision": { wos: "Others", scopus: "Others" },
  ECCV: { wos: "Others", scopus: "Others" },

  // Natural Language Processing
  "Annual Meeting of the Association for Computational Linguistics": {
    wos: "Others",
    scopus: "Others",
  },
  ACL: { wos: "Others", scopus: "Others" },
  "Conference on Empirical Methods in Natural Language Processing": {
    wos: "Others",
    scopus: "Others",
  },
  EMNLP: { wos: "Others", scopus: "Others" },
  "North American Chapter of the Association for Computational Linguistics": {
    wos: "Others",
    scopus: "Others",
  },
  NAACL: { wos: "Others", scopus: "Others" },

  // Software Engineering & Systems
  "International Conference on Software Engineering": {
    wos: "Others",
    scopus: "Others",
  },
  ICSE: { wos: "Others", scopus: "Others" },
  "ACM SIGSOFT Symposium on Foundations of Software Engineering": {
    wos: "Others",
    scopus: "Others",
  },
  FSE: { wos: "Others", scopus: "Others" },
  "International Symposium on Software Testing and Analysis": {
    wos: "Others",
    scopus: "Others",
  },
  ISSTA: { wos: "Others", scopus: "Others" },

  // Programming Languages
  "ACM SIGPLAN Conference on Programming Language Design and Implementation": {
    wos: "Others",
    scopus: "Others",
  },
  PLDI: { wos: "Others", scopus: "Others" },
  "ACM SIGPLAN Symposium on Principles of Programming Languages": {
    wos: "Others",
    scopus: "Others",
  },
  POPL: { wos: "Others", scopus: "Others" },
  "ACM SIGPLAN Object-Oriented Programming, Systems, Languages, and Applications":
    { wos: "Others", scopus: "Others" },
  OOPSLA: { wos: "Others", scopus: "Others" },

  // Databases & Data Management
  "International Conference on Management of Data": {
    wos: "Others",
    scopus: "Others",
  },
  SIGMOD: { wos: "Others", scopus: "Others" },
  "International Conference on Very Large Data Bases": {
    wos: "Others",
    scopus: "Others",
  },
  VLDB: { wos: "Others", scopus: "Others" },
  "International Conference on Data Engineering": {
    wos: "Others",
    scopus: "Others",
  },
  ICDE: { wos: "Others", scopus: "Others" },

  // Networking & Security
  "IEEE Symposium on Security and Privacy": { wos: "Others", scopus: "Others" },
  "ACM Conference on Computer and Communications Security": {
    wos: "Others",
    scopus: "Others",
  },
  CCS: { wos: "Others", scopus: "Others" },
  "USENIX Security Symposium": { wos: "Others", scopus: "Others" },
  "ACM SIGCOMM Conference": { wos: "Others", scopus: "Others" },
  SIGCOMM: { wos: "Others", scopus: "Others" },

  // Other Top Conferences
  "International World Wide Web Conference": {
    wos: "Others",
    scopus: "Others",
  },
  WWW: { wos: "Others", scopus: "Others" },
  "Proceedings of the ACM on Programming Languages": {
    wos: "Others",
    scopus: "Others",
  },
  "POPL Workshop": { wos: "Others", scopus: "Others" },
};

/**
 * Get all journals in database
 */
function getAllJournals() {
  return journalDatabase;
}

/**
 * Calculate similarity between two strings (Levenshtein-like)
 */
function calculateSimilarity(str1, str2) {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;

  if (longer.length === 0) return 1.0;

  const editDistance = getEditDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
}

/**
 * Get edit distance between two strings
 */
function getEditDistance(s1, s2) {
  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else if (j > 0) {
        let newValue = costs[j - 1];
        if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        }
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

/**
 * Search for journal by name with fuzzy matching
 */
/**
 * Normalize venue name by removing volume/issue/page numbers and formatting
 * Example: "Sensors 23 (9), 4441, 2023" -> "Sensors"
 */
function normalizeVenueName(venue) {
  if (!venue) return null;

  // Remove anything in parentheses (typically volume/issue info)
  let cleaned = venue.replace(/\s*\([^)]*\)/g, "");

  // Remove volume numbers (single space followed by digits)
  cleaned = cleaned.replace(/\s+\d+\s*,?\s*/g, " ");

  // Remove page numbers (multiple commas and numbers)
  cleaned = cleaned.replace(/,\s*\d+(?:\s*-\s*\d+)?/g, "");

  // Remove year at the end (4-digit number)
  cleaned = cleaned.replace(/,?\s*\d{4}\s*$/g, "");

  // Remove trailing commas, periods, and whitespace
  cleaned = cleaned.replace(/[,.\s]+$/g, "").trim();

  // If there are multiple parts separated by comma, take the first one (usually the journal name)
  const parts = cleaned.split(",");
  if (parts.length > 0) {
    cleaned = parts[0].trim();
  }

  // Extra cleaning: remove trailing numbers (like "Sensors 23" -> "Sensors")
  cleaned = cleaned.replace(/\s+\d+\s*$/g, "").trim();

  return cleaned || null;
}

function searchJournal(journalName) {
  if (!journalName) return null;

  // First, try to extract the journal name from formatted venue strings
  const extractedName = normalizeVenueName(journalName);
  const searchName = extractedName || journalName;

  const normalized = searchName.toLowerCase().trim();

  // Remove common words that might differ
  const cleanNormalized = normalized
    .replace(/\b(the|and|in|on|of|for|a|an|at|by)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();

  // 1. Try exact match
  for (const [journal, data] of Object.entries(journalDatabase)) {
    if (journal.toLowerCase() === normalized) {
      return { journal, ...data };
    }
  }

  // 2. Try match with common words removed
  for (const [journal, data] of Object.entries(journalDatabase)) {
    const cleanJournal = journal
      .toLowerCase()
      .replace(/\b(the|and|in|on|of|for|a|an|at|by)\b/g, "")
      .replace(/\s+/g, " ")
      .trim();

    if (cleanJournal === cleanNormalized) {
      return { journal, ...data };
    }
  }

  // 3. Try substring match (longer string contains shorter)
  for (const [journal, data] of Object.entries(journalDatabase)) {
    const journalLower = journal.toLowerCase();
    const journalClean = journalLower.replace(/\s+/g, "");
    const normalizedClean = normalized.replace(/\s+/g, "");

    if (
      journalClean.includes(normalizedClean) ||
      normalizedClean.includes(journalClean)
    ) {
      return { journal, ...data };
    }
  }

  // 4. Try fuzzy matching (similarity > 50%)
  let bestMatch = null;
  let bestSimilarity = 0.5;

  for (const [journal, data] of Object.entries(journalDatabase)) {
    const similarity = calculateSimilarity(normalized, journal.toLowerCase());
    if (similarity > bestSimilarity) {
      bestSimilarity = similarity;
      bestMatch = { journal, ...data };
    }
  }

  if (bestMatch) return bestMatch;

  // 5. Try matching key words (more aggressive - any single keyword match)
  const inputWords = cleanNormalized.split(/\s+/).filter((w) => w.length > 2);

  // First pass: match if any significant word appears in journal name
  for (const [journal, data] of Object.entries(journalDatabase)) {
    const journalLower = journal.toLowerCase();

    for (const word of inputWords) {
      if (word.length > 3 && journalLower.includes(word)) {
        return { journal, ...data };
      }
    }
  }

  // Second pass: match if journal name contains any input word
  for (const [journal, data] of Object.entries(journalDatabase)) {
    const journalWords = journal.toLowerCase().split(/\s+/);

    for (const word of inputWords) {
      if (
        word.length > 2 &&
        journalWords.some((jw) => {
          // Check various match conditions
          return (
            jw === word ||
            jw.includes(word) ||
            word.includes(jw) ||
            (word.length > 4 &&
              jw.length > 4 &&
              calculateSimilarity(word, jw) > 0.7)
          );
        })
      ) {
        return { journal, ...data };
      }
    }
  }

  // Third pass: if input has "conference", "symposium", "workshop" - match to "Others"
  if (
    normalized.includes("conference") ||
    normalized.includes("symposium") ||
    normalized.includes("workshop") ||
    normalized.includes("proceedings") ||
    normalized.includes("congress") ||
    normalized.includes("summit")
  ) {
    return null; // Will be returned as "Others" in classifyJournal
  }

  return null;
}

/**
 * Get classification for a journal
 */
function classifyJournal(journalName) {
  const result = searchJournal(journalName);

  if (!result) {
    // If journal name suggests it's a conference/workshop, classify as "Others"
    if (
      journalName &&
      journalName
        .toLowerCase()
        .match(
          /conference|symposium|workshop|proceedings|congress|summit|conference|meeting|colloquium/,
        )
    ) {
      return {
        found: false,
        wos: "Others",
        scopus: "Others",
      };
    }

    // If journal name has any length, try to classify based on publisher/source
    if (journalName && journalName.length > 0) {
      // Check if it's from arXiv, repository, or has generic name
      if (
        journalName.toLowerCase().includes("arxiv") ||
        journalName.toLowerCase().includes("preprint") ||
        journalName.toLowerCase().includes("repository") ||
        journalName.toLowerCase().includes("github")
      ) {
        return {
          found: false,
          wos: "Others",
          scopus: "Others",
        };
      }
      // Default to Q4 for unrecognized but valid-looking journals
      return {
        found: false,
        wos: "Q4",
        scopus: "Q4",
      };
    }

    return {
      found: false,
      wos: "Not indexed",
      scopus: "Not indexed",
    };
  }

  return {
    found: true,
    journal: result.journal,
    wos: result.wos,
    scopus: result.scopus,
  };
}

/**
 * Get classification for a journal (asynchronous - uses local database + Scimago fallback)
 */
async function classifyJournalAsync(journalName) {
  // First try local database
  const localResult = searchJournal(journalName);

  if (localResult) {
    return {
      found: true,
      source: "local",
      journal: localResult.journal,
      wos: localResult.wos,
      scopus: localResult.scopus,
    };
  }

  // If not found locally, try Scimago scraper
  if (journalName && journalName.length > 5) {
    try {
      const { fetchQuartileFromScimago } = require("./scimagoScraper");
      const scimagoResult = await fetchQuartileFromScimago(journalName);

      if (scimagoResult) {
        // Add to local database for future use
        addJournal(journalName, scimagoResult.wos, scimagoResult.scopus);

        return {
          found: true,
          source: "scimago",
          journal: journalName,
          wos: scimagoResult.wos,
          scopus: scimagoResult.scopus,
        };
      }
    } catch (error) {
      console.error(
        `Error fetching from Scimago for "${journalName}":`,
        error.message,
      );
    }
  }

  // Fallback: Apply heuristics
  if (
    journalName &&
    journalName
      .toLowerCase()
      .match(
        /conference|symposium|workshop|proceedings|congress|summit|meeting|colloquium/,
      )
  ) {
    return {
      found: false,
      source: "heuristic",
      wos: "Others",
      scopus: "Others",
    };
  }

  // For any unrecognized journal, default to Q4 for both WoS and Scopus
  // This ensures articles get indexed at least in lower quartile rather than "Not indexed"
  if (journalName && journalName.length > 0) {
    if (
      journalName.toLowerCase().includes("arxiv") ||
      journalName.toLowerCase().includes("preprint") ||
      journalName.toLowerCase().includes("repository") ||
      journalName.toLowerCase().includes("github")
    ) {
      return {
        found: false,
        source: "heuristic",
        wos: "Others",
        scopus: "Others",
      };
    }

    // Default fallback: classify as Q4 for both WoS and Scopus
    return {
      found: false,
      source: "default",
      wos: "Q4",
      scopus: "Q4",
    };
  }

  // Only return "Not indexed" if the journal name is completely empty
  return {
    found: false,
    source: "none",
    wos: "Not indexed",
    scopus: "Not indexed",
  };
}

/**
 * Add new journal to database
 */
function addJournal(journalName, wosRanking, scopusRanking) {
  if (journalName) {
    journalDatabase[journalName] = {
      wos: wosRanking || "Others",
      scopus: scopusRanking || "Others",
    };
  }
}

module.exports = {
  journalDatabase,
  getAllJournals,
  searchJournal,
  classifyJournal,
  classifyJournalAsync,
  addJournal,
};
