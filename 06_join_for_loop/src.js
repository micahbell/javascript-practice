/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {

  joinWithFor: function(array) {
    // var string = array.join('');
    var string = '';
    for (var i = 0; i < array.length; i++) {
      string += array[i];
    }
    return string;
  },

  joinWithForAndIndex: function(array) {
    var string  = '';
    for (var i = 0; i < array.length; i++) {
      string += array[i] + [i];
    }
    return string;
  },

  joinWithoutOddCharacters: function(array) {
    var string = '';
    if(array.length === 0) {
      return string;
    } else {
      for (var i = 0; i < array.length; i++) {
        if(i % 2 === 0) {
          string += array[i];
        }
      }
      return string;
    }
  },

  joinWithForAndToken: function(array, token) {
    var string = '';
    if(array.length  === 0) {
      return string;
    } else {
      for (var i = 0; i < array.length; i++) {
        if(i === array.length - 1) {
          string += array[i];
        } else {
          string += array[i] + token;
        }
      }
      return string;
    };
  },

  joinWithForAndAlternatingTokens: function(array, token, operator) {
    var string = '';
    if(array.length === 0) {
      return string;
    } else {
      for (var i = 0; i < array.length; i++) {
        if(i === array.length - 1) {
          string += array[i];
        } else if (array[i] % 2 === 1) {
          string += array[i] + token;
        } else if (array[i] % 2 === 0) {
          string += array[i] + operator;
        }
      }
      return string;
    }
  },

}






//
