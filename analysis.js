var table;

function preload() {
	table = JSON.parse('AFINN-111.json');
	console.log(table);
}

function setup() {
	
}

function submitText() {
	//Grabs the value from the text box
	var txtInput = document.getElementById("txtBox").value;
	//Splits up the text by anything that's not a character
	var words = txtInput.split(/\W/);
	//Creates a new array to be used below for making a list of all words
	var wordSpace = [];
	//Goes through and makes a list of all the words from text box
	for (var i = 0; i < words.length; i++) {
		var oneWord = words[i].toLowerCase();
		wordSpace += oneWord + ", ";
	}
	
	//Updates the text below the box with the data that I want to know
	var scoreV = "Score: " + 5;
	document.getElementById("score").innerHTML = scoreV;
	var compV = "Comparative: " + (5 / words.length);
	document.getElementById("comparative").innerHTML = compV;
	var wordlistV = "Word List: " + wordSpace;
	document.getElementById("wordlist").innerHTML = wordlistV;
	
	console.log(oneWord);
	console.log(words);
	console.log(txtInput);
}

function leftPress(){
	//Detects if a key is clicked (specifically, the left arrow)
	document.addEventListener("keyup", function(event) {
	event.preventDefault();
		if (event.keyCode == 37) {
			//Runs a function when the left key is pressed
			preload();
		};
	});
}

//Starts the function to listen for a left arrow key press
leftPress();