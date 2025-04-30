// This Keyword
// This keyword refers to an object tha is executing the current piece of code

const student ={
    name:"manoj",
    math:10,
    eng:20,
    hindi:40,
    avg(){
        console.log(this.math,this.eng,this.hindi/3)
    }
}

// more use of this in js