

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // var Node = function(value) {
  //   var node = {};
  //   node.value = value;
  //   node.edge = [];
  // }
  this.storage[`${node}`] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage[`${node}`] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // find all the edges linked to the removing node
  var nodeWithEdge = this.storage[`${node}`];

  for (let i = 0; i < nodeWithEdge.length; i++) {
    var key = nodeWithEdge[i];


    var index = this.storage[`${key}`].indexOf(node);
    this.storage[`${key}`].splice(index, 1);
  }
  delete this.storage[`${node}`];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.contains(this.storage[`${fromNode}`], toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  //console.log(fromNode)
  this.storage[`${fromNode}`].push(toNode);
  this.storage[`${toNode}`].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.storage[`${fromNode}`].indexOf(toNode);
  this.storage[`${fromNode}`].splice(index, 1);
  var index = this.storage[`${toNode}`].indexOf(fromNode);
  this.storage[`${toNode}`].splice(index, 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(Number(key))
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
