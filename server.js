// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var timestamp = require('unix-timestamp');
var mymodule = require('./router.js')

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:query", function (request, response) {
  var query = parseInt(request.params.query, 10);
  
  if (!isNaN(query) && query.toString().length === 10) {
    //if it's a 10 digit number
    var type = '10 digit number'
    var date = new Date(query * 1000);
    var unixtime = query;
  } else {
    var type = 'not 10 digit number';
    var date = new Date(request.params.query)
    var unixtime = date.getTime() / 1000;
  }
  var mm = date.getMonth() + 1;
  var dd = date.getDate();
  var yyyy = date.getFullYear();  
  var moduletest = mymodule("sent parameter", function callback(err, data) {
    if (err) throw err;
    return data;
  });
  var arr = {
    //'type': type,
    //'length': request.params.query.length,
    'unixtime': unixtime,
    'translated unixtime': mm + "-" + dd + "-" + yyyy,
    //'normietime': normietime,//normietime.getMonth() + "--" + normietime.getDate() + "-" + normietime.getFullYear(),
    //'module test here': moduletest
  };
  response.end(JSON.stringify(arr));
});

app.get("/*", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
})
        

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
