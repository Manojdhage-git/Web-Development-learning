// Function is stored in variable

let sum = function(a,b){
    return a+b;
}

console.log(sum(10,20));

// we can change value of variable

sum=function(){
    console.log("sum")
}

sum();