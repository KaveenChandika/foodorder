var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://127.0.0.1:27017/learn", function (err, db) {
   
        // db.collection('product',function (err,collection){
        //     // collection.insert({p_id:1,p_name:"HARRIS BRUSH",qty:"10","status":0});
        //     // collection.insert({p_id:2,p_name:"WOOD PUTTY",qty:"15","status":0});
        //     // collection.insert({p_id:3,p_name:"BORMA WORM",qty:"23","status":0});
        //     collection.insert({p_id:3,p_name:"JAT SANTIZER",qty:"23","status":0});
          
        //     db.collection('Persons').count(function (err, count) {
        //       if (err) throw err;
              
        //         console.log('Total Rows: ' + count);
        //     });
        //   });


        db.collection('product',function(err,collection){
            collection.find().toArray(function(err,items){
              if(err)
                throw err;
              console.log(items);
            });
        })
});

