var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
    return value;

  };

  someInstance.pop = function() {
    var temp = storage[size - 1];
    delete storage[size - 1];
    size--;
    return temp;
  };

  someInstance.size = function() {
    return size < 0 ? 0 : size;
    //return size;
  };


  return someInstance;

};
