const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3003;
const db = require('../database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/:gameId/updates', (req, res) => {
	const { gameId } = req.params;
	db.getUpdatesByGameId(Number(gameId))
		.then(({rows}) => {
			res.send(rows);
		})
		.catch()
})

app.listen(port, () => { console.log(`listening on port ${port}!`)});