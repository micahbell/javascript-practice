module.exports = {
  sameLength: function(string1, string2) {
    if(string1.length === string2.length) {
      var result = true;
    } else if(string1.length != string2.length) {
      var result = false;
    }
    return result;
  },

  firstGreater: function(x, y) {
    if(x > y) {
      var result = true;
    } else if(x <= y) {
      var result = false;
    }
    return result;
  },

  firstGreaterOrEqualTo: function(x, y) {
    if(x >= y) {
      var result = true;
    } else if (x < y) {
      var result = false;
    }
    return result;
  },

  firstLengthGreater: function(x, y) {
    if(x.length > y.length) {
      var result = true;
    } else if(x.length <= y.length) {
      var result = false;
    }
    return result;
  },

  secondGreater: function(x, y) {
    if(x < y) {
      var result = true;
    } else if(x >= y) {
      var result = false;
    }
    return result;
  }







}
