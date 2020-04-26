# Vapor Recent News

> Game updates/news microservice


## Requirements

- node 6.13.0
- postgres 12.2 community server

## Getting Started

Install dependencies

`npm install`

Set up environment variables

> Create a .env file

```
# Environment Variables ( [] indicates optional )

[NEWRELIC_LICENSE]        # License to activate new relic performance logging
[DB_HOST]                 # Host for Postgres database. Defaults to 'localhost'
DB_USER                   # Postgres username
DB_PASS                   # Postgres password
[PORT]                    # Port for server to listen for requests. Defaults to 3003

```

Seed database if necessary

> Generate CSV file

`npm run seed`

> import to Postgres with [psql client](https://www.postgresql.org/docs/12/app-psql.html)

---
## Scripts

`npm run seed`
> Creates a csv file with updates for 10,000,000 games
> See sample csv file in database/data

`npm run start`
> Starts node.js server

`npm run start-dev`
> Starts node.js server with nodemon.
> <b> nodemon is not included in dependencies </b>

---
## API Spec

### Get Updates by gameId

`GET /recent-news/:gameId/updates`

#### Parameters

| Params | Type | Description |
| --- | --- | --- |
| :gameId | `Number` | The game's unique id
| [page]  | `Number` | Page number (0 indexed, page length is 5)

#### Response

`GameUpdates[]`

#### GameUpdates

| Field | Type | Description |
| --- | --- | --- |
| posted_by | `String` | 
| post_date | `Date` |
| title | `String` | Title of the post
| text | `String` | Text content of post
| img | `String` | An image url
| comment_count | `Number` | Number of comments on post
