// Create the below linked list:
// 10-->15-->16
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

// {
//     head:{ value:10,next:null},
//     tail:{value:10,next:null},
//     length:1
// }

// insert will insert at any index given
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
        this.length++;
        return this;
    }
    append(value) {
        const newNode = new Node(value);

        // pointing to the new node which has next  null already set up

        this.tail.next = newNode;

        // this.tail has now a new last element.so we chqnge it to  new elenent
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        //Code here
        const newNode = {
            value: value,
            next: null,
        };

        newNode.tail = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value) {
        // if given index is greater than it will just attach to the end
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null,
        };
        const leader = this.travelToIndex(index-1)
    }

    travelToIndex(index){
        let counter =0
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.insert(200, 99);
myLinkedList.printList();
