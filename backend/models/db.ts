import Database from 'better-sqlite3';

// Initialize the SQLite database
// In a real production app with MongoDB, you would use Mongoose here.
// For this environment, we use better-sqlite3 for a reliable local database.
const db = new Database('portfolio.db');

// Create the contacts table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;
