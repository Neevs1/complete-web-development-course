var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var image1= "dice"+randomNumber1+".png";
var source1= "./images/"+image1;
var image2= "dice"+randomNumber2+".png";
var source2 = "./images/"+image2;

document.getElementsByClassName("img1")[0].setAttribute("src",source1)
document.getElementsByClassName("img2")[0].setAttribute("src",source2)

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins"
}
else{
    document.querySelector("h1").innerHTML="It is a draw"
}