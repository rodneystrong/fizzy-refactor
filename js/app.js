
/*Javascript only version*/
var thePlace = document.getElementById('the-numbers');

var theButton = document.getElementById('theButton');

//parseInt();

var userInput = prompt('hello, number please', 'here');

var parsedNum = parseInt(userInput);

function printNumber(theNum){

	//this shit didn't work
	// var fizz = document.createTextNode('fizz');
	// var buzz = document.createTextNode('buzz');
	// var fizzBuzz = document.createTextNode('fizzbuzz');

	//removing these as unnecessary for now
	// var theFizz = theLi.appendChild(fizz);
	// var theBuzz = theLi.appendChild(buzz);
	// var theFizzBuzz = theLi.appendChild(fizzBuzz);

	for(i=1; i<theNum; i++){
		var theLi = document.createElement('li');
		if((i % 3 == 0) && (i % 5 == 0)){
			theLi.innerHTML = "fizzBuzz";
		} else if(i % 3 == 0) {
			theLi.innerHTML = "fizz";
		} else if(i % 5 == 0) {
			theLi.innerHTML = "buzz";
		} 
		else {
			theLi.innerHTML = i;
		}

		thePlace.appendChild(theLi);
		var attr = document.createAttribute('class');
		attr.value = 'spacing';
		theLi.setAttributeNode(attr);
	}
}

theButton.onclick = printNumber(parsedNum);