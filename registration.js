
// parse application/json
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 

app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'registerdb'
});

 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show all products
app.get('/api/register',(req, res) => {
  let sql = "SELECT * FROM registration";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
// //show single product
app.get('/api/register/:name',(req, res) => {
let sql = "SELECT * FROM registration WHERE name= '"+req.params.name+"'";
 let query = conn.query(sql, (err, results) => {
   if(err) throw err;
   res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
 });
});
 
//add new product
app.post('/api/register',(req, res) => {
  let data = {name: req.body.name, password: req.body.password};
  let sql = "INSERT INTO registration SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
// update product
app.put('/api/register/:name',(req, res) => {
  let data = {name: req.body.name, password: req.body.password};
  let sql = "UPDATE registration SET name='"+req.body.name+"',password='"+req.body.password+"' WHERE name='"+req.params.name+"'";
  let query = conn.query(sql,data, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});


 
//Delete product
 app.delete('/api/register/:name',(req, res) => {
   let sql = "DELETE FROM registration WHERE name= '"+req.params.name+"'";
  
   let query = conn.query(sql, (err, results) => {
     if(err) throw err;
       res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
   });
 });
 
// //Server listening
app.listen(5000,() =>{
  console.log('Server started on port 4000...');
});



	