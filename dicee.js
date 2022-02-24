
// Player 1's Dice
var randomNo1 = Math.floor(((Math.random())*6)+1);
var randomImg1 = "dice"+randomNo1+".png";
var randonImgSource1 = "images/"+randomImg1;
document.querySelectorAll("img")[0].setAttribute("src", randonImgSource1);


// Player 2's Dice
var randomNo2 = Math.floor(((Math.random())*6)+1);
var randomImg2 = "dice"+randomNo2+".png";
var randonImgSource2 = "images/"+randomImg2;
document.querySelectorAll("img")[1].setAttribute("src", randonImgSource2);


// Determining who Wins
if (randomNo1>randomNo2){
  document.querySelector("h1").innerHTML = ("Player 1 wins!");
} else if (randomNo2>randomNo1){
  document.querySelector("h1").innerHTML = ("Player 2 wins!");
} else {
  document.querySelector("h1").innerHTML = ("It's a draw. Roll it again!");
}
