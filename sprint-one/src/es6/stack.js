class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  size() {
    return this.count < 0 ? 0 : this.count;
  }

  push(val) {
    this.storage[this.count] = val;
    this.count++;
    return val;
  }

  pop() {
    var temp = this.storage[this.count - 1];

    delete this.storage[this.count - 1];
    this.count--;
    return temp;
  }

}
