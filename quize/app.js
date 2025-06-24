quetions=[
    {
        'que':"what is html full from",
        'a':"hyper text markup laguage",
        'b':"hyper text module laguage",
        'c':"hyper transfor markup laguage",
        'd':"high text markup laguage",
        'ans':'a'
    },{
        'que':"what is css full from",
        'a':"cascading styling sheet",
        'b':"cascading spread sheet",
        'c':"both of above",
        'd':"none o the above",
        'ans':'a'
    },{
        'que':"who is father of nation",
        'b':"gandhi",
        'a':"ambetkar",
        'c':"bhagath singh",
        'd':"none of the above",
        'ans':'b'
    },{
        'que':"what is nation flower",
        'a':"rose",
        'b':"jasmin",
        'c':"lotus",
        'd':"none of the above",
        'ans':'a'
    }
]
let index=0
let total=quetions.length;
console.log(total)
let options=document.querySelectorAll("input")
let quetion=document.querySelector(".quetion")
let r=0;
let w=0;
const reset=()=>
    { options.forEach(
        (input)=>
        {input.checked=false;
        }
      )
    
    }
    const endQuize=()=>{
        document.querySelector(".main").innerHTML=`<div style="text-align:center">correct answer are ${r}/${total}</div>`;
    }
const load=()=>
{ if (index===total){
    return endQuize();
    }
    reset();
    const data=quetions[index];
    quetion.innerHTML=`${index+1}) ${data.que}`;
    options[0].nextElementSibling.innerHTML=data.a;
    options[1].nextElementSibling.innerHTML=data.b;
    options[2].nextElementSibling.innerHTML=data.c;
    options[3].nextElementSibling.innerHTML=data.d;

}
const submit=()=>
{
    const data=quetions[index];
    let answer=getAns()
    if(answer===data.ans){
  r++;
    }
    else{
        w++;
    }
    index++;
    load();
    return;
}
load()
const getAns=()=>
{
    let answer1;
    options.forEach(
      (input)=>
      {
        if(input.checked)
        {
            answer1=input.value
        }
      }
    )
    return answer1
}
