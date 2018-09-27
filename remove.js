module.exports = function(db) {
    db.collection("products").removeOne({"id":1});
}
