// const express = require("express");
// const logger = require("morgan");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.set('port', process.env.PORT || 9000);
// const server = app.listen(app.get('port'),() => {
//     console.log(`Express server listening on port ${server.address().port}`);
// });

const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const t9 = require("t9-rest-api");

let hostname =  'localhost';
let port = 9000;
let router = express.Router();

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use (express.static(__dirname + '/app'));
app.use('/api/wordCombinations', t9);

app.get('/t9', function(req, res) {
    console.log(res.statusCode);
    res.json({ ime: 'Srdjan' })
});

app.post('t9', function(req, res){
    console.log(res.statusCode);
});

app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});