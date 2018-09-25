module.exports = function(app,db) {
  db.collection("product").deleteOne({"id":1});
}
