/*
  In these warm-ups, all of the code is provided, as are the failing tests. Locate
  the defect in each function and make all of the tests green. Note: when you change
  some tests from pending -> active, they may pass initially (keep going!).
*/

module.exports = {
  addition: function(a,b) {
    var total = a + b;
    return total;
  },

  matches: function(first, second) {
    var result;

    if (first === second) {
      result = true;
    } else if (first !== second) {
      result = false;
    }
    return result;
  },

  fizzBuzz: function(number) {
    var divByThree = number % 3,
        divByFive = number % 5,
        output = '';
    if (divByThree !== 0 && divByFive !== 0) {
      output = number;
    } else if (divByThree === 0) {
      output = 'Fizz';
    } else if (divByFive === 0) {
      output = 'Buzz';
    }
    return output;
  },

  switcher: function(word) {
    var output;
    switch (word) {
      case 'foo':
        output = 'bar'; //Statements executed when the result of expression matches word.
        break;
      case 'nope':
        output = 'yup';
        break;
      default:
        output = 'never output anything. ever!'
    };

    return output;
  }
}
