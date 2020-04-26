# Vapor Recent News

> Game updates/news microservice


## Requirements

- Node 6.13.0

### Installing Dependencies

`npm install`

## Scripts

`npm run seed`
> Creates a csv file with updates for 10,000,000 games
> See sample csv file in database/data

`npm run start`
> Starts node.js server

`npm run start-dev`
> Starts node.js server with nodemon.
> <b> nodemon is not included in dependencies </b>

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
