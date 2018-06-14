var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.head = 0;
  newQueue.end = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
}

queueMethods.enqueue = function(value) {
  this.end++;
  this.storage[this.end.toString()] = value;
}

queueMethods.dequeue = function() {
  this.head++;
  var removeVal = this.storage[this.head.toString()];
  delete this.storage[this.head.toString()];
  return removeVal;
}


