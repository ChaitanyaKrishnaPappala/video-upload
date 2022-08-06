import { Pool } from "pg";
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_APP_HOST,
  database: process.env.POSTGRES_NAME,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});
export default pool;
