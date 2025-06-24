randoms=Math.floor(Math.random()*6+1);
randomNumber=`img${randoms}.png`;
let imgs=document.querySelector(".imgs");
imgs.setAttribute("src",randomNumber)
if (randomNumber==`img2.png`){
document.querySelector(".heading").textContent="this is mail image";
}
else if (randomNumber==`img3.png`){
    document.querySelector(".heading").textContent="this is eye image";
    }
    else if (randomNumber==`img4.png`){
        document.querySelector(".heading").textContent="this is like image";
        }
        else if (randomNumber==`img5.png`){
            document.querySelector(".heading").textContent="this is menu image";
            }
            else if (randomNumber==`img6.png`){
                document.querySelector(".heading").textContent="this is phone image";
                }
