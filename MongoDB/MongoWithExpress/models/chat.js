const { default: mongoose } = require("mongoose");
const mangoose=require("mongoose");

//schema created in modules
const chatSchema=new mangoose.Schema({
    from :{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        maxLength:50,
    },
    created_at:{
        type:Date,
        required:true,
    },
});

const Chat=mongoose.model;("Chat",chatSchema);

module.exports=Chat;