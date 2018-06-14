var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};

  for (var key in stackMethods) {
    someInstance[key] = stackMethods[key];
  }
  console.log(someInstance);
  return someInstance;
};

var stackMethods = {

  push: function(val) {
    this.count++;
    this.storage[this.count] = val;
    return this.storage[this.count];
  },
  pop: function() {
    this.count--;
    var temp = this.storage[this.count + 1];
    delete this.storage[this.count + 1];
    return temp;

  },
  size: function() {
    return this.count < 0 ? 0 : this.count;
  }

};

// var q = Stack();
// q// functions saved
// q.size();
