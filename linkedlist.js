// Node
class Node{
    constructor(value){
        this.head = value;
        this.next = null;
    }
}
// Linked List
class LinkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(){
        
    }
}

const myLinkedList = new LinkedList(1);
console.log(myLinkedList);