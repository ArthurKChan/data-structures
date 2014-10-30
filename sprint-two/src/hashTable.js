var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var addition = {};
  addition[k]= v;

  if(this._storage.get(i) === undefined ){
    this._storage.set(i, addition);
  }else{
    var temp =  this._storage.get(i);
    temp = _.extend(temp, addition);
    this._storage.set(i, temp );
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return (this._storage.get(i))[k];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);

  temp[k] = null;
  this._storage.set(i, temp);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
