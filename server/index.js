require('dotenv').config();
require('newrelic');
const express = require('express');
const db = require('../database');
const app = express();

app.get('/api/recent-news/:gameId/updates', (req, res) => {
	const { gameId } = req.params;
	const { page } = req.query;
	db.getUpdatesByGameId(gameId, page)
		.then(({rows}) => {
			res.send(rows);
		})
		.catch()
})

const port = process.env.PORT || 3003

app.listen(port, () => { 
	console.log(`listening on port ${port}`)
});