function SliderVertical(x,y,size) {
	
	this.x = x;
	this.y = y;
	this.size = size;
	this.array = [];
	
	
	this.addArray = function(array){
		this.array = array;
		for (var i = 0; i<array.length; i++){
			print(array[i]);
		}
	}
	
	this.update = function(){

	}
	
	this.show = function(){
		fill( 204, 101, 192, 127); // bg color
		rect( this.x, this.y, 100, this.size);
		textSize(32);
		fill(0, 102, 153);
		for (var i = 0; i<this.array.length; i++){
			text(this.array[i], this.x +105, this.y + 50 + (this.size/this.array.length)*i);
		}
	}
}