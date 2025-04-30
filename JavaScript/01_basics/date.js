// my date

let mydate = new Date()
console.log(mydate.toDateString())
console.log(mydate.toString())
console.log(mydate.toLocaleDateString())
console.log(typeof mydate)


// let mycreatedDate = new Date(2022, 0, 30) // ,5, 4, time --- localstring()
// let mycreatedDate = new Date("2022-0-30")
let mycreatedDate = new Date("01-14-2023")
console.log(mycreatedDate.toDateString())



//timestamp

let mystamp = Date.now(0)
console.log(mystamp)


console.log(mycreatedDate.getTime())


// convert in sec

console.log(Math.floor(Date.now() / 1000))


// geting info
let newdate = new Date()
console.log(newdate.getMonth()) // day, hour , month + 1 because it starts from 0 , 


newdate.toLocaleString('default',{
    weekday: "long"
})