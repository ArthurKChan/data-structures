var makeBinarySearchTree = function(value){
  var bst = {};
  bst.value = value;
  bst.right = null;
  bst.left = null;
  _.extend(bst, bstMethods);
  return bst;
};

var bstMethods = {};

bstMethods.insert = function(value){

  if(this.value > value){
    if(this.left === null){
      this.left = makeBinarySearchTree(value);
    }else{
      this.left.insert(value);
    }
  }else if(this.value < value){
    if(this.right === null){
      this.right = makeBinarySearchTree(value);
    }else{
      this.right.insert(value);
    }
  }else{
    return;
  }
};

bstMethods.contains =  function(value){
  var results = false;
  if(this.value === value){
    results = true;
  }else if(this.value > value){
    if(this.left !== null){
      results = results || this.left.contains(value);
    }
  }else if(this.value < value){
    if(this.right !== null){
      results = results || this.right.contains(value);
    }
  }
  return results;
};

bstMethods.depthFirstLog = function(callback){
  if(this.value !== undefined){
    callback(this.value);
  }if(this.left !== null){
    this.left.depthFirstLog(callback);
  }if(this.right !== null){
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
