import { QueryResult } from "pg";
import { pool } from "./db_connect";
import { isNote, isJournal, isAuthor, Author, DatabaseError } from "./types"

export async function getUserByID(id: number): Promise<Author> {
    try {
        const result = await pool.query("SELECT $1::text as user_id from users", [id]);
        const user = result.rows[0];

        if (isAuthor(user)) {
            return user;
        } else {
            throw new DatabaseError("Error retrieving user");
        }
    } catch (error) {
        throw new DatabaseError("Error: could not get user")
    }
    
}