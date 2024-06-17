function generateNode(value) {
    return {
        prev: null,
        data: value,
        next: null
    };
}

class DoulbyLinkedList {
    constructor() {
        this.head = null;
        this.end = null;
        this.size = null;
    }

    length() {
        console.info("Length of Doulby Linked List is :", this.size);
        return;
    }

    add(value) {
        if (!value) {
            console.error("Empty value! Try again ....");
            return;
        }

        let newNode = generateNode(value);

        if (!this.head) {
            this.end = newNode;
            this.head = newNode;
            this.size += 1;
            return;
        }

        let traverse = this.head;
        let previousNode = null;

        while (traverse) {
            if (previousNode) {
                traverse.prev = previousNode;
            }


            if (!traverse.next) {
                previousNode = traverse;
                newNode.prev = previousNode;
                this.end = newNode;
                traverse.next = newNode;
                this.size += 1;
                return;
            }

            previousNode = traverse;
            traverse = traverse.next;
        }

    }

    delete() {
        if (!this.head) {
            console.error("Doulby Linked List is empty! try again...");
            return;
        }

        let traverse = this.head;
        let previousNode = null;
        while (traverse) {
            if (!traverse.next) {
                previousNode.next = null;
                this.size -= 1;
                return;
            }

            previousNode = traverse;
            traverse = traverse.next;
        }
    }

    print() {
        if (!this.head) {
            console.error("Doulby Linked List is empty! try again...");
            return;
        }

        console.info("Doulby Linked List :>> \n");

        let traverse = this.head;
        while (traverse) {
            console.log('Node :>', traverse.data);
            traverse = traverse.next;
        }
    }

    reverse() {
        if (!this.end) {
            console.error("Doulby Linked List is empty! try again...");
            return;
        }

        console.info("Reverse Doulby Linked List :>> \n");

        let traverse = this.end;
        while (traverse) {
            console.log('Node :>', traverse.data);
            traverse = traverse.prev;
        }
    }

    doesExist(value) {
        if (!this.head) {
            console.error("Doulby Linked List is empty! Try again...");
            return;
        }

        let traverse = this.head;
        let index = 1;
        while (traverse) {
            if (traverse.data === value) {
                console.info(`Yippiee! Element exist at index ${index}`);
                return;
            }
            traverse = traverse.next;
            index += 1;
        }

        console.info("Aw! Sorry element didn't find, Try again..");
    }

    addAt(pos, value) {
        if (pos > this.size + 1) {
            console.error(`Error: Index out of bounds. The array currently has ${this.size} elements, so you cannot add an element at index ${pos}. Please choose an index ${this.size === null ? '1.' : `within the range of 1 to ${this.size + 1}.`}`);
            return;
        }

        if (pos < 1) {
            console.error(`Error: Invalid index. Index must be a non-negative integer. Please choose an index ${this.size === null ? '1.' : `within the range of 1 to ${this.size + 1}.`}`);
        }

        let newNode = generateNode(value);

        if (!this.head) {
            this.head = newNode;
            this.size += 1;
            return;
        }

        let currentPosition = 0;
        let traverse = this.head;
        let previousNode = null;

        while (traverse) {
            currentPosition += 1;

            if (currentPosition === pos) {
                if (previousNode) {
                    previousNode.next = newNode;
                    this.size += 1;
                } else {
                    this.head = newNode;
                    this.size += 1;
                }

                newNode.prev = previousNode;
                newNode.next = traverse;
                return;
            }

            previousNode = traverse;

            if (traverse.next)
                traverse = traverse.next;
            else break;
        }

        traverse.next = newNode;
        this.size += 1;
        newNode.prev = traverse;

        return;
    }

    deleteAt(pos) {
        if (pos > this.size) {
            console.error(`Error: Index out of bounds. The array currently has ${this.size} elements, so you cannot delete an element at index ${pos}. Please choose an index ${this.size === 1 ? '1.' : `within the range of 1 to ${this.size}.`}`);
            return;
        }

        if (pos < 1) {
            console.error(`Error: Invalid index. Index must be a non-negative integer. Please choose an index ${this.size === 1 ? '1.' : `within the range of 1 to ${this.size}.`}`);
        }

        let traverse = this.head;
        let previousNode = null;
        let currentPosition = 0;

        while (traverse) {
            currentPosition += 1;

            if (currentPosition === pos) {
                if (previousNode === null) {
                    this.head = traverse.next;
                    return;
                }

                if (traverse.next === null) {
                    previousNode.next = null;
                    return;
                }

                previousNode.next = traverse.next;
                return;
            }

            previousNode = traverse;
            traverse = traverse.next;
        }
    }
}

let doulbyLinkedList = new DoulbyLinkedList();

// Add elements in list
doulbyLinkedList.add(10);
doulbyLinkedList.add(20);
doulbyLinkedList.add(30);
doulbyLinkedList.add(40);

// Check rather element exist
doulbyLinkedList.doesExist(30);
console.log("\n");

// Get length of list
doulbyLinkedList.length();
console.log("\n");

// Print List in normal order
// doulbyLinkedList.print();
// console.log("\n");

// Print list in reverse order
// doulbyLinkedList.reverse();
// console.log("\n");

// At element at nth index
doulbyLinkedList.addAt(1, 1000);
doulbyLinkedList.print();
console.log("\n");

// Delete last node of list
// doulbyLinkedList.delete();
// doulbyLinkedList.print();
console.log("\n");

// Delete node at nth index
doulbyLinkedList.deleteAt(1);
doulbyLinkedList.print();