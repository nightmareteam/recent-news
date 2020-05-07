const { Pool } = require('pg');

const pool = new Pool({
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: 'recent-news',
	host: process.env.DB_DOMAIN,
	port: 5432,
});

const getUpdatesByGameId = (gameId, page) => (
	pool
		.query(
            'SELECT * FROM updates WHERE game_id = $1 ORDER BY post_date OFFSET $2 LIMIT $3',
			[gameId, page * 5 || 0, page ? 5 : 2],
		)
);

module.exports = {
	getUpdatesByGameId,
}