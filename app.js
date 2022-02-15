const express = require('express');
const app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoURL = "mongodb+srv://test:test123@cluster0.87fy1.mongodb.net/sourav_site?retryWrites=true&w=majority";
let port = process.env.PORT || 4000;
const cors = require('cors');
var db;

app.use(cors());

app.get('/',(req,res) => {
    res.send("Welcome to Sourav API");
});

app.get('/projects',(req,res) => {
    db.collection('project').find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result);
    });
});

app.get('/experience',(req,res) => {
    db.collection('experience').find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result);
    })
})


MongoClient.connect(mongoURL, (err,client) => {
    if(err) console.log("Error while Connecting");
    db = client.db('sourav_site');
    app.listen(port,() =>{
        console.log(`Listening to the port no. ${port}`);
    })
})