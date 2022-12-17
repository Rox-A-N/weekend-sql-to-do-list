const pg = require( 'pg' ); // this is how we talk to our PostgreSQL database

const Pool = pg.Pool;   // Pool is a method in the pg library- pool of connection to our db

const pool = new Pool({
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432,
    max: 10,    // max amount of connections/queries that can happen at once
    idleTimeoutMillis: 30000    // 30 secs, if it takes longer than 30 secs, cancel query
});

pool.on( 'connect', () => {
    console.log( 'postgres is connected' );
});

pool.on( 'error', (error) => {
    console.log( 'error with postgres pool', error );   // shows us the error message
});


module.exports = pool;