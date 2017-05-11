function Flappy() {
	this.x = width/3;
	this.y = height/2;
	this.size = 10;
	this.speed = 0;
	
	this.update = function(){
		y += speed;
		speed += 3;
	}
	
	this.show = function(){
		fill(204, 101, 192, 127);
		rect(this.x,this.y,this.size,this.size);
	}
}

var f;

function setup() {
  // Create the canvas
  createCanvas(720, 400);
  background(200);
  f = new Flappy();
}

function draw() {
  background(200);
  f.update();
  f.show();
}