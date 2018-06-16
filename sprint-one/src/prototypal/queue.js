var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // prototypal pattern
  var someIntance = Object.create(queueMethods);
  someIntance.storage = {};
  someIntance.count = 0;

  return someIntance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.count < 0 ? 0 : this.count;
};

queueMethods.enqueue = function(val) {
  this.storage[this.count] = val;
  this.count++;
  return val;
};

queueMethods.dequeue = function() {
  var temp = this.storage[0];
  delete this.storage[0];

  for (var key in this.storage) {
    for (var i = 0; i < this.count; i++) {
      this.storage[i] = this.storage[key];
    }
  }
  this.count--;
  return temp;

};