var time;
var scale=1;
var d;
var relogio;
var intervalo;

function pad(a,b){return(1e15+a+"").slice(-b)}

function secFunc(){
	time += scale
	d.setTime(time);
	var str = pad(d.getHours(),2)+":"+pad(d.getMinutes(),2)+":"+pad(d.getSeconds(),2);
	relogio.innerHTML = str;
}

function startGame(){
	d = new Date();
	time = d.getTime();
	clearInterval(intervalo);
	intervalo = window.setInterval(secFunc, 1000);
	
	relogio = document.getElementById("relogio");
	scale = document.getElementById("textScale").value;
	scale =  parseInt(scale) * 1000;
}