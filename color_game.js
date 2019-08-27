var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(0, 255, 0)",
  "rgb(0, 225, 255)"
]

var squares = document.querySelectorAll(".square");
var right_color = colors[3];
var color_disp = document.getElementById("colorDisp");
color_disp.textContent = right_color;

for(var i = 0; i < colors.length; i++){
  //initialising sqaures with colors
  squares[i].style.backgroundColor = colors[i];

  //adding event listeners to squares
  squares[i].addEventListener("click", function(){
    var picked_color = this.style.backgroundColor;
    if(picked_color === right_color){
      alert("CONGRATS YOU WON!!");
    }
    else{
      alert("WRONG! TRY AGAIN")
    }
  });
}
