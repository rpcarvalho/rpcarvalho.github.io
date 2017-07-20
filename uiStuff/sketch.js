
var s;

function setup() {
  // Create the canvas  
	createCanvas(720, 400);
	background(200);
	s = new SliderVertical(100,50,250);
	
	var arr = new Array("Mango", "Apple", "Papaya")
	s.addArray(arr);
}


function draw() {
  background(200);
  
  s.show();
}