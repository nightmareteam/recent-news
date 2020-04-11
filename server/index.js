require('dotenv').config();
require('newrelic');
const express = require('express');
const db = require('../database');
const app = express();
const port = 3003;

app.get('/api/recent-news/:gameId/updates', (req, res) => {
	const { gameId } = req.params;
	const { page } = req.query;
	db.getUpdatesByGameId(gameId, page)
		.then(({rows}) => {
			res.send(rows);
		})
		.catch()
})

app.listen(port, () => { console.log(`listening on port ${port}!`)});