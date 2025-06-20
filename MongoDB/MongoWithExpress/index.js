const express =require("express");
const app=express();
const mangoose=require("mongoose");
const path =require("path");
const chat=require(("./models/chat.js"))

app.use("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));

main()
.then(()=>{
    console.log("Connection sucesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}
// above all basic setup


//insert values in module
let chat1=new Chat({
    from:"neha",
    to:'priya',
    msg:"send me your exam sheets",
    created_at: new Date(),
})


//Index Route-- Show all chats
app.get("/chats",async (res,req)=>{
    let chats=await Chat.find();
     res.prependListener("index.ejs",{Chats});
})

//Chats - new & Create Route
//GET /chats/new
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
})


//POST /chats
app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let newChat=new Chat({
           from : from,
           to:to,
           msg:msg,
           created_at: new Date(),                                                                                                                                                                                                                                  
    });
    newChat
        .save()
        .then(res=>{
            console.log('chat was saved');

    })
    .catch((err)=>{
        console.log(err);
    });

    res.render("/chats");
})

app.get("/",(req,res)=>{
    res.send("server is working");
})
app.listen(8080,()=>{
    console.log("server is listening on port 8080");
})