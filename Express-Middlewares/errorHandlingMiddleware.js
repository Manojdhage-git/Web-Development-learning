const express=require("express");
const app=express();
// require error
const ExpressError = require("./ExpressError");


// custom Error Class
const checkToken = (req, res, next) => {
    const { token } = req.query;
    if (token === "giveaccess") {
        return next();
    }
    throw new ExpressError(401, "Access Denied");
};


app.get("/api",checkToken,(req,res)=>{
    res.send("data");
})



//Assignment
//create an admin route and an error witth a 403 status code.

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin is Forbidden");
})


app.use((err,req,res,next)=>{
  let {status,message}=err; //can asign =defalut status and message
//   res.send(err);
    res.status(status).send(message);
})


app.listen(8080,()=>{
    console.log("server listening to port 8080")
})