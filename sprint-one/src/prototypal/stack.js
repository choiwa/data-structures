var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);
  newInstance.count = 0;
  newInstance.storage = {};

  return newInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.count < 0 ? 0 : this.count;
};

stackMethods.push = function(val) {
  this.storage[this.count] = val;
  this.count++;
  return val;
};

stackMethods.pop = function() {
  var temp = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  this.count--;
  return temp;
};