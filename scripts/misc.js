document.onkeypress = function(e) {
	var e = e || window.event;
	var key = e.key
	//alert(key);
	switch (key){
		case 'c':
			if(confirm("Wanna see the code?"))
				CodeIt(60);
			break;
		default:
			break;
	}
}

function CodeIt(time){
	var self = this;
	this.i = 0;
	this.time = time;
	this.code = document.getElementsByTagName("BODY")[0];
	this.str = this.code.innerHTML;
	this.code.innerHTML = "";
	
	this.interval = function(){
		self.code.innerHTML += self.str[self.i++];
		if(self.i >= self.str.length)
			clearInterval(self.fn);		
	}
	this.fn = setInterval(this.interval, this.time); 
}




