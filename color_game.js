
var colors = makeRandomColors(6);

var squares = document.querySelectorAll(".square");
var right_color = pickRandColor();
var color_disp = document.getElementById("colorDisp");
color_disp.textContent = right_color;
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");

//start game for first time
newGame();

//New Game button
reset.addEventListener("click", function(){
      colors = makeRandomColors(6);
      right_color = pickRandColor();
      color_disp.textContent = right_color;
      h1.style.backgroundColor = "#232323";
      message.textContent = "";
      newGame();

});

//initializes new game
function newGame(){
for(var i = 0; i < colors.length; i++){
  //initialising squares with colors
  squares[i].style.backgroundColor = colors[i];

  //adding event listeners to squares
  squares[i].addEventListener("click", function(){
    var picked_color = this.style.backgroundColor;
    if(picked_color === right_color){
      changeColors(picked_color);
    }
    else{
      message.textContent = "Try Again";
      this.style.backgroundColor = "#232323";
    }
  });
}
}

//assigns a color to each square
function changeColors(color){
  message.textContent = "Correct!";
  squares.forEach(function(item){
    item.style.backgroundColor = color;
  });
  h1.style.backgroundColor = color;
}

//picks random color as correct color
function pickRandColor(){
  var random = Math.floor(Math.random()*colors.length);
  return colors[random];
}

//generates random colors array with n elements
function makeRandomColors(n){
  var arr = [];

  for(var i = 0; i < n; i++){
    arr.push(getRandomRGB());
  }

  return arr;
}

//generates random color to populate array
function getRandomRGB(){
  //random red
  var r = Math.floor(Math.random()*256);
  //random green
  var g = Math.floor(Math.random()*256);
  //random blue
  var b = Math.floor(Math.random()*256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
