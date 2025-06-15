const { faker } = require('@faker-js/faker');
// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '1234@MANoj'
});




// let q="SHOW TABLES";

//new data insert
// let q = "INSERT INTO user(id,username,email,password)VALUES ?"; //????
// let users = [
//   ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//   ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
// ];



//generate random data using faker-- insert data in bulk
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),

  ];
};

let q = "INSERT INTO user(id,username,email,password)VALUES ?";
//insert data in bulk 100 rows
let data=[];
for(let i=1;i<=100;i++){
//  console.log(getRandomUser());
data.push(getRandomUser());
}

try {
  // connection.query(q,user,(err,result)=>{
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result);//array--- result.length
    // console.log(result[0]);
    // console.log(result[1]);


  })
} catch (err) {
  console.log(err);
}


connection.end();



// .................. 




// console.log(getRandomUser());