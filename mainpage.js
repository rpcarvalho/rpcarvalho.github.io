
window.onload = function() {
	cssInit();
}

function cssInit(){
	var cssRoot = document.querySelector(':root');
	var value = Math.random();
	cssRoot.style.setProperty('--rand1', value);
	var value = Math.random();
	cssRoot.style.setProperty('--rand2', value);
	var value = Math.random();
	cssRoot.style.setProperty('--rand3', value);
}