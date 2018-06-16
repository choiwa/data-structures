var DoubLinkedList = function() {
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
      curNode.previous = temp;
    }
    //node adds to tail
    list.tail = curNode;
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;
    if (list.head !== null) {
      list.head.previous = null;
    }

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

  list.addToHead = function(value) {
    var curNode = Node(value);

    // if the list is empty
    if (list.tail === null) {
      list.tail = curNode;
    } else {
      // if the list has nodes
      var temp = list.head;
      temp.previous = curNode;
      curNode.next = temp;
    }
    //node adds to tail
    list.head = curNode;
  };

  list.removeTail = function() {
    var temp = list.tail.value;
    list.tail = list.tail.previous;
    if (list.tail !== null) {
      list.tail.next = null;
    }

    return temp;

  }

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
