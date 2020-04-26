CREATE TABLE updates_1 (
    game_id         integer NOT NULL,
    posted_by       varchar(100),
    post_date       timestamp,
    title           varchar(100),
    text            text,
    img             text,
    comment_count   integer
);