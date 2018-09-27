const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
  //Callback function cod, when we have a connection start the rest of the app
  if(err) {
    return console.log(err);
  }
  console.log("connected to db..");
  const dbName = 'mydb';
  const db = client.db(dbName);
  const colName = "product";

  require('./listen.js')(http);
  require('./create.js')(db);
  require('./add.js')(db);
  require('./remove.js')(db);
  require('./update.js')(db);
  require('./read.js')(db);
});
