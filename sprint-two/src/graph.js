/* We must assume that we can't add
* this.allNodes = {};
* node = {newNodeValue:newNodeValue ,neightbors:{neighborNodeValue: referenceToNode, ....}}
* look up the property and compare neighbors
* After all basics, implement tree traversal
* treetraversal(nodeValue1, nodeValue2)
input: nodes you want to find a path to and from
output: array of shortest path from n1 to n2
*/

var Graph = function(){
  this.newestNode = null;
  // allNodes : { value : {value:value, neighbors:{}}, ...  }
  this.allNodes = {};
};

Graph.prototype.addNode = function(newNodeValue, toNodeValue){
  // First node added to graph
  if(this.newestNode === null){
    this.newestNode = makeNode(newNodeValue);

  }// Satisfy spec constraint (expects auto pairing first two nodes)
  else if(Object.keys(this.allNodes).length === 1){
    var prevNode = this.newestNode;
    this.newestNode = makeNode(newNodeValue, toNodeValue);
    prevNode.neighbors[newNodeValue] = this.newestNode;

  }else{
    var neighborNode = this.allNodes[toNodeValue];
    this.newestNode = makeNode(newNodeValue, toNodeValue);
    neighborNode.neighbors[newNodeValue] = this.newestNode;
  }
  // Add the new node to the allNodes object
  this.allNodes[newNodeValue] = this.newestNode;
  console.log(this.allNodes);
};


Graph.prototype.contains = function(nodeValue){
  return this.allNodes.hasOwnProperty(nodeValue);
};

Graph.prototype.removeNode = function(nodeValue){
  // find that node. go to all its neighbors and tell them to remove itself from neighbor list
  var nodeToRm = this.allNodes[nodeValue];
  for(var neighbor in nodeToRm.neighbors){
    //delete neighbor[nodeValue];
    var theNeighbor = nodeToRm.neighbors[neighbor];
    delete theNeighbor[nodeValue];
  }
  delete this.allNodes[nodeValue];
};

Graph.prototype.getEdge = function(fromNodeValue, toNodeValue){
  var fromNode = this.allNodes[fromNodeValue];
  var toNode = this.allNodes[toNodeValue];
  if(fromNode.neighbors[toNodeValue]!== undefined){
    return true;
  }return false;
};

Graph.prototype.addEdge = function(fromNodeValue, toNodeValue){
  var fromNode = this.allNodes[fromNodeValue];
  var toNode = this.allNodes[toNodeValue];
  fromNode.neighbors[toNodeValue] = toNode;
  toNode.neighbors[fromNodeValue] = fromNode;
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

// input: value of new node (optional: reference to node)
// output: Node Object
var makeNode = function(value, toNodeValue){
  var node = {};

  node[value] = value; //node.value
  node.neighbors = {};

  if(toNodeValue !== undefined){
    console.log('here');
    console.log(toNodeValue);
    console.log(this.allNodes[toNodeValue]);
    var toNode = this.allNodes[toNodeValue];
    node.neighbors[toNodeValue] = toNode;
  }

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
