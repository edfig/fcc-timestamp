module.exports = function (request, response) {
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

  var arr = {
    //'type': type,
    //'length': request.params.query.length,
    'unixtime': unixtime,
    'translated unixtime': mm + "-" + dd + "-" + yyyy,
    //'normietime': normietime,//normietime.getMonth() + "--" + normietime.getDate() + "-" + normietime.getFullYear(),
    //'module test here': moduletest
  };
  response.end(JSON.stringify(arr));
}