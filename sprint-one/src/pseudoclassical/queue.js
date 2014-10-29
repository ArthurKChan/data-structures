var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.tail =  -1;
  this.head = 0;
  this.count = 0;
  this.storage = {};

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


Queue.prototype.enqueue = function(value){
    this.storage[++this.tail]= value;
    this.count++;
    return this.count;
  };

Queue.prototype.dequeue = function(){
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

Queue.prototype.size = function(){
    return this.count;
  };

