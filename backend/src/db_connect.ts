import { Pool } from "pg";

export const pool = new Pool({
    host: 'backend_postgres',
    user: 'mike',
    password: 'secret',
    database: 'db',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})