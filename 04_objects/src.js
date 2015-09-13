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
    if(!obj.sweetness) {
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
    var keys = Object.keys(obj);
    console.log(keys);
    return keys;
  },











};
