/*******************************************
Graph pseudoclassical constructor (var graph = new Graph())
  Methods: addNode, contains, removeNode, getEdge, addEdge, removeEdge
********************************************/

var Graph = function(){
  this.newestNode = null;
  this.allNodes = {};
};

// input: the value of the node to add (optional: the value of a neighbor node)
// output: no return
//        adds a node of input value to the graph
//        defaults to the last node added as a neighbor if no toNodeValue is given
Graph.prototype.addNode = function(newNodeValue, toNodeValue){
  // First node added to graph
  if(this.newestNode === null){
    this.newestNode = makeNode(newNodeValue);
  }// Satisfy spec constraint (expects auto pairing first two nodes)
  else if(Object.keys(this.allNodes).length === 1 || toNodeValue === undefined){
    var prevNode = this.newestNode;
    this.newestNode = makeNode(newNodeValue, prevNode);
    prevNode.neighbors[this.newestNode.value] = this.newestNode;
  }else{// If toNodeValue is given, create the new node with a toNode neighbor
    var neighborNode = this.allNodes[toNodeValue];
    this.newestNode = makeNode(newNodeValue, neighborNode);
    neighborNode.neighbors[newNodeValue] = this.newestNode;
  }
  // Add the new node to the allNodes object
  this.allNodes[newNodeValue] = this.newestNode;
};

// input: the value of the node that might be contained in the graph
// output: return true if node is in graph
//         return false if node is not in the graph
Graph.prototype.contains = function(nodeValue){
  return this.allNodes.hasOwnProperty(nodeValue);
};


// input: the value of the node to delete
// output:no return value 
//        removes all references to node with given value
Graph.prototype.removeNode = function(nodeValue){
  // find that node. go to all its neighbors and tell them to remove itself from neighbor list
  var nodeToRm = this.allNodes[nodeValue];
  for(var neighbor in nodeToRm.neighbors){
    var theNeighbor = nodeToRm.neighbors[neighbor];
    delete theNeighbor[nodeValue];
  }
  delete this.allNodes[nodeValue];
};


// input: the value of two nodes
// output: return true if they are neighbors
//        return false if they are not neighbors
Graph.prototype.getEdge = function(fromNodeValue, toNodeValue){
  var fromNode = this.allNodes[fromNodeValue];
  
  if(fromNode.neighbors[toNodeValue]!== undefined){
    return true;
  }return false;
};

// input: the value of two nodes
// output: no return value.
//        adds references to each other in the
//        nodes' neighbor property
Graph.prototype.addEdge = function(fromNodeValue, toNodeValue){
  var fromNode = this.allNodes[fromNodeValue];
  var toNode = this.allNodes[toNodeValue];
  fromNode.neighbors[toNodeValue] = toNode;
  toNode.neighbors[fromNodeValue] = fromNode;
};

// input: the value of the two nodes
// output: no return value.
//        removes the edge between the two nodes
//        if any of the manipulated nodes no longer have any
//        neighbors, remove the node.
Graph.prototype.removeEdge = function(fromNodeValue, toNodeValue){
  var fromNode = this.allNodes[fromNodeValue];
  var toNode = this.allNodes[toNodeValue];
  // Remove node reference to each other in their respective 'neighbors' property
  delete fromNode.neighbors[toNodeValue];
  delete toNode.neighbors[fromNodeValue];
  // Clean up: if a fromNode or toNode have no more edges, remove the node from graph
  Object.keys(fromNode.neighbors).length === 0 ? (delete this.allNodes[fromNodeValue]) : null;
  Object.keys(toNode.neighbors).length === 0 ? (delete this.allNodes[toNodeValue]) : null;
};

// input: the value of two nodes in the graph
// output: returns an array of arrays of shortest paths 
//         containing the connected node values
//         that map the shortest path between 
//         the two given nodes (inclusive)
//        *DO NOT return an array of references to nodes*    
Graph.prototype.getShortestPath = function(fromNodeValue, toNodeValue){

};

// input: value of new node (optional: reference to neighbor node)
// output: Node Object {
//          'value' : data,
//          'neighbors' : {} of references to neighbors
var makeNode = function(nodeValue, toNode){
  var node = {};
  node.value = nodeValue; 
  node.neighbors = {};

  if(toNode){
    var toNodeValue = toNode.value;
    node.neighbors[toNodeValue] = toNode;
  }return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
