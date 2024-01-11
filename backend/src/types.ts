/*
*** DATABASE INTERFACE TYPES ***
*** ------------------------ ***
*** each type directly corresponds
*** with the types laid out in the 
*** database schema.
*/

export interface Account {
    id: number;
    email: string;
    username: string;
    name: string;
    date_created: Date;
    date_edited?: Date;
}

export interface Journal {
    id: number;
    title: string;
    author_id: number;
    date_created: Date;
    date_edited?: Date;
}

export interface Folder {
    id: number;
    title: string;
    parent_folder_id?: number;
    journal_id: number;
    author_id: number;
    date_created: Date;
    date_edited?: Date;
}

export interface Note {
    id: number;
    title?: string;
    body?: string;
    author_id: number;
    folder_id?: number;
    journal_id: number;
    date_created: Date;
    date_edited?: Date;
}

/*
*** MISC TYPES
*/

export interface UserUpdateData {
    bio?: string;
    name?: string;
}

/*
*** TYPE CHECKERS ***
*/

export function isAccount(object: unknown): object is Account {
    return Object.prototype.hasOwnProperty.call(object, "username")
        && Object.prototype.hasOwnProperty.call(object, "id")
        && Object.prototype.hasOwnProperty.call(object, "date_created")
        && Object.prototype.hasOwnProperty.call(object, "name")
}

export function isJournal(object: unknown): object is Journal {
    return Object.prototype.hasOwnProperty.call(object, "id")
        && Object.prototype.hasOwnProperty.call(object, "title")
        && Object.prototype.hasOwnProperty.call(object, "author_id")
        && Object.prototype.hasOwnProperty.call(object, "date_created")
}

export function isFolder(object: unknown): object is Folder {
    return Object.prototype.hasOwnProperty.call(object, "id")
        && Object.prototype.hasOwnProperty.call(object, "title")
        && Object.prototype.hasOwnProperty.call(object, "journal_id")
        && Object.prototype.hasOwnProperty.call(object, "author_id")
        && Object.prototype.hasOwnProperty.call(object, "date_created")
}

export function isNote(object: unknown): object is Note {
    return Object.prototype.hasOwnProperty.call(object, "id")
        && Object.prototype.hasOwnProperty.call(object, "author_id")
        && Object.prototype.hasOwnProperty.call(object, "journal_id")
        && Object.prototype.hasOwnProperty.call(object, "date_created")
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

export class UserNotFoundError extends Error {
    constructor(message: string) {
      super(message);
      this.name = this.constructor.name;
      // Your custom logic here
    }
}

export class InvalidFormatError extends Error {
    constructor(message: string) {
      super(message);
      this.name = this.constructor.name;
      // Your custom logic here
    }
}