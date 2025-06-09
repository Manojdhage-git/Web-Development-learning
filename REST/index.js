const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const {v4:uuidv4}=require('uuid');
const methodOverride =require("method-override");

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));


//posts
let posts=[
    {
        id: uuidv4(),
        username: "apnaCollege",
        content:" I love coding"
    },
    {
        id: uuidv4(),
        username: "ManojDhage",
        content:" I love "
    },
    {
        id: uuidv4(),
        username: "Virat",
        content:" I love i hagev coding"
    },
    {   id: uuidv4(),
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
   let id=uuidv4();
   posts.push({id,username,content});
res.redirect("/posts")
    // res.send("post request working")
})

// sepearate page for every id
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    // console.log(id);
    let post=posts.find((p)=>id===p.id);
    // console.log(post);
    res.render("show.ejs",{post})
    // res.send("Request Working")
})

//patch-update spacific postt

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    console.log(post);

res.redirect("/posts");

})
// edit page

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post})
})


// Destroy or delete post
app.delete("/posts/:id",(req,res)=>{
     let {id}=req.params;
     posts=posts.filter((p)=>id!==p.id);
     res.redirect("/posts")
})

app.listen(port,()=>{
    console.log("Listening to port : 8080");
})