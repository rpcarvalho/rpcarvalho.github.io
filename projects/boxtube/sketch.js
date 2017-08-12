var video;
var slider;
var vScale = 4;

function setup() {
	createCanvas(560, 315);
	background(51);
	video = select('video');
	//video = createCapture(VIDEO);
	video.size(40, 30);
	//video.hide();
	
	slider = createSlider(0, 255, 77);
	frameRate(5);

}

function draw() {
	//tint(255, 0, 150);
	
	//background(51);
	image(video, 0, 0,560, 615);
	//convert();
	//test();
}

function test(){
	loadPixels();
	var index = (20 + (15 * video.width))*4;
    var r = pixels[index+0];
    var g = pixels[index+1];
    var b = pixels[index+2];
	background(r,g,b);
}


function convert() {
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index     = (x + (y * video.width))*4;
      var r         = video.pixels[index+0];
      var g         = video.pixels[index+1];
      var b         = video.pixels[index+2];
      var bright    = (r+g+b)/3;
      var threshold = slider.value();

      //var checkIndex = x + y * cols;
		noStroke();
		fill(r,g,b);
		rect(x*vScale, y*vScale, vScale, vScale);
		/*if (bright > threshold) {
			//boxes[checkIndex].checked(false);
			rect(x*vScale, y*vScale, vScale, vScale);
		} */
		//else
		//	boxes[checkIndex].checked(true);
    }
  }
 
}