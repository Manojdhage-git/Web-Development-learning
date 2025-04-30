// function execute again and again after given interval 
let id=
setInterval(()=>{
    console.log("manoj Dhage");
},2000);

// stoping this we need clearinerval()

setTimeout(()=>{
    clearInterval(id);
},10000);
