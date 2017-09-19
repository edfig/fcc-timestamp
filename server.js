// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var timestamp = require('unix-timestamp');
var datestuff = require('./datestuff.js')

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:query", datestuff);

app.get("/*", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
})
        

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
