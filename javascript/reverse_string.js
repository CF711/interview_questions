/* This function reverses a string using the javascript built in functions.
 * We split the string into a character array, reverse that array, and
 * then we bring it back together. Keeps punctuation/spaces/numbers/etc.
 * Time Complexity - O(n)
 */
var library_reverse = function(str) {
	return str.split('').reverse().join('');
}

/* While not purely no library this changes the way that I did it in the 
 * last example.
 * Time Complexity - O(n)
 */
var reverse_no_library = function(str) {
    var reversed_array = [];
    var i = str.length;
    for (i; i >= 0; i--) {
        reversed_array.push(str.charAt(i));
    }
    return reversed_array.join('');
}

/* Adds the reverse function to the string prototype so that it can be
 * called easier.
 * Time Complexity - O(n)
 */
String.prototype.reverse_string = function() {
	return this.split('').reverse().join('');
}

console.log(library_reverse('test string'));
console.log(reverse_no_library('no library'));
console.log('prototype'.reverse_string());