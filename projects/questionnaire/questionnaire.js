function Question(){
	
	
	this.getQuestion = function(){
		var randQ = Math.floor((Math.random() * 1381));
		var str = data[randQ];
		return str.split("@");
	}
	this.data = this.getQuestion();
	alert(this.data[0] + '\n' + this.data[1]);
}