var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('employeeList', ['employeeList']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + ""));
app.use(bodyParser.json());

app.get('/details', function(req, res) {
  db.employeeList.find(function (err, docs) {
    res.json(docs);
  });
});

app.post('/addDetails', function(req, res) {
  db.employeeList.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/deleteDetail:id', function(req,res) {
  db.employeeList.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, doc){
    res.json(doc);
  });
});

app.get('/details:id', function(req,res) {
  db.employeeList.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, doc) {
    res.json(doc);
  });
});

app.put('/updateDetails:id', function(req, res) {
  db.employeeList.findAndModify({query: {_id: mongojs.ObjectId(req.params.id)},
                                   update: {$set: {name: req.body.name, id: req.body.id, pNumber: req.body.pNumber}},
                                   new: true}, function (err, doc){
                                     res.json(doc);
                                   });
});

app.listen(8080);

console.log("Server running at port 8080");
