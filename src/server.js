const knex = require('knex');
const app = require('./app');

const { PORT, DATABASE_URL } = require('./config');

const db = knex({
	client: 'pg',
	connection:
		'postgres://qdvzsdpdooqzzp:974beecc0b1ebe4332819af78fe365cdfe23f6e752ab74f495f0247460d2ad51@ec2-52-23-45-36.compute-1.amazonaws.com:5432/d6i50c86ofpfrp' +
		'?ssl=true',
});

app.set('db', db);

app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`);
	console.log(DATABASE_URL, 'here');
});
