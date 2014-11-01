var Graph = function(){
  this.newestNode = null;

  this.allNodes = [];

};

Graph.prototype.addNode = function(newNode, toNode){
  if(this.newestNode === null){
    this.newestNode = makeNode(newNode);

    //NAIVE
    this.allNodes.push(this.newestNode);

  }
  else if(this.allNodes.length === 1){
    var temp = this.newestNode;
    this.newestNode = makeNode(newNode, temp);

    temp[1].push(this.newestNode);

    //NAIVE
    this.allNodes.push(this.newestNode);

  }else{
    for(var node = 0; node < this.allNodes.length; node++){
      // this.allNodes[i][0] is the value of the ith node in allNodes
      if(this.allNodes[node][0] === toNode){

        this.newestNode = makeNode(newNode, this.allNodes[node]);

        this.allNodes[node][1].push(this.newestNode);

        //NAIVE
        this.allNodes.push(this.newestNode);
      }
    }
  }
};


Graph.prototype.contains = function(node){
  for(var i = 0; i < this.allNodes.length; i++){
    if(this.allNodes[i][0] === node ){
      return true;
    }
  }return false;
};

Graph.prototype.removeNode = function(node){
  /*found target node
  for neighbors of target node
    splice out neighbors connection to target node
  splice target node out of allNodes*/
  for(var i = 0; i < this.allNodes.length; i++){
    if(this.allNodes[i][0] === node ){
      var targetNodeNeighbors = this.allNodes[i][1];
      for(var j = 0; j < targetNodeNeighbors.length; j++){
        for(var k = 0; k < targetNodeNeighbors[j][1].length; k++){
          if(targetNodeNeighbors[j][1][k][0] === node){
            targetNodeNeighbors[j][1].splice(k, 1);
          }
        }
      }
    this.allNodes.splice(i, 1);
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  for(var i = 0; i < this.allNodes.length; i++){
    if(this.allNodes[i][0] === fromNode){
      for(var j = 0; j < this.allNodes[i][1].length; j++){
        if(this.allNodes[i][1][j][0] === toNode){
          return true;
        }
      }
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var FromNode;
  var ToNode;
  for(var i = 0; i < this.allNodes.length; i++){
    if(this.allNodes[i][0] === fromNode){
      FromNode = this.allNodes[i];
      for(var j = 0; j < this.allNodes[i][1].length; j++){
        if(this.allNodes[i][1][j][0] === toNode){
          this.allNodes[i][1].splice(j,1);
        }
      }if(FromNode[1].length === 0){
        this.allNodes.splice(i,1);
      }
    }
    if(this.allNodes[i][0] === toNode){
      ToNode = this.allNodes[i];
      for(var j = 0; j < this.allNodes[i][1].length; j++){
        if(this.allNodes[i][1][j][0] === fromNode){
          this.allNodes[i][1].splice(j,1);
        }
      }if(ToNode[1].length === 0){
        this.allNodes.splice(i,1);
      }
    }
  }
};

// input: value of new node
// output: Node tuple of value and an array of edges
var makeNode = function(value, NODE){
  var node = []
  node[0] = value;
  node[1] = [];
  if(NODE !== undefined){
    node[1] = [NODE];
  }

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
