let gameSq=[];
let usersq=[];
let btns=["red","yellow","purple","green"];

let started=false;
let level =0;
let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
 if(started==false){
    console.log("game is started");
    started=true;
    levelUp();
 }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300)
}
function levelUp(){
    usersq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let rannum=Math.floor(Math.random()*3);
    let randomCol=btns[rannum];
     let randbun=document.querySelector(   `.${randomCol}`)
     gameSq.push(randomCol)
    btnFlash(randbun);
}

function CheckAns(idx){
    // console.log("curr level :",level);
 
    
    if(usersq[idx]===gameSq[idx]){
       if(usersq.length===gameSq.length){
        setTimeout(levelUp,1000)
       }
    }else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b> Press any key to start.`
      document.querySelector("body").style.backgroundColor="red";

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },400);
        reset();
    }
}

function btnPress(){
    let btn= this;
    userFlash(btn);

    usercolor=btn.getAttribute("id");
    usersq.push(usercolor)

    CheckAns(usersq.length-1)
}

let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSq=[];
    usersq=[];
    level=0;
}