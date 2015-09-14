module.exports = {

  simpleCall: function(callback){
    // console.log(callback());
    return callback();
  },

  each: function(array, callback) {
    for (var i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  },

  map: function(array, callback) {
    for (var i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  },

}
