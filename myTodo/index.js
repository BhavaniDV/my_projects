
// const add=
const input=document.querySelector("input");
const select=document.querySelector("select")
const listItem=document.querySelector(".listItem")
document.querySelector(".input-Add button").addEventListener('click',()=>
{
    if(input.value==""){
        alert("please enter the list name")
    }
    else{const items= document.createElement("div");
    items.className="childItem content";
    items.textContent=input.value
    items.addEventListener("click",check)
    // const p=document.createElement("p");
    // p.className="content"
    // p.textContent=input.value;
    const divImg=document.createElement("div")
    const checked=document.createElement("img");
    checked.className="check";
    checked.src="check.png";
    const deleted=document.createElement("img");
    deleted.className="delete";
    deleted.src="delete.png";
    divImg.append(checked,deleted)
    items.appendChild(divImg);
    
listItem.append(items)
input.value=""}

})
function check(e){
const target=e.target;
if(target.className==="check"){
  target.parentElement.parentElement.classList.toggle("done")
}
else if(target.className==="delete"){
   const parent=target.parentElement.parentElement
  parent.classList.add("animation")
  parent.addEventListener("transitionend",()=>
    {
      parent.remove();
    })
}
}
select.addEventListener("click",()=>{
    const list=Array.from(listItem.children)
    list.forEach((items)=>{
        switch(select.value){
            case "all":
                    items.style.display="flex";
                    break;
            case "complete":
                if(items.classList.contains("done"))
                {
                    items.style.display="flex";
                }
                else{
                    items.style.display="none";
                }
                break
             case "uncomplete":
                 if(!items.classList.contains("done"))
                {
                    items.style.display="flex";
                }
                else{
                    items.style.display="none";
                }
                break

    }
})
})