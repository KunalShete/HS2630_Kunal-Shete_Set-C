// Linked List Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Stack implemented using Linked List
class Stack {
  constructor() {
    this.top = null;
  }

  // Push operation to add an element to the stack
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  // Pop operation to remove the top element from the stack
  pop() {
    if (!this.top) {
      return null; // Stack is empty
    }

    const poppedNode = this.top;
    this.top = this.top.next;
    return poppedNode.data;
  }

  // Peek operation to get the top element of the stack without removing it
  peek() {
    if (!this.top) {
      return null; // Stack is empty
    }

    return this.top.data;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.top === null;
  }
}

// Usage example
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30

console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20

console.log(stack.isEmpty()); // Output: false

console.log(stack.pop()); // Output: 10

console.log(stack.isEmpty()); // Output: true
