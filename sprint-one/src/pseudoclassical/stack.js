// PseudoClassical
// just like var arr = new Arr
// use 'new'

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(val) {
  this.storage[this.count] = val;
  this.count++;
  return val;
};

Stack.prototype.pop = function() {
  var temp = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  this.count--;
  return temp;
};

Stack.prototype.size = function() {
  return this.count < 0 ? 0 : this.count;
};