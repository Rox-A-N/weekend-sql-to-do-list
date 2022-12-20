let express = require( 'express' ); // creating another instance of express
let router = express.Router();  // digging into express to use that Router method

const toDo = [];

router.get( '/', function(req, res) {
    console.log('request for /weekendToDo was made');
    res.send(toDo);
});

router.post('/', function(req, res) {
    console.log( 'in the post request!', req.body);
    toDo.push(req.body);
    res.sendStatus(201);
});

module.exports = router;