var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var tuple = [k,v];

  if(this._storage.get(i) === undefined ){
    this._storage.set(i, [tuple]);
  }else{
    var bucket =  this._storage.get(i);
    bucket.push(tuple);  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = (this._storage.get(i));
  for(var index=0; index < bucket.length; index++){
    if(bucket[index][0] === k){
      return bucket[index][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for(var index=0; index < bucket.length; index++){
    if(bucket[index][0] === k){
      bucket[index][1] = null;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
