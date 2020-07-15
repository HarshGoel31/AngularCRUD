var express = require('express');
var mysql = require('mysql');
var app = express();
const cors=require('cors');

app.use(express.static('public'));
app.use(cors);

app.get('', function (req, res) {
  res.sendFile(__dirname + "/" + "app.component.html");
})
app.get('/register', function (req, res) {
  response = {
    name: req.query.nameBox,
    password: req.query.passwordBox
    
  };
  console.log(response);
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'registerdb'
  });
  connection.connect();
  console.log("connected to mysql");
  var registrationData = response;
  var query = connection.query('insert into registration set ?', registrationData, function (err, result) {
    if (err) {
      console.error(err);
      return res.send(err);
    } else {
      return res.send('Ok');
    }
    res.end(JSON.stringify(response));

    //res.end();
  })
})

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("connecting to mysql app listening at http://%s:%s", host, port)
})


