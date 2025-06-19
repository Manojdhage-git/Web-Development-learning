const mangoose = require("mongoose");

main()
    .then(() => {
        console.log("Connection sucesfull");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let chats = [
    {
        from: "neha",
        to: "preeti",
        msg: "send me notes for the exam",
        created_at: new Date(),
    },
    {
        from: "nehaa",
        to: "preetia",
        msg: "send me notes for the exam",
        created_at: new Date(),
    },
    {
        from: "nehaaa",
        to: "preetiaa",
        msg: "send me notes for the exam",
        created_at: new Date(),
    }
]


Chat.insertMany(allChats);