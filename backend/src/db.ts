import { pool } from "./db_connect";
import { hashPassword } from "./pass_hash";
import { isNote, isJournal, isUser, 
         User, Note, Journal,
         DatabaseError } from "./types"

/*
*|  USER FUNCTIONS
*/

export async function getUserByID(id: number): Promise<User> {
    try {
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        const user = result.rows[0];

        if (isUser(user)) {
            return user;
        } else {
            throw new DatabaseError("Error retrieving user");
        }
    } catch (error) {
        throw new DatabaseError("Error: could not get user");
    }
}

export async function getUserByUsername(username: string): Promise<User> {
    try {
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [username]);
        const user = result.rows[0];

        if (isUser(user)) {
            return user;
        } else {
            throw new DatabaseError("Error retrieving user");
        }
    } catch (error) {
        throw new DatabaseError("Error: could not get user");
    }
}

export async function createUser(username: string, password_plaintext: string, name: string, bio: string, ) {
    const password_hashed = await hashPassword(password_plaintext);
    try {
        const result = await pool.query(`INSERT INTO users 
            (id, username, password, date_created)`)
    }
}

/*
*|  NOTE FUNCTIONS
*/

export async function getNoteByID(id: number): Promise<Note> {
    try {
        const result = await pool.query("SELECT * FROM notes WHERE id=$1", [id]);
        const note = result.rows[0];
        if (isNote(note)) {
            return note;
        } else {
            throw new DatabaseError("Error: note could not be retrieved");
        }
    } catch (error) {
        throw new DatabaseError("Internal Error");
    }
}

export async function getNotesByUserID(id: number): Promise<Note[]> {
    try {
        const result = await pool.query("SELECT * FROM notes WHERE user_id=$1", [id]);
        const notes = result.rows;
        if (isNote(notes[0])) {
            return notes;
        } else {
            throw new DatabaseError("Error: notes could not be retrieved");
        }
    } catch (error) {
        throw new DatabaseError("Internal Error");
    }
}

/*
*|  JOURNAL FUNCTIONS
*/

export async function getJournalByID(id: number): Promise<Journal> {
    try {
        const result = await pool.query("SELECT * FROM journals WHERE id=$1", [id]);
        const journal = result.rows[0];
        if (isJournal(journal)) {
            return journal;
        } else {
            throw new DatabaseError("Error: journal could not be retrieved");
        }
    } catch (error) {
        throw new DatabaseError("Internal Error");
    }
}

//chicken