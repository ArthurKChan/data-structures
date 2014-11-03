describe('graph', function() {
  var graph;

  beforeEach(function() {
    graph = new Graph();
  });

  it('should have methods named "addNode", "contains", "removeNode", "addEdge", "getEdge", "removeEdge" and "forEachNode"', function() {
    expect(graph.addNode).to.be.a("function");
    expect(graph.contains).to.be.a("function");
    expect(graph.removeNode).to.be.a("function");
    expect(graph.getEdge).to.be.a("function");
    expect(graph.addEdge).to.be.a("function");
    expect(graph.removeEdge).to.be.a("function");
  });

  it('should store values as nodes that were inserted', function() {
    graph.addNode('kittens');
    graph.contains('kittens');
    expect(graph.contains('kittens')).to.equal(true);
  });

  it('should remove nodes that were inserted', function() {
    graph.addNode('puppies');
    graph.removeNode('puppies');
    expect(graph.contains('puppies')).to.equal(false);
  });

  it('should automatically create an edge between two nodes if there is only one node in the graph', function() {
    graph.addNode('puppies');
    graph.addNode('kittens');
    expect(graph.getEdge('puppies', 'kittens')).to.equal(true);
  });

  it('should create edges between two nodes', function() {
    graph.addNode('puppies');
    graph.addNode('kittens');
    graph.addNode('penguins', 'puppies');
    expect(graph.getEdge('penguins', 'puppies')).to.equal(true);
    expect(graph.getEdge('penguins', 'kittens')).to.equal(false);
  });

  it('should remove edges between nodes', function() {
    graph.addNode('apples');
    graph.addNode('bananas');
    graph.addNode('satsumas', 'bananas');
    graph.addEdge('satsumas', 'apples');
    graph.removeEdge('apples', 'bananas');
    expect(graph.getEdge('apples', 'bananas')).to.equal(false);
  });

  it('should remove nodes without any edges', function() {
    graph.addNode('jacket');
    graph.addNode('hat');
    graph.removeEdge('jacket', 'hat');
    expect(graph.contains('hat')).to.equal(false);
    expect(graph.contains('jacket')).to.equal(false);
  });

  xit('getShortestPath should return an array of arrays.', function(){
    //Arrange
    graph.addNode('a');
    graph.addNode('b');
    //Act
    var paths = graph.getShortestPath('a','b');
    //Assert
    expect(paths).to.deep.equal([['a','b']]);
  });

  xit('should find a path from one node to another node.', function(){
    //Arrange
    graph.addNode('a');
    graph.addNode('b');
    graph.addNode('c', 'b');
    graph.addNode('d', 'c');
    //Act
    var paths = graph.getShortestPath('a','d');
    //Assert
    expect(paths).to.deep.equal(['a','b','c','d']);
  });

  xit('should find the shortest path from one node to another node.', function(){
    //Arrange
    graph.addNode('a');
    graph.addNode('b');
    graph.addNode('c','b');
    graph.addNode('d','c');
    graph.addNode('e','d');
    graph.addNode('f','e');
    graph.addNode('g','c');
    graph.addNode('h','d');
    graph.addEdge('a','d');
    graph.addEdge('b','d');
    //Act
    var paths = graph.getShortestPath('a','f');
    //Assert
    expect(paths).to.deep.equal(['a','d','e','f']);
  });

  xit('should find all shortest paths.', function(){
    //Arrange
    graph.addNode('a');
    graph.addNode('b');
    graph.addNode('c','b');
    graph.addNode('d','c');
    graph.addNode('e','d');
    graph.addNode('f','e');
    graph.addNode('g','c');
    graph.addNode('h','d');
    graph.addEdge('a','d');
    graph.addEdge('b','d');

    graph.addNode('i','a');
    graph.addEdge('i','e');
    //Act
    var paths = graph.getShortestPath('a','f');
    //Assert
    expect(paths.length).to.equal(2);
    expect(paths).to.be.an('array');
    expect(paths).to.have.deep.members( [['a','d','e','f'],['a','i','e','f']] );
  });

});
