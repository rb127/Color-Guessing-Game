var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(0, 255, 0)",
  "rgb(0, 225, 255)"
]

var squares = document.querySelectorAll(".square");
var right_color = randColors();
var color_disp = document.getElementById("colorDisp");
color_disp.textContent = right_color;
var message = document.getElementById("message");
var h1 = document.querySelector("h1");

for(var i = 0; i < colors.length; i++){
  //initialising sqaures with colors
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

function changeColors(color){
  message.textContent = "Correct!";
  squares.forEach(function(item){
    item.style.backgroundColor = color;
  });
  h1.style.backgroundColor = picked_color;
}

function randColors(){
  var random = Math.floor(Math.random()*colors.length);
  return colors[random];
}
