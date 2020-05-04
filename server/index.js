require('dotenv').config();
require('newrelic');
const express = require('express');
const db = require('../database');
const app = express();

const allowedOrigins = [
	'http://127.0.0.1:3000', // Proxy
	'http://127.0.0.1:9000', // webpack-dev-server
	'http://127.0.0.1:5500', // VsCode live-server
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
