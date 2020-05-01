const express = require('express');
const cors = require('cors');
var mysql = require('mysql');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const bcrypt = require('bcrypt');
const md5 = require('md5');
const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "foodorder"
});

const login = [];

app.get('/',(req,res)=>{
  res.send("Starting...")
})

app.post('/api/login', (req,res)=>{
    let hash = md5(req.body.password);
    const userLogin = {
      username:req.body.username,
      password:hash
    }
    const response = { result:true}
    const error = {result:false}
    var sqlLogin = `SELECT  * FROM tbl_user WHERE username='${userLogin.username}' and password='${userLogin.password}'`
    con.query(sqlLogin,function(err,result){
      if(err) throw err;
      if(result.length == 0)
        res.send({"result":false})
      else
        res.send({"result":true})
    })
})


app.post('/api/addUsers',(req,res) =>{
    let hash = md5(req.body.userData.pwd);
    var sql = `INSERT INTO  tbl_user (fname,address,email,nic,tel,username,password,status)  VALUES ('${req.body.userData.name}', '${req.body.userData.address}', '${req.body.userData.email}', '${req.body.userData.nic}', '${req.body.userData.tel}', '${req.body.userData.uname}', '${hash}','0' ) `;
    con.query(sql,function(err,result){
      console.log("1 record added");
    })
})

app.get('/api/viewUsers',(req,res)=>{
    var sql = "SELECT * FROM tbl_user tu WHERE tu.status=0";
    con.query(sql,function(err,result){
      res.send(result)
    })
})

app.get('/api/getEditUser/:id',(req,res)=>{
   var id = (req.params.id);
    var sql = `SELECT * FROM tbl_user tu WHERE tu.status=0 AND tu.u_id='${id}'`;
    con.query(sql,function(err,result){
      res.send(result);
    })
})

app.post('/api/updateUser',(req,res)=>{
  let hash = md5(req.body.data.pwd);
  var updateObj = {
    u_id:req.body.data.u_id,
    fname:req.body.data.name,
    address:req.body.data.address,
    email:req.body.data.email,
    nic:req.body.data.nic,
    tel:req.body.data.tel,
    username:req.body.data.uname,
    password: hash   
  }
    var updateSql = `UPDATE tbl_user SET 
                        fname='${updateObj.fname}',
                        address='${updateObj.address}',
                        email='${updateObj.email}',
                        nic='${updateObj.nic}',
                        tel='${updateObj.tel}',
                        username='${updateObj.username}',
                        password='${updateObj.password}' 
                      WHERE
                        u_id = '${updateObj.u_id}'`
    con.query(updateSql,function(err,result){
      if (err) throw err;
      console.log("1 record updated");
    })
})


app.listen(5001,()=>{
  console.log("Listening on port 5001");
})
