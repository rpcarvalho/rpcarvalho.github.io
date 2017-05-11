function Square() {
	this.x = random(width);
	this.y = random(height);
	this.size = random(10,100);
	this.speed = random(1,10);
	this.xsignal = 1;
	this.ysignal = 1;
	
	this.update = function(){
		this.x += this.speed*this.xsignal;
		this.y += this.speed*this.ysignal;
		if (this.x + this.size > width)	this.xsignal=-1;
		else if (this.x < 0) this.xsignal=1;
		if (this.y + this.size > height)	this.ysignal=-1;
		else if (this.y < 0) this.ysignal=1;
	}
	
	this.show = function(){
		fill(204, 101, 192, 127);
		rect(this.x,this.y,this.size,this.size);
	}
}

var s;

function setup() {
  // Create the canvas
  createCanvas(720, 400);
  background(200);
  s = new Square();
}

function draw() {
  background(200);
  s.update();
  s.show();
}