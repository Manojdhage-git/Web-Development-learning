const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "/views")); // when server runs outside the folder then we have to set views and acquire path

app.get("/", (req, res) => {
    res.render("home.ejs");//.ejs not necessary
})


// geting data from database -- passing data into Ejs
app.get("/rolldice", (req, res) => {
    let diceval=Math.floor(Math.random()*6)+1;
res.render("rolldice.ejs",{num:diceval})
})
 

app.listen(port, () => {
    console.log(`Listening port ${port}`)
})


// app.get("/ig/:username",(req,res)=>{
//     const followers=["adam","bob",'steve','abc'];
//     let {username}=req.params;
//     res.render("Instagram.ejs",{username,followers})
// })



//instagram activity


app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
   const instadata=require("./data.json");
  const data= instadata[username]
    if(data){
        res.render("Instagram.ejs",{data})
    }else{
        res.render("error.ejs")
    }
})
