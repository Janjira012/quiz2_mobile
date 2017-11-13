//connect database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";
var db;
MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    db = database;
    console.log("Connected to " + url);
});

function findAll(req, res) {
    //Get data from mogodb
        var query = {};
        db.collection("user").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });

}
function search(req, res) {
    var fname = req.query.lfname;
    //seach
    console.log(fname);
    // if (err) throw err;
    var query = {last_name:lname};
    db.collection("user").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  }

function seachByRole(req, res) {
    var role = req.params.role;
    //seach
    if (err) throw err;
    var query = {role:role};
    db.collection("user").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  }

module.exports = {
    findAll: findAll,
    search: search,
    seachByRole: seachByRole
};