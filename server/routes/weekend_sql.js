const express = require( 'express' );
const router = express.Router();
const pg = require( 'pg' );

const Pool = pg.Pool;

const pool = new Pool({
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', () => {
    console.log('postgres is connected');
});

pool.on( 'error', (error) => {
    console.log('error! postgres NOT connected', error);
});

router.get('/', (req, res) => {
    let queryText = 'SELECT * from "to_do";';
    pool.query(queryText)
    .then((result) => {
        console.log('results from DB', result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error making a query', error);
    })
});

module.exports = router;
