module.exports = {

  first: function(array) {
    var first = array[0];
    return first;
    if(array.length === 0) {
      return undefined;
    };
  },

  last: function(array) {
    if(array.length === 0) {
      return undefined;
    } else {
      var last = array[array.length - 1];
      return last;
    };
  },

  empty: function(array) {
    if(array.length === 0) {
      return true;
    } else {
      return false;
    };
  },

  first_n: function(array, n) {
    if(array.length === 0) {
      return array;
    } else if(array.length <= n) {
      return array;
    } else if(array.length > n) {
      var newArray = [];
      for (var i = 0; i < n; i++) {
        newArray.push(array[i]);
      };
      return newArray;
    };
  },

  last_n: function(array, n) {
    if(array.length === 0) {
      return array;
    } else if(array.length <= n) {
      return array;
    } else if(array.length > n) {
      var newArray = [];
      for (var i = array.length - n; i < array.length; i++) {
        newArray.push(array[i]);
      }
      return newArray;
    }
  },

  drop: function(array, n) {
    if(array.length < n) {
      while(array.length > 0) {
        array.shift();
      };
    } else if(array.length > n) {
      for (var i = 0; i < n; i++) {
        array.shift();
      };
    };
    return array;
  },

  union: function(array1, array2) {
    if(array1.length === 0 && array2.length === 0){
      return array1;
    } else {
      var combined = array1.concat(array2);
      return combined;
    };
  },

  intersection: function(array1, array2) {
    var combined = [];
    for (var i = 0; i < array1.length; i++) {
      if(array2.indexOf(array1[i]) != -1) {
        combined.push(array1[i])
      }
    }
    return combined;
  },
}








//
