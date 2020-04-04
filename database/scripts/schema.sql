CREATE TABLE updates (
    game_id         integer NOT NULL,
    posted_by       char(100),
    post_date       char(100),
    title           char(100),
    text            text,
    img             text,
    comment_count   integer
);