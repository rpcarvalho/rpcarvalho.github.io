
window.onload = function() {
	cssInit();
	typewriterInit();
}

function cssInit(){
	var page = document.getElementsByClassName("column");	
	var cssRoot = document.querySelector(':root');
	cssRoot.style.setProperty('--nrColunas', page.length);
}

var tw;
var tw_str = "";
var tw_i = 0;
var tw_interval;

function typewriterInit(){
	tw = document.getElementById("typewriter");
	tw_str = tw.innerHTML;
	tw.innerHTML = "";
	
	for(i=0;i<10;i++)
		tw_str = tw_str.replace("/n", '!');
	//tw.innerHTML = tw_str;
	tw_interval = setInterval(type, 50); 
}

function type(){
	if(tw_str[tw_i] == '\n'){
		tw.innerHTML += "<br/>";
		tw_i+=3;
	}
		
	else
		tw.innerHTML += tw_str[tw_i];
	tw_i++;
	if(tw_i >= tw_str.length)
		clearInterval(tw_interval);		
}
