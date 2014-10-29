var makeQueue = function(){
  var queueInstance = {};
  queueInstance.tail =  -1;
  queueInstance.head = 0;
  queueInstance.count = 0;
  queueInstance.storage = {};
  _.extend(queueInstance, queueMethods);
  return queueInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};



queueMethods.enqueue = function(value){
    this.storage[++this.tail]= value;
    this.count++;
    return this.count;
  };

queueMethods.dequeue = function(){
    if(this.count > 0){
      var temp = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      this.count--;
      return temp;
    }else{
      return;
    }
  };

queueMethods.size = function(){
    return this.count;
  };

