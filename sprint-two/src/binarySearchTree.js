var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.methods);
  newTree.value = value;
  // newTree.left = null;
  // newTree.right = null;

  return newTree;
};


BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function(value) {

  var direction = this.value < value ? 'right' : 'left';

  if(this[direction] === undefined) {
    this[direction] = BinarySearchTree(value);
  } else {
    this[direction].insert(value);
  }
}

BinarySearchTree.methods.contains = function(value) {
  // base case
  if (this.value === value) {
    return true;
  }

  var direction = this.value < value ? 'right' : 'left';

  if(this[direction] === undefined) {
    return false;
  } else {
    return this[direction].contains(value);
  }
}
BinarySearchTree.methods.depthFirstLog = function(cb) {
  // left right
  cb(this.value);
  if(this.left !== undefined) {
    this.left.depthFirstLog(cb);
  }

  if (this.right !== undefined) {
    this.right.depthFirstLog(cb);
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
