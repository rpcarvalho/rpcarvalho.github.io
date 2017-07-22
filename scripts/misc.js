var code;
var code_str = "";
var code_i = 0;
var code_interval;

function codeitInit(time){
	code = document.getElementsByTagName("BODY")[0];
	code_str = code.innerHTML;
	code.innerHTML = "";
	code_interval = setInterval(codeit, time); 
}

function codeit(){
	code.innerHTML += code_str[code_i++];
	if(code_i >= code_str.length)
		clearInterval(code_interval);		
}

document.onkeypress = function(e) {
	var e = e || window.event;
	var key = e.key
	//alert(key);
	switch (key){
		case 'c':
			if(confirm("Wanna see the code?"))
				codeitInit(60);
			break;
		default:
			break;
	}
}


/* --------- Show img on link hover --------------- */
function showimgInit(){
	var imgs = document.getElementsByClassName("proj");
	for(var i=0; i<imgs.length; i++){
		imgs[i].onmouseover = function(){ showimg(this); 
										};
		imgs[i].onmouseout = hideimg;
	}
}
function showimg(t){
	var img = document.getElementById("imgbox");
	var e = e || window.event;
	h = 120;
	img.style.top = (e.clientY - h) +"px";
	img.style.left = e.clientX +"px";
	img.src = t.innerHTML + "/img.png";
	img.style.visibility = "visible";
}
function hideimg(){
	var img = document.getElementById("imgbox");
	img.style.visibility = "hidden";
	img.src = "img/blank.png";
}