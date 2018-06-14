class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.end = 0;
    this.storage = {};
	
  }
  size() {
    return this.end;  
  }
  push(value) {
    this.storage[this.end.toString()] = value;
    this.end++;
  }
  
  pop() {
    var popVal = this.storage[(this.end - 1).toString()];
    if (this.end > 0) {
      delete this.storage[(this.end - 1).toString()];
      this.end--;
    }	
    return popVal;
  }

}