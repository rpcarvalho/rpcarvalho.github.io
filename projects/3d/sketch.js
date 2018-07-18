var c2d, c3d, mapa;
let p;
var sunx=20, suny=200;


function setup() {
  // Create the canvas
  createCanvas(500, 500);
  background(255);
  mapa = createGraphics(250, 250);
  c2d = createGraphics(250, 250);
  c3d = createGraphics(250, 250);
  p = new Player();
  c2d.stroke(255);
  c2d.fill(255);
  c3d.fill(255);
  c3d.background(0);
  draw2dMap();
  
}

function draw() {
	c2d.image(mapa,0,0);
	c2d.noStroke();
	c3d.background(0,120,255);
	c3d.fill(200,250,200);
	c3d.rect(0,250/2,250,250/2);
	
	p.update();	
	p.show();
	p.see();
	
	
	image(c2d,0,0);
	image(c3d,250,0);
}

function draw2dMap() {
	mapa.background(0);
	mapa.stroke(255);
	mapa.line(20,20,200,20);
	mapa.stroke(250);
	mapa.line(200,20,200,200);
	mapa.point(sunx,suny);
	mapa.stroke(255,120,100);
	mapa.line(249,0,249,249);
	c2d.image(mapa,0,0);
	c2d.noStroke();
}
