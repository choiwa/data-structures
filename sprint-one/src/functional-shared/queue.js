var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);
  return newQueue;

};

var queueMethods = {};
queueMethods.head = 0;
queueMethods.end = 0;

queueMethods.size = function() {
  return Object.keys(this.storage).length;
}

queueMethods.enqueue = function(value) {
  this.head++;
  this.storage[this.head.toString()] = value;
  return this.storage[this.head.toString()]
}

queueMethods.dequeue = function() {
  this.end++;
  var popVal = this.storage[this.end.toString()];
  delete this.storage[this.end.toString()];
  return popVal;
}

