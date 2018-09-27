module.exports = function(http){
  var server = http.listen(27017, function (http) {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server listening on: "+ host + " port: " + port);
  });
}
