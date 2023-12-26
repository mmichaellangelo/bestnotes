CREATE TABLE account (
    id SERIAL UNIQUE NOT NULL,
    email VARCHAR(256),
    username VARCHAR(64) UNIQUE NOT NULL,
    name VARCHAR(128) NOT NULL,
    date_created TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE journal (
    id SERIAL UNIQUE NOT NULL,
    title VARCHAR(256) NOT NULL,
    author_id INT NOT NULL,
    date_created TIMESTAMP NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES account(id)
);

CREATE TABLE note (
    id SERIAL UNIQUE NOT NULL,
    author_id INT NOT NULL,
    journal_id INT NOT NULL,
    title VARCHAR(256),
    body TEXT,
    tags VARCHAR(64)[],
    date_created TIMESTAMP NOT NULL,
    date_edited TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES account(id),
    FOREIGN KEY (journal_id) REFERENCES journal(id)
);

CREATE TABLE account_auth (
    id INT UNIQUE,
    username VARCHAR(64) UNIQUE NOT NULL,
    password VARCHAR(256) NOT NULL,
    PRIMARY KEY (id), 
    FOREIGN KEY (id) REFERENCES account(id)
);

CREATE TABLE auth_tokens (
    id SERIAL UNIQUE,
    token TEXT,
    user_id INT UNIQUE,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES account(id)
);