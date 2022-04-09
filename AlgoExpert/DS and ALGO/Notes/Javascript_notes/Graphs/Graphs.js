// 1) edge list
const graph = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3],
];

// edge list simply shows connection list 0 to 2 , 2 to 0

// 2) adjacent list
// Index is the node and value is the nodes neighbours// also can add in object form key and value
const graph1 = [[2], [2, 3], [0, 1, 3]];

// index of 0 is connected to 2
// index of 1 is connected to 1 and 3

// 3) adjacent Matrix
//will have 0 and 1 showing connected to those nodes or not

const graph3 = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
];

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        // index will be node value will be connected members
        // increase number of nodes

        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
    addEdge(node1, node2) {
        //uniderected Graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}

var myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
