var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


// parse application/json
app.use(bodyParser.json());

var routes = require("./routes");
app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});