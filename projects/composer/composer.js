var composition = document.getElementById("composition");
var comp = [];
var comp_i = 0;
var comp_interval;
var comp_time = 400;
var C_freq = [16.35,32.70,65.41,130.81,261.63,523.25,1046.5,2093.0,4186.01];
var notes_name = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];

function playFrequency(f){
	f = T(parseInt(f));
	var s = T("sin", {freq:f, mul:0.5});
	T("perc", {r:500}, s)
		.on("ended", function() {	this.pause();	})
		.bang().play();
}
function playNote(n){
	var octave = parseInt(n.substr(n.length-1,1));
	var note = n.substring(0,n.length-1);
	var note_index = notes_name.indexOf(note);
	var steps = note_index + (12 * (octave-4));
	note = 440 * Math.pow(1.059463094359,steps);
	playFrequency(note);
}

function getComposition(t){
	comp = t.value.split(" ");
	createNoteSquares();
}

function readURL(){
	var time = get(1);
	var notes = get(0);
	if(time){
		comp_time = time;
	}
	if(notes){
		notes = notes.replace(/\+/g, " ");
		notes = notes.trim();
		while(-1 != notes.search("%23"))
			notes = notes.replace("%23", "#");
		document.getElementById("composition").value = notes;
	}
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

function get(index){
	var url = document.URL;
	if(-1 == url.indexOf('?'))
		return false;
	url = url.substring(url.indexOf('?')+1);
	var data = url.split('&');
	var value = data[index].substring(data[index].indexOf('=')+1);
	return value;
}