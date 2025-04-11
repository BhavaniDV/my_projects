
let lower_part=document.querySelector(".lowerPart");
document.querySelector(".claculate").addEventListener("click",()=>
{
    let amount=document.querySelector("#amount");
    console.log(amount.value);
    let prtng=document.querySelector("#prtng");
    console.log(prtng.value);
    let year=document.querySelector("#a");
    console.log(year.value);
    let mnthly_payment=document.querySelector("#mp");
    let total_amnt=document.querySelector("#tm");
    let total_intrest=document.querySelector("#ti");
    let amount1=parseFloat(amount.value);
    // console.log(amount1)
    let prtng1=parseFloat(prtng.value/100/12);
    let year1=parseFloat(year.value)*12;
    let pw=Math.pow(1+prtng1,year1);
     console.log(pw)
    let monthly=(amount1*pw*prtng1)/(pw-1);
    console.log(monthly)
    mnthly_payment.value=Math.ceil(monthly);
    total_amnt.value=Math.ceil(monthly*year1);
    total_intrest.value=Math.ceil((monthly*year1)-amount1);
    lower_part.style.visibility="visible";
})
document.querySelector(".close").addEventListener("click",()=>
{
    lower_part.style.visibility="hidden";

})