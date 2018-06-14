var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  newStack.end = 0;
  _.extend(newStack, stackMethods);
  return newStack;
  
};

var stackMethods = {};

stackMethods.size = function() {
  return this.end;
	
};

stackMethods.push = function(value) {
  this.storage[this.end.toString()] = value;
  this.end++;

};

stackMethods.pop = function() {
  var popVal = this.storage[(this.end - 1).toString()];
  if (this.end > 0) {
    delete this.storage[(this.end - 1).toString()];
    this.end--;
  }
  return popVal;
  
	
};