var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};

  for (var key in queueMethods) {
    someInstance[key] = queueMethods[key];
  }
  return someInstance;
};

var queueMethods = {
  push: function() {

  },
  size: function() {
    return this.count < 0 ? 0 : this.count;
  },
  enqueue: function(val) {
    this.storage[this.count] = val;
    this.count++;
    return val;
  },
  dequeue: function() {
    var temp = this.storage[0];
    delete this.storage[0];
    this.count--;

    for (var key in this.storage) {
      for (var i = 0; i <= this.count; i++) {
        this.storage[i] = this.storage[key];
      }
    }

    return temp;
  }
};
