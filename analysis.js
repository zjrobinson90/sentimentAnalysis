var table;

function preload() {
	table = loadTable('AFINN-111.txt');
}

function setup() {
	//noCanvas();
	console.log(table);
	//console.log('sentiment');
}

function draw() {
	
}

function leftPress(){
	document.addEventListener("keyup", function(event) {
	event.preventDefault();
		if (event.keyCode == 37) {
			setup();
		};
	});
}

leftPress();