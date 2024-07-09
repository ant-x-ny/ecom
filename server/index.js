const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient } = require('mongodb');

app.use(cors())
app.use(express.json());

async function mongoConnect() {
    let client = new MongoClient('MONGODBServerLinkWithCollectionsProducts');
    await client.connect();
    db = client.db('homepagetest');
    ;
 }

app.get('/products', async function (req, res) {
    let userdb = db.collection('products')
    let output = await userdb.find({}).toArray();
    res.json(output);
 });

 app.post('/addproduct', async function(req, res) {
    let output = await db.collection('products').insertOne(req.body);
    console.log(req.body);
})


app.listen(2000, function() {
    console.log('server listening on port 2000');
    mongoConnect();
    })