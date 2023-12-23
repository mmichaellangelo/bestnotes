CREATE TABLE users (
    id SERIAL UNIQUE,
    username VARCHAR(64),
    password VARCHAR(256),
    date_created DATE,
    PRIMARY KEY (id)
);

CREATE UNIQUE INDEX idx_user_username ON user (username);

CREATE TABLE notes (
    id SERIAL,
    author_id INT,
    title VARCHAR(256),
    body TEXT,
    date_created DATE,
    date_edited DATE,
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES user(id)
);

CREATE TABLE journals (
    id SERIAL,
    title VARCHAR(256),
    author_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES user(id)
);