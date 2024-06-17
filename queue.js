class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) {
            console.log("Queue is empty, please insert some items to perform this operation \n");
            return;
        }

        console.log("Dequeue :>>", this.items[0]);
        console.log("\n");
        this.items.splice(0, 1);
    }

    peek() {
        console.log("Peek element :>>", this.items[0]);
        console.log("\n");
        return this.items[0];
    }

    isEmpty() {
        console.log("isEmpty :>>", this.items.length === 0);
        console.log("\n");
        return this.items.length === 0;
    }

    print() {
        if (this.items.length === 0) {
            console.log('Queue is empty!, Please insert atleast one item first..');
            return;
        }
        console.log("Queue :>>\n");
        this.items.forEach(item => console.log('Item :', item, '\n'));
        console.log("\n");
    }
}

let list = new Queue();
list.enqueue(1);
list.enqueue(2);
list.enqueue(3);
list.enqueue(4);
list.enqueue(5);
list.print();
list.dequeue();
list.print();

list.peek();
list.isEmpty();

