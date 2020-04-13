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

app.listen(process.env.PORT || 3003, () => { 
	console.log(`listening on port ${port}!`)
});