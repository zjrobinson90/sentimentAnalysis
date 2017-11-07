var table;
var txtInput;

function preload() {
	table = JSON.parse('AFINN-111.json');
	console.log(table);
}

function setup() {
	
}

function submitText() {
	txtInput = document.getElementById("txtBox").value;
	var words = txtInput.split(/\W/);
	for (var i = 0; i < words.length; i++) {
		var oneWord = words[i].toLowerCase();
	}
	
	
	
	console.log(oneWord);
	console.log(words);
	console.log(txtInput);
}

function leftPress(){
	document.addEventListener("keyup", function(event) {
	event.preventDefault();
		if (event.keyCode == 37) {
			submitText();
		};
	});
}

leftPress();