module.exports = {
  person: function() {
    var obj = {
      firstName: 'John',
      lastName: 'Mayer'
    }
    return obj;
  },

  sweetnessProperty: function(obj) {
    var result = obj.sweetness;
    if(!'sweetness' in obj) {
      return undefined;
    }
    return result;
  },

  savorynessProperty: function(obj) {
    var result = obj['savory-ness'];
    if(!obj['savory-ness']) {
      return undefined;
    }
    return result;
  },

  keys: function(obj) {
    if(obj.length === 0) {
      return [];
    } else {
      var keys = Object.keys(obj);
      return keys;
    }
  },

  sortedKeys: function(obj) {
    if(obj.length === 0) {
      return [];
    } else {
      var keys = Object.keys(obj);
      // console.log(keys);
      keys.sort();
      // console.log(keys);
      return keys
    }
  },

  reverseSortedKeys: function(obj) {
    if(obj.length === 0) {
      return [];
    } else {
      var keys = Object.keys(obj);
      // console.log(keys);
      keys.sort().reverse();
      // console.log(keys);
      return keys
    }
  }













};
