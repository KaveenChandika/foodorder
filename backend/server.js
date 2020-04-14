const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
const DB = "mongodb://127.0.0.1:27017/learn";
const MongoClient = require('mongodb').MongoClient;


app.get('/',(req,res)=>{
  res.send("Starting...")
})

/**
 * @function products
 * @comment  get all product
 */
app.get('/api/products',(req,res)=>{
  var status = {status:0}
  MongoClient.connect(DB, function (err, db) {
      db.collection('product',function(err,collection){
        collection.find(status).toArray(function(err,items){
          if(err)
            throw err;
            res.send(items);
        });
      })
  });
})


/**
 * @function addProduct
 * @comment add product
 */
app.post('/api/addProduct',(req,res)=>{
  var myObj = {
        p_id:req.body.data.id,
        p_name:req.body.data.name,
        p_price:req.body.data.price,
        qty:req.body.data.qty,
        status:0
      }
  MongoClient.connect("mongodb://127.0.0.1:27017/learn", function (err, db) {
    db.collection('product',function(err,collection){
      collection.insertOne(myObj,function(err,res){
        if(err) throw err;
        console.log("1 document inserted");
      });
    })
  })
});

/**
 * @function deleteProduct
 * @comment delete product
 */
app.post('/api/deleteProduct/:id', (req,res)=>{
    var o_id = new mongo.ObjectID(req.params.id);
    var id = {_id:o_id}
    var status = {status:1}
    // MongoClient.connect(DB,function (err,db){
    //   db.collection('product',function(err,collection){
    //     collection.updateOne(id,status, function(err,res){
    //       if(err) throw err;
    //       console.log("data has deleted");
    //     })
    //   });
    // });
});


/**
 * @function getEditProduct
 * @comment get relavant product for edit
 */
app.get('/api/getEditProduct/:id',(req,res) =>{
  var o_id  = new mongo.ObjectID(req.params.id);
  var query = { "_id":o_id  };
  MongoClient.connect("mongodb://127.0.0.1:27017/learn", function (err, db) {
    db.collection('product',function(err,collection){
      collection.findOne(query,function(err,items){
        if(err)
        throw err;
        res.send(items);
      });
    })
  });
})


/**
 * @function updateProduct
 * @comment update relavant product
 */
app.post('/api/updateProduct',(req,res)=>{
  var updateData = {
      p_id:req.body.data.p_id,
      p_name:req.body.data.p_name,
      p_price:req.body.data.p_price,
      qty:req.body.data.qty,
      status:0
  }
  var o_id  = new mongo.ObjectID(req.body.data._id);
  var id = {_id :o_id}
  MongoClient.connect("mongodb://127.0.0.1:27017/learn", function (err, db) {
      db.collection('product',function(err,collection){
        collection.updateOne(id,updateData,function(err,items){
          if(err)
            throw err;
            console.log("1 document updated");
        });
      })
  });
});


app.listen(5001,()=>{
  console.log("Listening on port 5001");
})
