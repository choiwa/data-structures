var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // if first number to the list, we need to add the head and tail
  list.addToTail = function(value) {
    // if first number to the list, we need to add the head and tail
    var curNode = Node(value);

    // if the list is empty
    if (list.head === null) {
      list.head = curNode;
    } else {
      // if the list has nodes
      var temp = list.tail;
      temp.next = curNode;
    }
    //node adds to tail
    list.tail = curNode;
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;

    return temp;
  };

  list.contains = function(target) {
    var temp = list.head;

    while(temp !== null) {
      if (temp.value === target) {
        return true;
      } else {
        temp = temp.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
