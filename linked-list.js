class generateNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  push(value) {
    let newNode = new generateNode(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      if (!currentNode) {
        prevNode.next = newNode;
      }
    }
  }

  addNodeAt(position, value) {
    let newNode = new generateNode(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    let prevNode = null;
    let currentIndex = 0;

    while (currentNode) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;

      if (position === currentIndex) {
        prevNode.next = newNode;
        newNode.next = currentNode;
      }
    }
  }

  pop() {
    if (!this.head) {
      this.head = "There is no node inside list!";
      return;
    }

    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      if (!currentNode.next) {
        prevNode.next = null;
        return;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  printList() {
    return this.head;
  }
}

const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list.printList());

const list2 = new LinkedList();
list2.push(1);
list2.push(2);
list2.push(3);
list2.push(4);
list2.push(5);
list2.addNodeAt(2, 6);
console.log(list2.printList());

const list3 = new LinkedList();
list3.push(1);
list3.push(2);
list3.push(3);
list3.push(4);
list3.push(5);
list3.pop();
console.log(list3.printList());
