var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.head = 0;
  newQueue.end = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;

};

var queueMethods = {};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
}

queueMethods.enqueue = function(value) {
  this.end++;
  this.storage[this.end.toString()] = value;
  return this.storage[this.end.toString()]
}

queueMethods.dequeue = function() {
  this.head++;
  var popVal = this.storage[this.head.toString()];
  delete this.storage[this.head.toString()];
  return popVal;
}

