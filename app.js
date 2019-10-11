console.log("Radi");

var numberOfSquares = 6;
var colors = generateColors(numberOfSquares);
var h1= document.querySelector("h1");
 var resetButton = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById("message");

for(var i=0 ; i<squares.length; i++){
	// dodela boja
	squares[i].style.backgroundColor = colors[i];
    // dodavanje listenera
    squares[i].addEventListener("click", function(){
    var clickedColor  =	this.style.backgroundColor ;
    if(clickedColor===pickedColor){messageDisplay.textContent= "Correct!" ;
     changeColors(clickedColor);
     h1.style.backgroundColor = clickedColor;
     resetButton.textContent="Play Again ?" ;
}else{
    	this.style.backgroundColor = "#232323" ;
    	messageDisplay.textContent = "Try Again"
    }
    });
   
}


function changeColors(color){
      for(var i=0; i<squares.length; i++){
      	squares[i].style.backgroundColor = color;
      }
}

function pickColor(){
 var random	= Math.floor((Math.random() *colors.length)) ;
 return colors[random];
}


function generateColors(num){
	var arr =[];

for(var i=0;i<num;i++){
   arr.push(randomColor()) ;
}

// vraca niz
	return arr;

}

function randomColor(){
      // crvena 0 do 255
    var r =  Math.floor(Math.random()*256);
      // zelena
     var g =  Math.floor(Math.random()*256);
     // plava
     var b =  Math.floor(Math.random()*256);

     return "rgb(" + r + ", " + g + ", "+b+")" ;
}


resetButton.addEventListener("click", function(){
	 colors = generateColors(numberOfSquares);
     pickedColor = pickColor();
     colorDisplay.textContent=pickedColor;
     for (var i =0; i<squares.length; i++){
     	squares[i].style.backgroundColor = colors[i];

     }
     h1.style.backgroundColor="steelblue";
     messageDisplay.textContent=" ";
     resetButton.textContent="New colors" ;
});

easy.addEventListener("click", function(){
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent=" ";
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numberOfSquares = 3;
	colors = generateColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i =0;i<squares.length;i++ ){
		if (colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
});

hard.addEventListener("click", function(){
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent=" ";
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

for(var i =0;i<squares.length;i++ ){
	squares[i].style.backgroundColor = colors[i];
	squares[i].style.display = "block" ;

	}

});