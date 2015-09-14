/*
  The primary goal of this warm-up is to work on refactoring
  out duplicated code. As you build the peaks and valleys
  methods, some duplication will arise. Get the tests passing
  first and then refactor to remove the duplication.

  Note: The peaks/valleys are fun to console.log out while
  writing these methods.
*/

module.exports = {
  
  peak: function() {
    var string = '/\\';
    return string;
  },

  valley: function() {
    var string = '___';
    return string;
  },

  peaks: function(num) {
    var string = '/\\';
    var newString = '';
    for (var i = 0; i < num; i++) {
      newString += string;
    }
    return newString;
  },

  valleys: function(num) {
    var string = '___';
    var newString = '';
    for (var i = 0; i < num; i++) {
      newString += string;
    }
    return newString;
  },

  peaksAndValleys: function(peaksCount, valleysCount) {
    var peakString = '/\\';
    var valleyString = '___';
    var newString = '';
    for (var i = 0; i < peaksCount; i++) {
      newString += peakString;
    }
    for (var i = 0; i < valleysCount; i++) {
      newString += valleyString;
    }
    console.log(newString);
    return newString;
  },

}










//
