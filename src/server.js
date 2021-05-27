const knex = require('knex');
const app = require('./app');

const { PORT, DATABASE_URL } = require('./config');

const db = knex({
	client: 'pg',
	connection:
		'postgres://atgylrivzwlqdl:a5f013a92f4e973b49db770bc6a271d98c3b77d76a2b3fae7a7ff34387b2adce@ec2-54-224-194-214.compute-1.amazonaws.com:5432/deiepo77t0pds8',
});

app.set('db', db);

app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`);
	console.log(DATABASE_URL, 'here');
});
