var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var mongoDB = 'mongodb://admin:admin123@ds137863.mlab.com:37863/db1';
mongoose.connect(mongoDB);

var Schema = mongoose.Schema;
var noteSchema = new Schema({
  date: String,
  title: String,
  content: String
})
var noteModel = mongoose.model('note', noteSchema);


//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.use(cors({
//     origin:[ 'http://localhost:4200','http://127.0.0.1:4200' ],
//     credentials:true
// }))
//cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  //add
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS"),
    res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/api/notes', function (req, res) {

  noteModel.find(function (err, data) {
    // res.send("Hello world");
    res.json(data);
  });

})
//send data to the db
app.post('/api/notes', function (req, res) {
  console.log("successful");
  console.log(req.body.date);
  console.log(req.body.title);
  console.log(req.body.content);

  noteModel.create({
    date: req.body.date,
    title: req.body.title,
    content: req.body.content
  });
  //res.status(201).json(message);
})

//retrieve data from the db
app.get('/api/notes', function (req, res) {

  noteModel.find(function (err, data) {
    res.json(data);
    console.log("data retrieved")
  });

})

//delete data from the db
app.delete('/api/notes/:id', function (req, res) {
  console.log(req.params.id);

  noteModel.deleteOne({_id: req.params.id},
    function (err) {
    })
})

app.get('/api/notes/:id', function (req, res) {
  console.log("read review" + req.params.id);

  noteModel.findById(req.params.id,
    function (err, data) {
      res.json(data);
    })
})

app.get('/', (req, res) => res.json({message: 'Hello'}) )

// update
app.get('/api/notes/:id', function(req, res){
  console.log("Read review " +req.params.id);

  noteModel.find({_id : req.params.id},
 // NoteModel.findById(req.params.id,
    function (err, data) {
      res.json(data);
    });
})

app.put('/api/notes/:id', function(req, res){
  console.log("Update Review" +req.params.id);
  console.log(req.body.date);
  console.log(req.body.title);
  console.log(req.body.content);

  noteModel.findByIdAndUpdate(req.params.id, req.body,
    function(err, data){
     // res.json(data);
      res.send(data);
    })
})

//===============================================================
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})
