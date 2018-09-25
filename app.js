const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
  //Callback function cod, when we have a connection start the rest of the app
  if(err) {return console.log(err)}
  const dbName = 'mydb';
  const db = client.db(dbName);
  require('./listen.js')(http);
  require('./create.js')(app, db);
  //require('./add.js')(app, db);
  require('./remove.js')(app, db);
  require('./update.js')(app, db);
  require('./read.js')(app, db);
});
