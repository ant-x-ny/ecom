const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const { MongoClient } = require('mongodb');

app.use(cors())
app.use(express.json());


app.get('/products', async function (req, res) {
    let userdb = await axios.get('https://fakestoreapi.com/products');
    res.json(userdb.data);
 });

 app.post('/addproduct', async function(req, res) {
    let output = await db.collection('products').insertOne(req.body);
    console.log(req.body);
})


app.listen(2000, function() {
    console.log('server listening on port 2000');
    })