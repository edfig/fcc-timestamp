// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var timestamp = require('unix-timestamp');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:query", function (request, response) {
  var query = parseInt(request.params.query, 10);
  var date = new Date(query * 1000);
  var mm = date.getMonth();
  var dd = date.getDate();
  var yyyy = date.getFullYear();
  var arr = {
    'response type': typeof request.params.query,
    'length': request.params.query.length,
    'unixtime': query,
    'normietime': mm + "-" + dd + "-" + yyyy
  };
  response.end(JSON.stringify(arr));
  
});
        
app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
