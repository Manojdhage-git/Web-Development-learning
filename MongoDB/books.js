const mongoose = require('mongoose');


 main().then((res)=>{
    console.log("Connection Successful")
 })
 .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Amazon');

}   

//------------SCHEMA VALIDATIONS.... like a constraint in sql
//rules for schema

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        maxLength:20,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        //error handling in validation
        min:[1,"Price is too low for Amazon Selling"]
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{ 
        type:String,
        enum:["fiction","non-fiction"]
    },
    genre:[String],
        })

//Explore mongoosejs to find more contraint.....

const Book = mongoose.model("Book",bookSchema);

let book1 = new Book({
    title :"Mathematics XII",
    author:"RD Sharma",
    price:1200,
    category:"fiction", //if this category not defined in the schema then it will give error.....
    genre:["abc","xyz"]
})

book1
    .save()
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err.errors.price.properties.message);//can access perticular errror
    });



//Update-- validation---above validation works for insertion for validation of update needs----
//needs to set true - runvalidators:true


book.findByIdAndUpdate("id",{price:-500},{runValidators:true})//id means id of user that generrated by mongodb
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

