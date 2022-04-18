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
        //Code here
        const newNode = {
            value: value,
            next: null,
        };

        // pointing to the new node which has next  null already set up

        this.tail.next = newNode;

        // this.tail has now a new last element.so we chqnge it to  new elenent
        this.tail = newNode;
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
