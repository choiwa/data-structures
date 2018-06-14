var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.end = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  return this.end;
};

Stack.prototype.push = function(value) {
  this.storage[this.end.toString()] = value;
  this.end++;  
};

Stack.prototype.pop = function() {
  var popVal = this.storage[(this.end - 1).toString()];
  if (this.end > 0) {
    delete this.storage[(this.end - 1).toString()];
    this.end--;  
  }
  return popVal;
};


