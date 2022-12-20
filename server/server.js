const express = require('express'); // setting up express
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Serve "static assets" (html, css, client-side js)
// from the server/public folder
app.use(express.static('server/public'));

const toDoRouter = require('./routes/to_do_router');

app.use('/weekendToDo', toDoRouter);

// start express
const port = 5001;
app.listen(port, () => {
    console.log('listening on port ', port);
});



