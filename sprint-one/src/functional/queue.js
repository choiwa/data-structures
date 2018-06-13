var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var head = 0;
  var end = 0;
  someInstance.enqueue = function(value) {
    end++;
    someInstance.storage[end.toString()] = value;
	return value;
  };

  someInstance.dequeue = function() {
    head++;
	var result = someInstance.storage[head.toString()];
    delete someInstance.storage[head.toString()];
	return result;
  };

  someInstance.size = function() {
    return Object.keys(someInstance.storage).length;
  };
  someInstance.storage = storage;

  return someInstance;
};
