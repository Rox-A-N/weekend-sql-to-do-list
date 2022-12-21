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

// get data
router.get('/', (req, res) => {
    let queryText = 'SELECT * from "to_do";';
    pool.query(queryText)
    .then((result) => {
        console.log('results from DB', result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error making a query', error);
        res.sendStatus(500);
    })
});

// post req to send data
router.post('/', (req, res) => {
    const newToDo = req.body;
    const queryText = `
        INSERT INTO "to_do" ("addTask", "completed")
        VALUES (${newToDo.addTask}, ${newToDo.completed});
    `;
    pool.query(queryText)
    .then((result) => {
        console.log('result', result);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error making insert query', error);
        res.sendStatus(500);
    });
});

module.exports = router;
