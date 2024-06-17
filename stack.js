class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pushAt(element, index) {
        if (this.items.length === 0) {
            this.items.push(element);
            return;
        }

        // splice(index, deleteCount, element)
        this.items.splice(index, 0, element);

        // let newList = [];
        // for (let i = 0; i < this.items.length; i++) {
        //     if (i === index) {
        //         newList.push(element);
        //     }

        //     newList.push(this.items[i]);
        // }

        // this.items = newList;
    }

    deleteAt(index) {
        if (this.items.length === 0) {
            console.log("Sorry we can't delete item, Stack is empty! \n");
            return;
        }

        return (this.items.splice(index, 1));
    }

    pop() {
        if (this.items.length === 0)
            return 'Sorry, Stack is empty!';
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0)
            return 'Sorry, Stack is empty!';
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        console.log("isEmpty :>>", this.items.length === 0);
        console.log("\n");
        return this.items.length === 0;
    }

    length() {
        console.log("Stack length :>>", this.items.length);
        console.log("\n");
        return;
    }

    print() {
        if (this.items.length === 0) {
            console.log('Stack is empty!, Please insert atleast one item first..');
            return;
        }
        console.log("Stack :>>\n");
        this.items.forEach(item => console.log('Item :', item, '\n'));
        console.log("\n");
    }
}

let list = new Stack();
list.push(1);
list.push(2);
list.push(3);
list.print();
list.isEmpty();
list.push(4);
list.push(5);
list.pushAt(10, 2);
list.print();
list.pushAt(20, 2);
list.print();
list.deleteAt(2);
list.print();