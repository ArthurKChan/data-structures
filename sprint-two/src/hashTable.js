var HashTable = function(limit){
  //if limit !== undefined
  this._count = 0;
  limit === undefined ? this._limit = 8 : this._limit = limit;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var tuple = [k,v];

  if(this._storage.get(i) === undefined ){
    this._storage.set(i, [tuple]);
  }else{
    var bucket =  this._storage.get(i);
    /*
    if the bucket already has a tuple with key
      overwrite the key's value
    else
      push tuple
    */
    var overwrite = false;
    for(var j = 0; j < bucket.length; j++){
      if(bucket[j][0] === k){
        bucket[j][1] = v;
        overwrite = true;
      }
    }
    if(!overwrite){
        bucket.push(tuple);
    }
  }
  this._count++;
  if(this._count >= Math.floor(this._limit * 0.75)){
    this._limit = this._limit * 2;
    //make a temp array, set to current storage
    //make a new makeLimitedArray(new_limit)
    //add all temp array values into new limited array
    var newHashTable = new HashTable(this._limit);
    this._storage.each(function(collectionItem, index, collection){
      _.each(collectionItem, function(elem){
        newHashTable.insert(elem[0], elem[1]);
      });
    });
    this._storage = newHashTable._storage;
  }
  //Check max size to current size
}

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
  this._count--;
  //Check max size to current size
  if(this._count <= Math.floor(this._limit * 0.125)){
    this._limit = this._limit * 0.5;
    //make a temp array, set to current storage
    //make a new makeLimitedArray(new_limit)
    //add all temp array values into new limited array
    var newHashTable = new HashTable(this._limit);
    this._storage.each(function(collectionItem, index, collection){
      _.each(collectionItem, function(elem){
        newHashTable.insert(elem[0], elem[1]);
      });
    });
    this._storage = newHashTable._storage;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
