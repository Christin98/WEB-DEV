var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor;
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        // alert("Clicked!");
        //grab color of clicked square
        // alert(this.style.backgroundColor);
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color
        if (clickedColor === pickedColor) {
            // alert("Correct!");
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        } else {
            // alert("WRONG!");
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
} 

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" fom 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" fom 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" fom 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}