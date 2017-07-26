/* --------- Show img on link hover --------------- */
function showimg(){
	var self = this;	
	this.img = document.getElementById("imgbox");
	
	this.showimg = function(t){
		var e = e || window.event;
		var h = 120;
		this.img.style.top = (e.clientY - h) +"px";
		this.img.style.left = e.clientX +"px";
		this.img.src = t.innerHTML + "/img.png";
		this.img.style.visibility = "visible";
	}

	this.hide = function(){
		this.img = document.getElementById("imgbox");
		this.img.style.visibility = "hidden";
		this.img.src = "img/blank.png";
	}
	
	var imgs = document.getElementsByClassName("proj");
	for(var i=0; i<imgs.length; i++){
		imgs[i].onmouseover = function(){ self.showimg(this); 
										};
		imgs[i].onmouseout = self.hide;
	}
}

