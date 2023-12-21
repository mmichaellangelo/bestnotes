export interface Note {
    title: string,
    body: string,
    date_created: Date,
    date_edited: Date,
    author: Author
}

export interface Journal {
    notes: Note[],
    date_created: Date,
    author: Author,
    title: string,
    id: number
}

export interface Author {
    username: string,
    userID: number,
    date_created: Date,
    bio: string,
    name: string
}