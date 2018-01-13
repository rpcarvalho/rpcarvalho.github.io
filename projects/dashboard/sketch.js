
var color_dark = '#2d313a';
var color_mid = '#3c424e';
var color_light = '#464e5b';
var color_bright = '#43f7de';


function drawPixel(x,y){
	//fill( 0, 0, 255);
	ellipse( x, y, 3, 3);
}


function drawGauge(x0, y0, radius, val){
	var x,y;
	
	for(var i=0; i<360; i++){
		x = Math.cos((i-90)*0.0174) * radius;
		y = Math.sin((i-90)*0.0174) * radius;
		
		if(i<val)
			fill(color_bright);
		else
			fill(color_light);
		drawPixel(x0+x,y0+y);
	}
	
}

function drawWindow(x0, y0, name, bg, maxVal, val){
	fill(bg);
	rect(x0,y0,225,145);
	
	textSize(32);
	
	// fill(255);
	// rect(x0+112,y0,1,150);
	// rect(x0,y0+72,230,1);
	
	fill(color_bright);
	
	text(("     " + int(val)).slice(-3),x0+112-25,y0+72+12);
	
	textSize(16);
	text(name, x0+112-20, y0+72+25, 60,30);
	
	drawGauge(x0+112,y0+72,60, val);
}

function drawFooter(str){
	
	fill(color_dark);
	rect(0,320,480,20);
	
	fill(color_bright);
	textSize(16);
	text(str, 10, 335);
}

function setup() {
	createCanvas(480,340);
	background(color_light);
	noStroke();	
	
	drawWindow(10,10,'KM/H',color_dark,360,random(360));
	drawWindow(245,10,'KM/H',color_dark,360,random(360));
	drawWindow(10,165,'KM/H',color_mid,360,random(360));
	drawWindow(245,165,'KM/H',color_mid,360,random(360));
	
	drawFooter('Some info about something...');
	//drawCircle(100,100,50);
}
