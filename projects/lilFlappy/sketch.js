function Flappy() {
	this.x = width/3;
	this.y = height/3;
	this.size = 20;
	this.speed = 0;
	
	this.update = function(){
		this.y += this.speed;
		this.speed += 1;
		if (this.y + this.size >= height) {
			this.speed = 0;
			this.y = height - this.size - 1;
		}
	}
	
	this.show = function(){
		fill(204, 101, 192, 127);
		rect(this.x,this.y,this.size,this.size);
	}
}



var f;

function setup() {
  frameRate(30);
  createCanvas(720, 400);
  background(200);
  f = new Flappy();
}

function draw() {
  background(200);
  f.update();
  f.show();
}

function keyPressed() {
	if (keyCode == 32){
		f.speed = -10;
	}
}