var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDiplay = document.getElementById("message");
var header = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquaresButtons();
	reset();
}

function setUpModeButtons(){
		for(var i = 0 ; i < modeButtons.length ; i++)
{
	modeButtons[i].addEventListener("click" , function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		reset();
	});
}
}

function setUpSquaresButtons(){
	for(var i = 0; i < squares.length; i++)
	{
	squares[i].addEventListener("click" , function(){
		//grab the color of clicked square
		var clickedColor = this.style.backgroundColor;
		//comapre the colors
		if(clickedColor === pickedColor)
		{
			messageDiplay.textContent = "correct";
			changeColors(clickedColor);
			header.style.backgroundColor = clickedColor;
			resetbutton.textContent = "Play Again?";
		}
			else
			{
				this.style.backgroundColor = "#232323";
				messageDiplay.textContent = "try again";
			}

	});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a randomcolor from arrat
	pickedColor = pickColor();
	//change the colorDisplay
	colorDisplay.textContent = pickedColor;
	resetbutton.textContent = " New colors";
	messageDiplay.textContent = "";
	//change the square colors
	for(var i = 0; i < squares.length ; i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	}
	else
	{
		squares[i].style.display = "none";
	}
}
	header.style.backgroundColor = "steelblue";
}

/*easybtn.addEventListener("click" , function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length ; i++)
	{
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}

});

hardbtn.addEventListener("click" , function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length ; i++)
	{
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});*/
resetbutton.addEventListener("click" , function(){
	
	reset();

});

function changeColors(color){
	//loop through squares
	for(var i = 0 ; i < squares.length; i++){
		//change each color to match give one
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	//add an array
	var arr = [];
	//repeat that array
	for(i=0; i < num ; i++){
//get random aray and push it
arr.push(randomColor())
	}
	// return the array
	return arr;
}
 
function randomColor(){
// pick red from 0-255
var r = Math.floor(Math.random() * 256);
	//pick gren from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick blue from 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b +")";
}

