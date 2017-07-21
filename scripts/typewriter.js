var tw;
var tw_str = "";
var tw_i = 0;
var tw_interval;
var str = "";

function typewriterInit(time){
	tw = document.getElementById("typewriter");
	tw_str = tw.innerHTML;
	tw.innerHTML = "&nbsp;";
	tw_interval = setInterval(type, time); 
}

function type(){
	if(tw_str[tw_i] == '\n'){
		str += "<br/>";
		tw_i++;
	}
	else
		str += tw_str[tw_i];
	tw_i++;
	tw.innerHTML = str;
	if(tw_i >= tw_str.length)
		clearInterval(tw_interval);		
}