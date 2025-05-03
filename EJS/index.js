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


