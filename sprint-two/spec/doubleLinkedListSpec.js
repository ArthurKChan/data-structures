describe('doubleLinkedList', function() {
  /*************Arrange****************************/
  var doubleLinkedList;

  beforeEach(function() {
    doubleLinkedList = makeDoubleLinkedList();
  });
  /***********************************************/
  it('should have a head and tail', function(){
    //Assert
    expect(doubleLinkedList).to.have.property("head");
    expect(doubleLinkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "addToHead", "removeTail", "removeHead", and "contains"', function() {
    //Assert
    expect(doubleLinkedList.addToTail).to.be.a("function");
    expect(doubleLinkedList.addToHead).to.be.a("function");
    expect(doubleLinkedList.removeTail).to.be.a("function");
    expect(doubleLinkedList.removeHead).to.be.a("function");
    expect(doubleLinkedList.contains).to.be.a("function");
  });

  it('addToTail: first item added should be head and tail', function(){
    //Act
    doubleLinkedList.addToTail(0);
    //Assert
    expect(doubleLinkedList.head.value).to.equal(0);
    expect(doubleLinkedList.tail.value).to.equal(0);
  });

  it('addToHead: first item added should be head and tail', function(){
    //Act
    doubleLinkedList.addToHead(0);
    //Assert
    expect(doubleLinkedList.head.value).to.equal(0);
    expect(doubleLinkedList.tail.value).to.equal(0);
  });

  it('should be able to insert head and tail', function(){
    //Act
    doubleLinkedList.addToHead(0);
    doubleLinkedList.addToTail(1);
    //Assert
    expect(doubleLinkedList.head.value).to.equal(0);
    expect(doubleLinkedList.tail.value).to.equal(1);
  });

  xit('removeHead and removeTail should remove and return head/tail respectively (assumes insert works)', function(){
    //Arrange head[3]-[0]-[1]-[2]-[4]tail
    doubleLinkedList.addToHead(0);
    doubleLinkedList.addToTail(1);
    doubleLinkedList.addToTail(2);
    doubleLinkedList.addToHead(3);
    doubleLinkedList.addToTail(4);
    //Assert
    expect(doubleLinkedList.removeHead()).to.equal(3);
    expect(doubleLinkedList.removeTail()).to.equal(4);
    expect(doubleLinkedList.removeHead()).to.equal(0);
    expect(doubleLinkedList.removeTail()).to.equal(2);

    expect(doubleLinkedList.head.value).to.equal(1);
    expect(doubleLinkedList.tail.value).to.equal(1);

    expect(doubleLinkedList.removeHead()).to.equal(1);

    expect(doubleLinkedList.head.value).to.equal(null);
    expect(doubleLinkedList.tail.value).to.equal(null);
  });

  xit('should be able to insert and remove sequentially', function(){
    doubleLinkedList.addToTail(0);
    expect(doubleLinkedList.removeHead()).to.equal(0);
    doubleLinkedList.addToHead(0);
    expect(doubleLinkedList.removeTail()).to.equal(0);

    expect(doubleLinkedList.head.value).to.equal(null);
    expect(doubleLinkedList.tail.value).to.equal(null);
  });

});
