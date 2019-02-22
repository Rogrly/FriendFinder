//Variables to load npm packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//Loads up express package and setting port number
var app = express();
var PORT = process.env.PORT || 3000;

//Loads Express to implement bodyParsing with the data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);
//Listener to execute the server and console the Port Number

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
