CREATE TABLE account (
    id SERIAL,
    email VARCHAR(256),
    username VARCHAR(64) UNIQUE NOT NULL,
    name VARCHAR(128) NOT NULL,
    date_created TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE journal (
    id SERIAL,
    title VARCHAR(256) NOT NULL,
    author_id INT NOT NULL,
    date_created TIMESTAMP NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES account(id) ON DELETE CASCADE,
);

CREATE TABLE folder (
    id SERIAL,
    title VARCHAR(256) NOT NULL,
    parent_folder_id INT,
    journal_id INT NOT NULL,
    author_id INT NOT NULL,
    date_created TIMESTAMP NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES account(id) ON DELETE CASCADE,
    FOREIGN KEY (parent_folder_id) REFERENCES folder(id) ON DELETE CASCADE,
    FOREIGN KEY (journal_id) REFERENCES journal(id) ON DELETE CASCADE

);

CREATE TABLE note (
    id SERIAL,
    author_id INT NOT NULL,
    folder_id INT,
    journal_id INT NOT NULL,
    title VARCHAR(256),
    body TEXT,
    tags VARCHAR(64)[],
    date_created TIMESTAMP NOT NULL,
    date_edited TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES account(id) ON DELETE CASCADE,
    FOREIGN KEY (folder_id) REFERENCES folder(id) ON DELETE CASCADE,
    FOREIGN KEY (journal_id) REFERENCES journal(id) ON DELETE CASCADE
);

CREATE TABLE account_auth (
    id INT UNIQUE,
    username VARCHAR(64) UNIQUE NOT NULL,
    password VARCHAR(256) NOT NULL,
    PRIMARY KEY (id), 
    FOREIGN KEY (id) REFERENCES account(id) ON DELETE CASCADE
);

CREATE TABLE auth_token (
    id SERIAL UNIQUE,
    token TEXT,
    account_id INT UNIQUE,
    PRIMARY KEY (id),
    FOREIGN KEY (account_id) REFERENCES account(id) ON DELETE CASCADE
);