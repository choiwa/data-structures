var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;

    return value;
  };

  someInstance.dequeue = function() {
    var temp = storage['0'];
    delete storage['0'];
    size--;

    for (var key in storage) {
      for (var i = 0; i <= size; i++) {
        storage[i] = storage[key];
      }
    }

    return temp;
  };

  someInstance.size = function() {
    return size < 0 ? 0 : size;
  };

  return someInstance;
};
