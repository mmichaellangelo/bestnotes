export interface Note {
    title: string,
    body: string,
    date_created: Date,
    date_edited: Date,
    author_id: number
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
    id: number,
    date_created: Date,
    bio: string,
    name: string
}