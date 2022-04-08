// function BinaryTreeNode(value) {
//     this.value = value;
//     // left pointer
//     this.left = null;
//     // right pointer
//     this.right = null;
// }

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if ((this.root = null)) {
            this.root = newNode;
        }
    }
    lookup(value) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);

tree.insert(6);

tree.insert(20);

tree.insert(170);

tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root));

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
