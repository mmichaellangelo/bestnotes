CREATE TABLE account (
    id SERIAL UNIQUE NOT NULL,
    username VARCHAR(64) UNIQUE NOT NULL,
    password VARCHAR(256) NOT NULL,
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
    date_created TIMESTAMP NOT NULL,
    date_edited TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES account(id),
    FOREIGN KEY (journal_id) REFERENCES journal(id)
);