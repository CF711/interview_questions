var matchingBrackets = function(input) {
  var openers = [ '{', '[', '(' ];
  var closers = [ '}', ']', ')' ];

  var referenceMap = { '}': '{', 
                       ']': '[', 
                       ')': '(' 
                     };

  var stack = [];
  var failure = false;

  if (input.length % 2 !== 0) {
    failure = inputFailure("Stack is odd. Brackets won't match up.");
  } else {
    for (var x in input) {
      var bracket = input[x];
      if (openers.indexOf(bracket) !== -1) {
        stack.push(bracket);
      } else if (closers.indexOf(bracket) !== -1) {
        var matcher = referenceMap[bracket];
        if (matcher !== stack.pop()) {
          failure = inputFailure("Brackets don't match up");
          break;
        }
      } else {
        failure = inputFailure("Invalid character in input.")
        break;
      }
    }
  }

  if (stack.length === 0 && !failure) {
    inputSuccess("Input matches correctly.");
  }
}

var inputFailure = function(message) {
  messagePrinter(message);
  return true;
}

var inputSuccess = function(message) {
  messagePrinter(message)
}

var messagePrinter = function(message) {
  console.log(message);
}

var simpleInput = ['{','}','(',')','[',']'];
var simpleInput2 = ['{','(','[',']',')','}'];
var simpleInput3 = ['[',')','{',']','(','}'];
var oddInput = ['{'];
var errorInput = ['a', 'b'];
matchingBrackets(simpleInput);
matchingBrackets(simpleInput2);
matchingBrackets(simpleInput3);
matchingBrackets(oddInput);
matchingBrackets(errorInput);