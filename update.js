module.exports = function(db) {
  db.collection("product").updateOne(
    {"id":2},
    {$set: {"price":"$99"}}
  );
}
