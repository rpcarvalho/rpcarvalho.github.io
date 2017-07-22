var c_interval;
var c_on = true;
var sine = T("sin", {freq:440, mul:0.5});



function composerInit(){
	//sine.set({freq:880});
	//c_interval = setInterval(playNote,900);
	playNote(3300);
}

function playNote(){
	T("perc", {r:500}, sine)
		.on("ended", function() {	this.pause();	})
		.bang().play();
}

function playNote(f){
	f = T(parseInt(f));
	var s = T("sin", {freq:f, mul:0.5});
	T("perc", {r:500}, s)
		.on("ended", function() {	this.pause();	})
		.bang().play();
}

function changeNote(t){
	var f = T(parseInt(t.value));
	sine.set({freq:f});
}

var composition = document.getElementById("composition");
var comp = [];
var comp_i = 0;
var comp_interval;
var comp_time = 400;

function getComposition(t){
	comp = t.value.split(" ");
	createNoteSquares();
}

function playComposition(){
	highlightNote(comp_i);
	playNote(comp[comp_i++]);
	if(comp_i >= comp.length)
		comp_i = 0;
}

function startComposition(){
	clearInterval(comp_interval);
	comp_interval = setInterval(playComposition, comp_time);
}

function stopComposition(){
	clearInterval(comp_interval);
	comp_i = 0;
}

function createNoteSquares(){
	var div = document.getElementById("notesContainer");
	div.innerHTML = "";
	for(var i=0; i<comp.length; i++){
		createNode(comp[i]);
	}
}

function createNode(note){
	var div = document.getElementById("notesContainer");
	var p = document.createElement("div");
	p.classList.add("note");
	p.onclick = function() {	changeNote(this); };
	var node = document.createTextNode(note);
	p.appendChild(node);
	div.appendChild(p);
}

function highlightNote(note){
	var div = document.getElementById("notesContainer");
	var node = div.getElementsByClassName("note");
	for(var i=0; i< node.length; i++)
		node[i].style.color = "black";
	node[note].style.color = "blue";
}

function changeNote(t){
	var newNote = prompt("New note", t.innerHTML);

	if (newNote == null || newNote == "") {
	} else {
		t.innerHTML = newNote;
		comp[getNodeIndex(t)] = newNote;		
		createSquareNotes();
	}
}

function createSquareNotes(){
	composition.value = "";
	for(var i=0; i<comp.length; i++)
			composition.value += comp[i] + " ";
}

function addNote(){
	var newNote = prompt("New note", "440");

	if (newNote == null || newNote == "") {
	} else {
		comp.push(newNote);		
		createSquareNotes();
		createNoteSquares();
	}
}

function changeTimer(t){
	comp_time = t.value;
}

function getNodeIndex(node) {
    var index = 0;
    while ( (node = node.previousSibling) ) {
        if (node.nodeType != 3 || !/^\s*$/.test(node.data)) {
            index++;
        }
    }
    return index;
}