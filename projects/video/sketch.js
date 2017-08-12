var video;
var photo = [];
var photo_i = 0;
var button;

function setup() {
  
	createCanvas(640, 460);
	video = createCapture(VIDEO);
	video.size(width,height);
	video.hide();
	//setInterval(takePhoto,1000);
	button = createButton('snap');
	button.mousePressed(takePhoto);
}

function draw() {
	//background(150);
	filter80s(video);
	if(photo.length == 4) {
		filter80sPhotos(photo);
	}
	filter(POSTERIZE,6);
}


function filter80s(img){
	tint(40,40,255);
	image(img,0,0,width/2,height/2);
	tint(255,40,50);
	image(img,width/2,0,width/2,height/2);
	tint(40,255,40);
	image(img,0,height/2,width/2,height/2);	
	tint(255,255,40);
	image(img,width/2,height/2,width/2,height/2);	
}

function filter80sPhotos(img){
	tint(40,40,255);
	image(img[0],0,0,width/2,height/2);
	tint(255,40,50);
	image(img[1],width/2,0,width/2,height/2);
	tint(40,255,40);
	image(img[2],0,height/2,width/2,height/2);	
	tint(255,255,40);
	image(img[3],width/2,height/2,width/2,height/2);	
}

function takePhoto(){
	photo[photo_i] = video.get();
	image(photo[photo_i++],0,0);
	if (photo_i > 3)
		photo_i = 0;
}