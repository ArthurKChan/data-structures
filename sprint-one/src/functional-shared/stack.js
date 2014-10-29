var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = {};
    stackInstance.storage = {};
    stackInstance.count = 0;
    _.extend(stackInstance, stackMethods)
  return stackInstance;
};

var stackMethods = {

};

  stackMethods.push = function(value){
    this.storage[this.count++] = value;
    return this.count;
  };

  stackMethods.pop = function(){
    if(this.count > 0){
      var temp = this.storage[this.count - 1];
      delete this.storage[--this.count];
      return temp;
    }else{
      return;
    }
  };

  stackMethods.size = function(){
    return this.count;
  };


