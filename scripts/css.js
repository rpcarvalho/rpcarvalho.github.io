function cssInit(){
	var page = document.getElementsByClassName("column");	
	var cssRoot = document.querySelector(':root');
	cssRoot.style.setProperty('--nrColunas', page.length);
	var value = Math.random();
	cssRoot.style.setProperty('--rand1', value);
	var value = Math.random();
	cssRoot.style.setProperty('--rand2', value);
	var value = Math.random();
	cssRoot.style.setProperty('--rand3', value);
}