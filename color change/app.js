let button=document.getElementById("click");
 let body=document.getElementById("b");
// let span=document.createElement("span")
// span.textContent="helllo";

 button.addEventListener("click",()=>
 { let red=Math.floor(Math.random()*255+0);
    let green=Math.floor(Math.random()*255+0);
    let blue=Math.floor(Math.random()*255+0);
    console.log("(",red,green,blue,")");
    body.style.backgroundColor=`rgb(${red},${green},${blue})`});

 

