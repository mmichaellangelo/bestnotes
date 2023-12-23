/*
*** TYPES ***
*/

export interface Note {
    title: string,
    body: string,
    date_created: Date,
    date_edited: Date,
    author: User
}

export interface Journal {
    notes: Note[],
    date_created: Date,
    author: User,
    title: string,
    id: number
}

export interface User {
    username: string,
    userID: number,
    date_created: Date,
    bio: string,
    name: string
}

/*
*** TYPE CHECKERS ***
*/

export function isNote(object: unknown): object is Note {
    return Object.prototype.hasOwnProperty.call(object, "title")
        && Object.prototype.hasOwnProperty.call(object, "body")
        && Object.prototype.hasOwnProperty.call(object, "date_created")
        && Object.prototype.hasOwnProperty.call(object, "date_edited")
        && Object.prototype.hasOwnProperty.call(object, "author")
}

export function isJournal(object: unknown): object is Journal {
    return Object.prototype.hasOwnProperty.call(object, "notes")
        && Object.prototype.hasOwnProperty.call(object, "date_created")
        && Object.prototype.hasOwnProperty.call(object, "author")
        && Object.prototype.hasOwnProperty.call(object, "title")
        && Object.prototype.hasOwnProperty.call(object, "id")
}

export function isUser(object: unknown): object is User {
    return Object.prototype.hasOwnProperty.call(object, "username")
        && Object.prototype.hasOwnProperty.call(object, "userID")
        && Object.prototype.hasOwnProperty.call(object, "date_created")
        && Object.prototype.hasOwnProperty.call(object, "bio")
        && Object.prototype.hasOwnProperty.call(object, "name")
}

/*
*** ERROR INTERFACES ***
*/

export class DatabaseError extends Error {
    constructor(message: string) {
      super(message);
      this.name = this.constructor.name;
      // Your custom logic here
    }
}