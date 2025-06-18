const { faker } = require('@faker-js/faker');
// Get the client
const mysql = require('mysql2');
const express = require("express");
const app=express();
const path=require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '1234@MANoj'
});



//generate random data using faker-- insert data in bulk
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),

  ];
};

//total number of users shows in home page
app.get("/",(req,res)=>{
  let q="SELECT count(*) FROM user";
try {
  
  connection.query(q,(err, result) => {
    if (err) throw err;
    let count=result[0]["count(*)"];
    // console.log(result);
    res.render("home.ejs",{count})
    // res.send(result[0]);
    // res.send(result[0]["count(*)"]);// key shows
  
  });
} catch (err) {
  console.log(err);
  res.send("Some error in DB");
}

})

//fettch and show table data on /show path

app.get("/user",(req,res)=>{
  // res.send("sucess")
  let q="SELECT * FROM user";
  try {
  
  connection.query(q,(err, users) => {
    if (err) throw err;
  // console.log(result);
  // res.send(result);

    res.render("showusers.ejs",{users});
  
  });
} catch (err) {
  console.log(err);
  res.send("Some error in DB");
}

})


//Edit Route

app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`SELECT * FROM user WHERE id='${id}'`;
 try {
  
  connection.query(q,(err, result) => {
    if (err) throw err;
    let user=result[0];
    res.render("edit.ejs",{user});
  
  });
} catch (err) {
  console.log(err);
  res.send("Some error in DB");
}
});

//Update route DB
app.patch("/user/:id",(req,res)=>{
 let {id}=req.params;
 let {password: formPass,username: newUsername}=req.body;
  let q=`SELECT * FROM user WHERE id='${id}'`;
 try {
  
  connection.query(q,(err, result) => {
    if (err) throw err;
    let user=result[0];
    if(formPass!= user.password){
      res.send("Passward Incorect")
    }else{
      let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
      connection.query(q2,(er,result)=>{
        if (err) throw err;
        res.redirect("/user");
      });
    }

  
  });
} catch (err) {
  console.log(err);
  res.send("Some error in DB");
}

})



app.listen("8080",()=>{
  console.log("server is listening to port 8080")
})




// connection.end(); not need here ends with res,req