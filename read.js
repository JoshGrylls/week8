module.exports = function(db) {
  db.collection("product").find({id:{$gt: 0}});
}
