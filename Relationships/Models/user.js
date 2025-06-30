const mongoose=require("mongoose");
const {Schema}=mongoose;

main()
    .then(()=> console.log("Connection Succesfull"))
    .catch(err=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema=new Schema({
    username:String,
    addresses:[
        {   _id:false,
            location:String,
            city:String,
        },
    ],
});

const User=mongoose.model("User",userSchema);

const addUsers=async()=>{
    let user1=new User({
        username:"Sherlockhomes",
        address:[
            {   
                location:"2212 bakers street",
                city:"london"
            }
        ]
    })
    user1.addresses.push({location:"p77 wallsgtrik",city:"london"});
    await user1.save();
}

addUsers();