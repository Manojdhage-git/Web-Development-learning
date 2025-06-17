const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');
                                           //database name
 main().then((res)=>{
    console.log("Connection Successful")
 })
 .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}   

// Create Schema
const userSchema=new mongoose.Schema({
    name: String,
    email :String,
    age: Number,
})

//Models-we constrcut documents..

const User=mongoose.model("User",userSchema);


//Insert data

const user1= new User({
    name:"Adam",
    email: "adam@yahoo.com",
    age:55,
})

// user1.save(); returns promise

user1.save().then(res=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);;
})

//Insert Multiple -insertMany

User.insertMany([
    {name:"tony",email:"abc@gmail.com",age:50},
     {name:"tonya",email:"abc1@gmail.com",age:50},
      {name:"tonyb",email:"abc2@gmail.com",age:50},
]).then((res)=>{
    console.log(res);''
});

//find

User.find({}).then((res)=>{ //{age:{$gt:48}} // findOne... findById-{IDvALUE}
    console.log(res); //[0]
}).catch((err)=>{
    console.log(err);
});

//UPDATE

User.updateOne({name:"bruce"},{age:49}).then((res)=>{ // not need $set
    console.log(res);

})
.catch((err)=>{
    console.log(err);
});

//update and get valuees changed

User.findOneAndUpdate({name:"bruce"},{age:55}).then((res)=>{ // not need $set
    console.log(res);

})
.catch((err)=>{
    console.log(err);
});

// firstly it finds then update 


User.findOneAndUpdate({name:"bruce"},{age:55},{new:true}).then((res)=>{ 
    console.log(res);

})
.catch((err)=>{
    console.log(err);
});

//how it gives updated values after seting new:true...

