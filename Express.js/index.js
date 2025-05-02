const express=require("express");

const app=express();

// console.dir(app);


let port=3000; //8080

app.listen(port, ()=>{
    console.log(`App is Listening on port ${port} `);
})

//ctrl+c exit server.........


//app.use

app.use((req,res)=>{
    console.log("Request Recieveed")

    // res.send("This is a basic Response")

    // res.send({
    //     name:"Manoj",
    //     color:"red"
    // });


    let code="<h1>Fruits</h1> <ul><li>Mango</li><li>Banana</li><li>Orange</li></ul>";
    res.send(code);
})