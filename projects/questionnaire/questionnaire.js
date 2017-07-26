var file = 'q.data';
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = xmlFun;
xhr.open("GET", file, true);
xhr.send();

function xmlFun(){
	alert("k");
	
}

function Question(){
	
	
	this.getQuestion = function(){
		var str = "heelo";
		return str;
	}
	this.data = this.getQuestion();
	alert(this.data);
}