module.exports = function(app,db) {
  db.collection("product").updateOne(
    {"id":2},
    {$set: {"price":"$99"}}
  );
}
