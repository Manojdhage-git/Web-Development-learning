const express=require("express");
const app=express();
const port=8080;
const path=require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));


//posts
let posts=[
    {
        username: "apnaCollege",
        content:" I love coding"
    },
    {
        username: "ManojDhage",
        content:" I love "
    },
    {
        username: "Virat",
        content:" I love i hagev coding"
    },
    {
        username: "shradhakhapra",
        content:" I love coding"
    }
];

//





//view index page
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})


//create post 
app.get("/posts/new",(req,res)=>[
    res.render("new.ejs")
])

// created post send to index
app.post("/posts",(req,res)=>{
   let{username,content}=req.body;
   posts.push({username,content});
res.redirect("/posts")
    // res.send("post request working")
})



app.listen(port,()=>{
    console.log("Listening to port : 8080");
})