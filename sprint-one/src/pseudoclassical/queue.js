var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  this.head = 0;
  this.end = 0;
  this.storage = {};
};


Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
  this.end++;
  this.storage[this.end.toString()] = value;
};

Queue.prototype.dequeue = function() {
  this.head++;
  var popVal = this.storage[this.head.toString()];
  delete this.storage[this.head.toString()];
  return popVal;
};