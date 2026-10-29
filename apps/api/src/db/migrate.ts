import fs from 'fs';
import path from 'path';
import { db } from './pool';
import dotenv from 'dotenv';

// Force dotenv to load the .env file from the apps/api folder
dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

async function runMigration() {
  try {
    console.log('Connecting to:', process.env.DATABASE_URL); // This will print your URL so we can check it
    
    const sqlPath = path.join(__dirname, 'migrations', '001_init.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');
    
    console.log('⏳ Running database migration...');
    await db.query(sql);
    console.log('✅ Migration completed successfully! Tables created in Supabase.');
    process.exit(0);
  } catch (error: any) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  }
}

runMigration();