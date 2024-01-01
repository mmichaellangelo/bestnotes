import { pool } from "./db_connect";
import { hashPassword } from "./pass_hash";
import { User, Note, Journal,
         isNote, isJournal, isUser, 
         DatabaseError, UserNotFoundError, 
         UserUpdateData, 
         InvalidFormatError} from "./types"
import { toPostgresTimestamp } from "./util";

/*
*|  USER FUNCTIONS
*/


export async function getUser(usernameorid: string): Promise<User> {
    let user: User;
    if (Number.isNaN(parseInt(usernameorid))) { // if username
        try {
            user = await getUserByUsername(usernameorid);
            return user;
        } catch (error: any) {
            throw new DatabaseError(`${error.name}: ${error.message}`);
        }
    } else { // if userID
        try {
            user = await getUserByID(parseInt(usernameorid));
            return user;
        } catch (error: any) {
            throw new DatabaseError(`${error.name}: ${error.message}`);
        }
    }

}

export async function getUserByID(id: number): Promise<User> {
    try {
        const result = await pool.query("SELECT * FROM account WHERE id = $1", [id]);
        try {
            const user = result.rows[0];
    
            if (isUser(user)) {
                return user;
            } else {
                throw new DatabaseError("Error retrieving user");
            }
        } catch (error: any) {
            throw new DatabaseError("Error: could not get user");
        }
    } catch (error: any) {
        throw new UserNotFoundError(`${error.name}: ${error.message}`);
    }
}

export async function getUserByUsername(username: string): Promise<User> {
    try {
        const result = await pool.query("SELECT * FROM account WHERE username = $1", [username]);
        try {
            const user = result.rows[0];
    
            if (isUser(user)) {
                return user;
            } else {
                throw new DatabaseError("Error retrieving user");
            }
        } catch (error: any) {
            throw new DatabaseError("Error: could not get user");
        }
    } catch (error: any) {
        throw new UserNotFoundError(`User not found\n ${error.message}`);
    }
}

export async function createUser(email: string, username: string, password_plaintext: string, name: string) {
    if (Number.isNaN(username.charAt(0))) {
        throw new InvalidFormatError("Username cannot start with a number");
    }
    const password_hashed = await hashPassword(password_plaintext);
    const date_unformatted = new Date();
    const date_formatted = toPostgresTimestamp(date_unformatted);
    try {
        const result = await pool.query(`INSERT INTO account 
                                        (username, date_created, name, email) 
                                        VALUES ($1, $2, $3, $4)`, 
                                        [username, date_formatted, name, email]);
        
    } catch (error) {
        throw new DatabaseError("Error creating user");
    }
}

export async function deleteUserByID(id: number) {
    try {
        const user = await getUserByID(id);
        if (isUser(user)) {
            try {
                const result = await pool.query("DELETE FROM account WHERE id=$1", [id]);
            } catch (error: any) {
                throw new DatabaseError(`${error.name}: ${error.message}`);
            }
        }
    } catch (error: any) {
        throw new DatabaseError(`${error.name}: ${error.message}`);
    }
    
}

export async function updateUserName(data: UserUpdateData, id: number) {
    try {
        const user = await getUserByID(id);
        if (isUser(user)) {
            const result = await pool.query(`UPDATE account 
                                            SET name=$1 
                                            WHERE id=$2`, 
                                            [data.name, id]);
            } else {
                throw new DatabaseError("Error updating user");
        }
    } catch (error) {
        throw new DatabaseError("Error updating user");
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
        return notes;
    } catch (error) {
        throw new DatabaseError("Internal Error");
    }
}

export async function createNote(title: string, body: string, author_id: number) {
    const date_unformatted = new Date();
    const date_formatted = toPostgresTimestamp(date_unformatted);

    try {
        const result = await pool.query(`INSERT INTO note 
                                        (title, body, author_id, date_created) 
                                        VALUES ($1, $2, $3, $4)`, 
                                        [title, body, author_id, date_formatted]);
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

export async function updateNoteTitleAndBody(new_title: string, new_body: string, id: number) {
    try {
        const result = await pool.query(`UPDATE note 
                                        SET title=$1, 
                                        body=$2, 
                                        WHERE id=$3`,
                                        [new_title, new_body, id]);
    } catch (error) {
        throw new DatabaseError("Error updating title");
    }
}

export async function deleteNoteByID(id: number) {
    try {
        const result = await pool.query(`DELETE FROM note WHERE id=$1`, [id]);
    } catch (error: any) {
        throw new DatabaseError(`${error.namedb}: ${error.message}`);
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

export async function getAllJournalsByUserID(userid: number): Promise<Journal[]> {
    try {
        const result = await pool.query(`SELECT * FROM journal
                                        WHERE author_id=$1`,
                                        [userid]);
        return result.rows;
    } catch (error: any) {
        throw new DatabaseError(`${error.name}: ${error.message}`);
    }
}

export async function renameJournal(new_title: string, journal_id: number) {
    try {
        const result = await pool.query(`UPDATE journal
                                        WHERE id=$1
                                        SET title=$2`,
                                        [journal_id, new_title]);
    } catch (error: any) {
        throw new DatabaseError(`${error.name}: ${error.message}`);
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