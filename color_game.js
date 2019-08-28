  var numOfSquares = 6;
  var colors = [];//makeRandomColors(numOfSquares);
  var right_color; //= pickRandColor();

  var squares = document.querySelectorAll(".square");
  var color_disp = document.getElementById("colorDisp");
  color_disp.textContent = right_color;
  var message = document.getElementById("message");
  var h1 = document.querySelector("h1");
  var reset = document.getElementById("reset");
  var mode = document.querySelectorAll(".mode");

initGame();
//initialises game
function initGame(){
  setUpModeListeners();
  setUpCircleListeners();
  resetGame();
}

  //New Game button
  reset.addEventListener("click", function(){
        resetGame();
  });

  //resets game
  function resetGame(){
    colors = makeRandomColors(numOfSquares);
    right_color = pickRandColor();
    reset.textContent = "New Colors";
    color_disp.textContent = right_color;
   h1.style.backgroundColor = "steelblue"; //"#232323";
    message.textContent = "";
    for(var i = 0; i < squares.length; i++){
      if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
      }
      else{
        squares[i].style.display = "none";
      }
    }
  }

  function setUpModeListeners(){
    //handling different modes
      for(var i = 0; i < mode.length; i++){
        mode[i].addEventListener("click", function(){
          mode[0].classList.remove("selected");
          mode[1].classList.remove("selected");
          this.classList.add("selected");
          this.textContent === "Easy"? numOfSquares = 3 : numOfSquares = 6;
          resetGame();
        });
      }
  }

//sets up circle listeners
function setUpCircleListeners(){
for(var i = 0; i < squares.length; i++){
  //adding event listeners to squares
  squares[i].addEventListener("click", function(){
    var picked_color = this.style.backgroundColor;
    if(picked_color === right_color){
      changeColors(picked_color);
      reset.textContent = "Play Again?";
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
