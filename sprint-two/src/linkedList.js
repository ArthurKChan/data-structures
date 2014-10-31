var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(this.head === null && this.tail === null){
      var tempNode = makeNode(value);
      this.head = tempNode;
      this.tail = tempNode;
      //this.tail.next = this.head;
    }else{
      var oldTail = this.tail;
      this.tail = makeNode(value);
      //this.tail.next = this.head;
      oldTail.next = this.tail;
    }
  };
  //list.addToHead = function(value){
  //;
  //}


  //list.removeTail = function(){
  //removeH
  //}

  list.removeHead = function(){
    var tempNode = this.head;

    if(this.head === null){
      return;
    }else if(this.head === this.tail){
      this.head = null;
      this.tail = null;
    }else {
      this.head = this.head.next;
    }return tempNode.value;
  };

  list.contains = function(target){
    var temp = this.head;
    while(temp){
      if (target === temp.value){
        return true;
      }
      temp = temp.next;
    }return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  //EXTRA CREDIT:
  //node.prev = null;
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
