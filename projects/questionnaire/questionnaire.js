function Question(){
	var qel = document.getElementById("question");
	var ael = document.getElementsByClassName("answer");
	var el;
	var self = this;
	this.pts = 0;
	
	this.getQuestion = function(){
		var randQ = Math.floor((Math.random() * 1381));
		var str = data[randQ];
		return str.split("@");
	}
	
	this.start = function(){
		this.data = this.getQuestion();
		qel.innerHTML = this.data[0];
		for(var i=0; i<4; i++){
			ael[i].innerHTML=this.data[i+1];
			ael[i].style.backgroundColor = "white";
		}
		var randi = Math.floor((Math.random() * 4));
		ael[0].innerHTML = ael[randi].innerHTML;
		ael[randi].innerHTML = this.data[1];
		console.log(self.pts);
	}
	
	this.right = function(){
		el.style.backgroundColor = "green";
		self.pts += 10;
		setTimeout(self.new,1000);
	}
	
	this.wrong = function(){
		el.style.backgroundColor = "red";
		self.pts -= 5;
		setTimeout(self.new,1000);
	}
	
	this.new = function(){
		self.start();
	}
	
	this.click = function(t){
		el = t;
		el.style.backgroundColor = "orange";
		if(t.innerHTML == this.data[1])
			setTimeout(this.right,600);
		else
			setTimeout(this.wrong,600);
		
	}
	this.start();
}