import { Pool } from "pg";
import dotenv from "dotenv";
import path from "path";

// Force it to read the .env file from the apps/api folder
dotenv.config({ path: path.join(__dirname, "..", "..", ".env") });

export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

db.connect()
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => console.error("❌ Database connection error:", err));
