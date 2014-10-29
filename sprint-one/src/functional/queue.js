var makeQueue = function(){
  var someInstance = {

  };
  var head = 0;
  var tail = -1;
  var count = 0;



  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[++tail]= value;
    count++;
    return count;
  };

  someInstance.dequeue = function(){
    if(count > 0){
      var temp = storage[head];
      delete storage[head];
      head++;
      count--;
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
