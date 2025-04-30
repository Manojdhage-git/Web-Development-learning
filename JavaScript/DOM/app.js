// Selecting Imagess

console.dir(document.all[9].innerText="Manoj Dhage");

// // 1.. getElementByID()

let img =document.getElementById("mainImg");

console.log(img.id);
console.log(img.tagName);

//// getElementByClass()

let img2 = document.getElementsByClassName("oldImg");

for(let i=0;i<img2.length;i++){
    img2[i].src="spiderman_img.png";
    console.log(` Img ${i} Updated Successfully`)
}

//getElementByTagName()

let paras= document.getElementsByTagName("p");

paras[1].innerText="lorem50";