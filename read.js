module.exports = function(app,db) {
  db.collection("product").find(
    {id:{$gt: 0}}
  );
}
