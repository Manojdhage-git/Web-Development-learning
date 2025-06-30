const mongoose=require("mongoose");
const {Schema}=mongoose;

main()
    .then(()=> console.log("Connection Succesfull"))
    .catch(err=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema=new Schema({
  item:String,
  price:Number,
});



const customerSchema=new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref: "Order",
        }
    ]
})

const order = mongoose.model("Order", orderSchema);

const customer=mongoose.model("customer",customerSchema);

const addCustomer=async()=>{
    let cust1=new customer({
        name:"Rahul Kumar",
       
    });
    let order1=await order.findOne({item:"Chips"});
    let order2= await order.findOne({item: "Chocholate"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);
    
    let result= await cust1.save();
    console.log(result);
}

addCustomer();


//populate------------------------------------------
const findCustomer=async ()=>{
    let result = await customer.find({}).populate("orders");
    console.log(result);
    console.log(result[0]);
}

findCustomer();
// const addOrders=async()=>{
//    let res = await order.insertMany([
//   {item: "Samosa", price: 12},
//   {item: "Chips", price: 10},
//   {item: "Chocolate", price: 40}
// ]);

//     console.log(res);
// }

// addOrders();