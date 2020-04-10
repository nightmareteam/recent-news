const { Pool } = require('pg');

const pool = new Pool({
	user: 'jin',
	password: 'abc',
	database: 'updates',
	host: 'localhost',
	port: 5432
});

const getUpdatesByGameId = (gameId, page) => {
    const query = 'SELECT * FROM updates WHERE game_id = $1 ORDER BY post_date OFFSET $2 LIMIT $3'
	return pool
		.query(
            query,
            [gameId, page * 5 || 0, page ? 5 : 2])
}

module.exports = {
	getUpdatesByGameId,
	end: pool.end.bind(pool)
}