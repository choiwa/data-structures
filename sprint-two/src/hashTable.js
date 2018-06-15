

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // get, set, and each methods
};

HashTable.prototype.insert = function(k, v) {
  //hash key
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleList = this._storage.get(index);
  if (tupleList === undefined) {
    var tuple = {};
    tuple[k] = v;
    this._storage.set(index, tuple);
  } else if ( Object.keys(tupleList).length < Math.ceil(this._limit * .75)){
    tupleList[k] = v;
    this._storage.set(index, tupleList);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index =  getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k] ;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(index)[k] ;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
