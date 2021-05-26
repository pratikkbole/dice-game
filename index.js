var randomNumber1 = Math.floor ( Math.random() * 6 ) + 1  ;
var randomDice1 = "dice" + randomNumber1 + ".png";
var randomImgSource1 = "images/" + randomDice1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSource1);

var randomNumber2 = Math.floor ( Math.random() * 6 ) + 1  ;
var randomDice2 = "dice" + randomNumber2 + ".png";
var randomImgSource2 = "images/" + randomDice2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImgSource2);

var heading = document.querySelector("h1");

if( randomNumber1 > randomNumber2) {
  heading.innerHTML = "Player 1 wins";
}
else if( randomNumber1 < randomNumber2) {
  heading.innerHTML = "Player 2 wins";
}
else{
  heading.innerHTML = "Draw";
}
