var MAX_N = 9999;
var nA, nB;
var iteration = 0;
var coPrimes = 0;
var interval;

function randN(){
	var n = Math.random() * MAX_N + 1;
	n = Math.floor(n);
	return n;
}

function setEl(el,n){
	var el = document.getElementById(el);
	el.innerHTML = n;
}

function setN(el){
	var n = randN();
	setEl(el,n);
	return n;
}

function isCoFactor(n1,n2) {
    var arr = [];
	var m = Math.min(n1,n2);
    for (var i = 2; i <= m; i++) {
        if (n1 % i == 0  && n2 % i == 0) {
            return true;
        }
    }
	return false;
}

isCoFactor(5,2);

function isCoPrime(n1,n2){
	if(!isCoFactor(n1,n2)){
		coPrimes++;
		setEl("cp",coPrimes);
	}
}

function getPI(){
	//prob iscoprime = 6/pi^2
	//coprime/iteration = 6/pi^2
	var n = coPrimes/iteration;
	n = 6/n;
	n = Math.sqrt(n);
	
	setEl("pi",n);
}

function iterate(){
	iteration++;
	setEl("it", iteration);
	nA = setN("nA");
	nB = setN("nB");
	isCoPrime(nA,nB);
	getPI();
}

function start(){
	interval = setInterval(iterate, 10);
}

function stop(){
	clearInterval(interval);
}

window.onload = function() {
	iterate();
}