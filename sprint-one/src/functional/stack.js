var makeStack = function(){
  var someInstance = {};

  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[count++] = value;
    return count;
  };

  someInstance.pop = function(){
    if(count > 0){
      var temp = storage[count - 1];
      delete storage[--count];
      return temp;
    }else{
      return;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
