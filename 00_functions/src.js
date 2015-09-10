module.exports = {

  helloWorld: function(){
    var string = 'Hello World';
    return string;
  },

  hello: function(string){
    var result = 'Hello ' + string;
    return result;
  },

  shout: function(string) {
    var result = 'Hello ' + string.toUpperCase();
    return result;
  },

  whisper: function(string) {
    var result = 'Hello ' + string.toLowerCase();
    return result;
  },

  separate: function(string) {
    var result = string.split('');
    return result;
  },

  reverseJoin: function(array) {
    var result = array.reverse().join();
    return result;
  },

  reverseJoinCompact: function(array) {
    var result = array.reverse().join('');
    return result;
  },

  backwardsDay: function(string) {
    var reverse = string.split('').reverse().join('');
    var result = 'Hello ' + reverse;
    return result;
  }
}
