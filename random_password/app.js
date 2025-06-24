let upperSet="QWERTYUIOPLKJHGFDSAZXCVBNM"
let lowerSet="qwertyuuioplkjhgfdaszxcvbnm"
let numberSet="1234567890"
let specialSet="!@#$%^&*()<>?~+-="
let upperCase=document.getElementById("upperCase");
let lowerCase=document.getElementById("lowerCase");
let specialCase=document.getElementById("special")
let numberCase=document.getElementById("numberCase")
let number_length=document.getElementById("number_length")
let input=document.getElementById("in")
const getRandomSet=(dataset)=>
{
    return dataset[Math.floor(Math.random()*dataset.length)]
}
const getPassword=(password="")=>{
    if(upperCase.checked){
        password += getRandomSet(upperSet);
    }
    if(lowerCase.checked){
        password+=getRandomSet(lowerSet);
    }
    if(specialCase.checked){
        password+=getRandomSet(specialSet);
    }
    if(numberCase.checked){
        password+=getRandomSet(numberSet);
    }
    if(password.length<=number_length.value){
        return getPassword(password)
    }
    if(!number_length.value){
        alert("please select the length")
    }
    input.value=turncate(password,number_length.value);

}
document.querySelector("button").addEventListener("click",()=>{
    getPassword();
})



function turncate(str,num)
{
    if (str.length>num){
        let subStr=str.substring(0,num);
        return subStr
    }
    else{
        return str;
    }
}