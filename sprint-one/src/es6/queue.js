class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.head = 0;
	this.end = 0;
	this.storage = {};
  }
  size() {
    return Object.keys(this.storage).length;
  }
  enqueue(value) {
    this.end++;
    this.storage[this.end.toString()] = value;
	  
  }
  
  dequeue() {
    this.head++;
    var popVal = this.storage[this.head.toString()];
    delete this.storage[this.head.toString()];
    return popVal;	  
  }
}
