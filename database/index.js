const { Pool } = require('pg');

const pool = new Pool({
	user: 'jin',
	password: 'abc',
	database: 'updates',
	host: 'localhost',
	port: 5432
});

const getUpdatesByGameId = (gameId) => {
	return pool
		.query('SELECT * FROM updates WHERE game_id = $1', [gameId])
}

module.exports = {
	getUpdatesByGameId,
	end: pool.end.bind(pool)
}