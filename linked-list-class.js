function generateNode(value) {
    return {
        data: value,
        next: null
    };
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.end = null;
    }

    add(value) {
        let newNode = generateNode(value);
        if (!this.head) {
            this.head = newNode;
            this.size += 1;
            return;
        }

        let currentNode = this.head;
        let previousNode = null;

        while (currentNode) {
            previousNode = currentNode;
            currentNode = currentNode.next;

            if (!currentNode) {
                previousNode.next = newNode;
            }
        }
        this.size += 1;
    }

    delete() {
        if (!this.head) {
            console.log("Linked List is empty! \n");
            return;
        }

        let currentNode = this.head;
        let previousNode = null;

        while (currentNode) {
            if (!currentNode.next) {
                previousNode.next = null;
            }

            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        this.size -= 1;
    }

    addAt(index, value) {
        let newNode = generateNode(value);

        if (index > this.size + 1) {
            console.log("Sorry! not possible, Please enter a valid index..");
        }

        if (!this.head) {
            this.head = newNode;
            this.size += 1;
            return;
        }

        let currentNode = this.head;
        let previousNode = null;
        let nodeIndex = 0;

        while (currentNode) {
            nodeIndex += 1;
            if (nodeIndex === index) {
                previousNode.next = newNode;
                newNode.next = currentNode;
                this.size += 1;
            }
            else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }

    deleteAt(index) {
        if (!this.head) {
            console.log("Linked List is empty! Insert item to perform operation..");
            return;
        }

        if (this.size < index) {
            console.log("Please eneter valid index!");
            return;
        }

        if (this.size === 1) {
            this.head = null;
            this.size -= 1;
            return;
        }

        if (index === 1) {
            this.head = this.head.next;
            this.size -= 1;
            return;
        }

        let nodeIndex = 0;
        let currentNode = this.head;
        let previousNode = null;

        while (currentNode) {
            nodeIndex += 1;
            if (nodeIndex === index) {
                previousNode.next = currentNode.next;
            } else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        this.size -= 1;
    }

    length() {
        console.log('Linked List size :>>', this.size);
        console.log("\n");
        return;
    }

    doesExist(value) {
        if (!this.head) {
            console.log("So sad, Linked List is empty! \n");
            return false;
        }

        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.data === value) {
                console.log("Yiippiiee! Element exist in Linked List.. \n");
                return true;
            }
            currentNode = currentNode.next;
        }

        console.log("So sad, Unable to find element!\n");
        return false;
    }

    print() {
        if (!this.head) {
            console.log("Linked List is empty! \n");
            return;
        }

        console.log("Linked List :", this.head);
        console.log("\n");
    }

    printReverse() {
        if (!this.end) {
            console.log("Linked List is empty! \n");
            return;
        }

        console.log("Linked List :", this.end);
        console.log("\n");
    }

    reverse() {
        let save = null;
        let previous = null;
        let node = this.head;
        while (node) {
            save = node.next;
            node.next = previous;
            previous = node;
            node = save;
        }
        this.end = previous;
        this.printReverse();
    }
}


let list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);
list.add(60);
list.addAt(2, 100);
list.addAt(2, 200);
list.addAt(2, 300);
// list.print();
// list.length();
list.deleteAt(1);
// list.print();
// list.doesExist(50);
list.reverse();
