const express=require("express");
const path=require("path")
const app=express();

const port=8080;

app.set("view engine","ejs");
app.set('views',Path.join(__dirname,"/views"));// when server runs outside the folder then we have to set views and acquire path

app.get("/",(req,res)=>{
    res.render("home.ejs");//.ejs not necessary
})



app.listen(port,()=>{
    console.log(`Listening port ${port}`)
})


