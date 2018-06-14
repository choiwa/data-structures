var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;
  someInstance.end = 0;
  // Implement the methods below

  someInstance.push = function(value) {
    someInstance.storage[someInstance.end.toString()] = value;
    someInstance.end++;
  };

  someInstance.pop = function() {
    var popVal = someInstance.storage[(someInstance.end - 1).toString()];
    if (someInstance.end > 0) {
      delete someInstance.storage[(someInstance.end - 1).toString()];
      someInstance.end--;
    }
    return popVal;
  };

  someInstance.size = function() {
    return someInstance.end;
  };

  return someInstance;
};
