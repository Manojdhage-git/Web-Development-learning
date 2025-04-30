// A function that does or both
// 1 - take one or more fucntions as arguments 


function multiGreet(func,count){
    for(let i=1; i<=count;i++){
        func();
    }
}
    let greet = function(){console.log("Hello")}

    multiGreet(greet,5);

    // or we can directly give fucntion on calling

    function multiGreet(func,count){
    for(let i=1; i<=count;i++){
        func();
    }
}


multiGreet(function(){console.log("Good Morning")},5);


// 2 - returns the functions

function oddeven(request){
    if(request=="odd"){
        let odd=function(n){
            console.log(!(n%2==0));
    
        }
        return odd;
    }else if(request=="odd"){
        let even=function(n){
            console.log((n%2==0));
    
        }
        return even;
    } else {
        console.log("bad Request");
    }
    
 
}
let request="odd";