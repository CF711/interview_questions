/* Basic implementation of the fizzbuzz question.
 * Time Complexity - O(n)
 */

var fizzBuzz = function() {

	for (var i = 0; i <= 100; i++) {
		var str = i + ': ';
		if (i % 3 === 0) {
			str +=  "Fizz";
		}
		if (i % 5 === 0) {
			str += "Buzz"
		}
		console.log(str); 
	}
}

fizzBuzz();