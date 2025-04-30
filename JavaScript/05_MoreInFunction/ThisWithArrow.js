const Student={
    name:"manoj",
    marks:39,
    prop:this,
    getName:function(){
        console.log(this);  //calling function or object is Student so Student
        return this.name;   // Student.name.manoj
    },
    getMarks:()=>{
        console.log(this);  // parents scope so parent is Student and studets scope is window so Window
        return this.name;  // window so undefined
    },
    getInfo:function(){
        setTimeout(()=>{
            console.log(this);  // parents scope timeout parent is function so function scope is student
        },2000

        );
    },
    GetInfo:function(){
        setTimeout(function(){
            console.log(this);  // o timeout is a object of window so settimeout called by window  calling object.
        },2000);
    }


}