require('dotenv').config();
require('newrelic');
const express = require('express');
const db = require('../database');
const app = express();

const allowedOrigins = [
	'localhost:3000', // Proxy
	'localhost:9000', // webpack-dev-server
	'localhost:5500', // VsCode live-server
]

app.use('/', function (req, res, next) {
	const { origin } = req.headers;
	if (allowedOrigins.includes(origin)) {
		res.setHeader('Access-Control-Allow-Origin', origin);
	}
	next();
});


app.get('/recent-news/:gameId/updates', (req, res) => {
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
