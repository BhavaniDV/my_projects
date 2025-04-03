let wordCount=document.querySelector("#words");
let charCount=document.querySelector("#character");
let textArea=document.querySelector("#text");
let content='';
textArea.addEventListener('input',()=>
{ 
 content=textArea.value;
charCount.innerText=content.length;
let text=content.trim();
let words=text.split(/\s/).length;
wordCount.innerText=words;
});