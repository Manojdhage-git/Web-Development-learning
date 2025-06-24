const express=require("express");
const app=express();

// Middlware function
//middlware sends request so next root page will not work not send respose
//work with every request , send res to every req.

// app.use(()=>{
//     console.log("Hi, i am middleware");
   
// })

// app.use((req,res)=>{
//     console.log("Hi, i am middleware");
//    res.send("middleware is finished");
// })

//Using next
// to execute next thing

// app.use((req,res,next)=>{
//    console.log("middleware 1st is finished");
//    next();
//    console.log("this is after next, things excute even after next();")
//    return next();//then now work 
// })

// app.use((req,res,next)=>{
//    console.log("middleware 2nd is finished");
//    next();

// })


// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
//creating utility middleware
//Logger

// app.use((req,res,next)=>{
//     req.time=new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);//req.method,req.hostname,req.path,req.
//     next();
// })


// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// app.use callback -path
// middleware path is only work fot that perticular path
// app.use("/random",(req,res,next)=>{
//     console.log("I am only for random");
//     next();
// })

// app.get("/",(req,res)=>{
//     res.send("i am root");
// })
// app.get("/random",(req,res)=>{
//     res.send("this is a random page")
// })

// //404
// app.use((req,res)=>{
//     res.status(404).send("Page not found");
// })


// ......................................................................................................
//Acitivity
//API token as a string

// app.use("/api",(req,res,next)=>{
//     let{token}=req.query;
//     if(token==="giveaccess"){
//         next();
//     }
//     res.send("Access Denied")
// })

// app.get("/api",(req,res)=>{
//     res.send("data");
// })

// // //404
// app.use((req,res)=>{
//     res.status(404).send("Page not found");
// })


///////////////////////////////////////////////////////////////////////////////////////
//multiple middleware
// const checkToken=app.use("/api",(req,res,next)=>{
//     let{token}=req.query;
//     if(token==="giveaccess"){
//         next();
//     }
//     res.send("Access Denied")
// })

// app.get("/api",checkToken,(req,res)=>{
//     res.send("data");
// })


// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// Handling Errors
// Express Default Error Handler
// app.get("/wrong",(req,res)=>{
//     abcd=abcd;
// })

const checkToken=app.use("/api",(req,res,next)=>{
    let{token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    throw new Error("Access Denied")
})

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
})

app.listen(8080,()=>{
    console.log("server listening to port 8080")
})