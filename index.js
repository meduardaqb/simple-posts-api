var Constants = require('./api/constants');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser.json());

require('./api/routes')(app);

app.get('/', function (req, res) {
    res.status(500);
    res.json({ MESSAGE : Constants.MESSAGES.INVALID_PATH });
});

app.listen(port, function () {
    console.log(Constants.MESSAGES.RUNNING_SERVER);
});