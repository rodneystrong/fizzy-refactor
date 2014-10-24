/*Javascript only version*/

/*anonymous function version for window.onload*/
window.onload = function(parsedNum) {
	var thePlace = document.getElementById('the-numbers');

	//parseInt();

	var userInput = prompt('hello, number please', 'here');

	var parsedNum = parseInt(userInput);

	for(i=1; i<=parsedNum; i++){
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
};

