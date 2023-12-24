import { pool } from "./db_connect";
import { hashPassword } from "./pass_hash";
import { User, Note, Journal,
         isNote, isJournal, isUser, 
         DatabaseError, UserUpdateData } from "./types"
import { toPostgresTimestamp } from "./util";

/*
*|  USER FUNCTIONS
*/

export async function getUserByID(id: number): Promise<User> {
    try {
        const result = await pool.query("SELECT * FROM account WHERE id = $1", [id]);
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
        const result = await pool.query("SELECT * FROM account WHERE id = $1", [username]);
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
    const date_unformatted = new Date();
    const date_formatted = toPostgresTimestamp(date_unformatted);
    
    try {
        const result = await pool.query(`INSERT INTO account 
            (username, password, date_created) 
            VALUES ($1, $2, $3)`, [username, password_hashed, date_formatted])
    } catch (error) {
        throw new DatabaseError("Error creating user");
    }
}

export async function deleteUserByID(id: number): Promise<boolean> {
    try {
        const user = getUserByID(id);
        if (isUser(user)) {
            const result = await pool.query("DELETE * FROM account WHERE id=$1", [id]);
            if (result !== (null || undefined)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (error) {
        throw new DatabaseError("Error deleting user");
    }
}

export async function updateUserInfo(data: UserUpdateData, id: number): Promise<boolean> {
    try {
        const user = await getUserByID(id);
        if (isUser(user)) {
            if (data.bio && data.name) {
                const result = await pool.query(`UPDATE account 
                                                SET bio=$1, name=$2 
                                                WHERE id=$3`, 
                                                [data.bio, data.name, id]);
            } else if (data.bio) {
                const result = await pool.query(`UPDATE account 
                                                SET bio=$1 
                                                WHERE id=$2`, 
                                                [data.bio, id]);
            } else if (data.name) {
                const result = await pool.query(`UPDATE account 
                                                SET name=$1 
                                                WHERE id=$2`, 
                                                [data.name, id]);
            }
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw new DatabaseError("Error updating user")
    }

}

/*
*|  NOTE FUNCTIONS
*/

export async function getNoteByID(id: number): Promise<Note> {
    try {
        const result = await pool.query("SELECT * FROM note WHERE id=$1", [id]);
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
        const result = await pool.query("SELECT * FROM note WHERE author_id=$1", [id]);
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

export async function createNote(title: string, body: string, author_id: number) {
    const date_unformatted = new Date();
    const date_formatted = toPostgresTimestamp(date_unformatted);

    try {
        const result = await pool.query(`INSERT INTO note 
                                        (title, body, author_id) 
                                        VALUES ($1, $2, $3)`, 
                                        [title, body, author_id]);
        return true;
    } catch (error) {
        throw new DatabaseError("Error creating note");
    }
}

export async function updateNoteTitle(new_title: string, id: number) {
    try {
        const result = await pool.query(`UPDATE note 
                                        SET title=$1
                                        WHERE id=$2`,
                                        [new_title, id]);
    } catch (error) {
        throw new DatabaseError("Error updating title");
    }
}

export async function updateNoteBody(new_body: string, id: number) {
    try {
        const result = await pool.query(`UPDATE note 
                                        SET body=$1
                                        WHERE id=$2`,
                                        [new_body, id]);
    } catch (error) {
        throw new DatabaseError("Error updating title");
    }
}

/*
*|  JOURNAL FUNCTIONS
*/

export async function getJournalByID(id: number): Promise<Journal> {
    try {
        const result = await pool.query("SELECT * FROM journal WHERE id=$1", [id]);
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

export async function createJournal(title: string, author_id: number) {
    const date_unformatted = new Date();
    const date_formatted = toPostgresTimestamp(date_unformatted);
    try {
        const result = await pool.query(`INSERT INTO journal 
                                        (title, author_id, date_created) 
                                        VALUES ($1, $2, $3)`,
                                        [title, author_id, date_formatted]);
    } catch (error) {
        throw new DatabaseError("Error creating journal");
    }
}