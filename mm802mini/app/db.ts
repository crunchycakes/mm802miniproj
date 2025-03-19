import postgres from "postgres";

const CONNECTION_URL = "postgresql://user:password@127.0.0.1:5432/db"
const PGHOST = "localhost"
const PGDATABASE = "db";
const PGUSER = "user";
const PGPASSWORD = "password";

// export const sql = postgres({ host: PGHOST, database: PGDATABASE, username: PGUSER, password: PGPASSWORD, port: 5432 });

const sql = postgres(CONNECTION_URL);

export default sql