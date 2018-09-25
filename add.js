module.exports = function(app,db) {
  db.collection("product").insertMany([
    {id:1, name:"Phone", price:"$200", type:"Device", description:"Description 1"},
    {id:2, name:"Book", price:"$10", type:"Reading", description:"Description 2"},
    {id:3, name:"Skateboard", price:"$100", type:"Outdoors", description:"Description 3"}
  ])
}
