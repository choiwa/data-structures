class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  size() {
    return this.count < 0 ? 0 : this.count;
  }

  enqueue(val) {
    this.storage[this.count] = val;
    this.count++;
    return val;
  }

  dequeue() {
    var temp = this.storage[0];
    delete this.storage[0];
    this.count--;

    for (var key in this.storage) {
      for (var i = 0; i < this.count; i++) {
        this.storage[i] = this.storage[key];
      }
    }

    return temp;
  }

}
