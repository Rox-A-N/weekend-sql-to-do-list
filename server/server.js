const express = require('express'); // setting up express
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Serve "static assets" (html, css, client-side js)
// from the server/public folder
app.use(express.static('server/public'));

// start express
const port = 5001;
app.listen(port, () => {
    console.log('listening on port ', port);
});

let toDo = [];

app.get( '/weekendToDo', function(req, res) {
    console.log('request for /weekendToDo was made');
    res.send(toDo);
    res.sendStatus(201);
});

app.post( '/weekendToDo', function(req, res) {
    console.log( 'in the post request!', req.body);
    toDo.at(req.body);
    res.sendStatus(201);
})