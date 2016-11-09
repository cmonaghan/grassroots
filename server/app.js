var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// parse request data
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// serve static files
app.use(express.static('app'));

app.post('/representatives', function(req, res) {
  console.log(req.body);
});

app.listen(3000, function () {
  console.log('Listening on port 3000...');
});
