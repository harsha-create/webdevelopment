const express=require('express')
const app=express()
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [{name:"",email:"",currentBalance:""},
  {name:"",email:"",currentBalance:""},
  {name:"",email:"",currentBalance:""},
  {name:"",email:"",currentBalance:""},
  {name:"",email:"",currentBalance:""},
  {name:"",email:"",currentBalance:""},
  {name:"",email:"",currentBalance:""},
  {name:"",email:"",currentBalance:""},
  {name:"",email:"",currentBalance:""},
  {name:"",email:"",currentBalance:""}]
  dbo.createCollection("dummytwo",(err,res)=>{
    if(err) throw err;
    dbo.collection("dummytwo").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
  });
});
  
});

app.listen(3989)
