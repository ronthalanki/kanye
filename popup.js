//helper methods
function getInput() {
	return document.getElementById("input").value;
}

function setOutput(output) {
	document.getElementById('result').textContent = output;

}

//transform text methods
function spongebobify() {
	var input = getInput();
	
	var flag = false;
	while (!flag) {
		countUpper = 0;
		//generating string with random upper/lower casing
		var output = "";
		for (var i = 0; i < input.length; i++) {
			var temp = Math.floor(Math.random() * 2);
			if (temp == 1) {
				output += input.charAt(i).toUpperCase();
				countUpper++;
			} else {
				output += input.charAt(i).toLowerCase();
			}
		}

		//validation of string
		if (countUpper < (0.7 * input.length) && countUpper > (0.3 * input.length)) {
			flag = true;
		}
	}
	setOutput(output);
}

function vaporwaveify() {
	var input = getInput();
	var output = "";

	for (var i = 0; i < input.length; i++) {
		output += input.charAt(i).toUpperCase() + " ";
	}
	setOutput(output);
}


document.getElementById('vaporwave').onclick = vaporwaveify;
document.getElementById('spongebob').onclick = spongebobify;