var cors = "https://crossorigin.me/";
var url  = cors + "https://ukulele-chords.com/get?ak=99bf9dfc669e2fbc948ae7e89fe3efbe&r=C&typ=sus2";
var xml;

function setup() {
  // Create the canvas
  
  createCanvas(720, 400);
  background(200);
  xml = loadXML(url,xmlFun);
  console.log("start");
}
/*
function draw() {
  background(200);
}*/

function xmlFun() {	
	var firstChild = xml.getChild("chord");
	print(firstChild.getContent());
	
	var name = firstChild.getChild("chord_name").getContent();
	var diff =	firstChild.getChild("chord_diff").getContent();
	var pic = firstChild.getChild("chord_diag").getContent();
	print(name + diff + pic);
	text(name, 10, 30);
	text(diff, 80, 30);
	var img = loadImage( pic);
	image(img, 50, 50);
}