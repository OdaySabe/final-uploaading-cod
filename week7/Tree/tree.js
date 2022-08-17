class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
  insertLeft(valNode) {
    if (!this.leftChild) {
      this.leftChild = new Node(valNode);
    } else {
      let newNode = new Node(valNode);
      newNode.leftChild = this.leftChild;
      this.leftChild = newNode;
    }
  }
  insertRight(valNode) {
    if (!this.rightChild) {
      this.rightChild = new Node(valNode);
    } else {
      let newNode = new Node(valNode);
      newNode.rightChild = this.rightChild;
      this.rightChild = newNode;
    }
  }
  insertBinary(valNode) {
    if (!this.value) {
      this.value = valNode;
    } else if (valNode >= this.value && this.rightChild) {
      this.rightChild.insertBinary(valNode);
    } else if (valNode < this.value && this.leftChild) {
      this.leftChild.insertBinary(valNode);
    } else if (valNode >= this.value) {
      this.rightChild = new Node(valNode);
    } else {
      this.leftChild = new Node(valNode);
    }
  }
  findNode(nodeValue) {
    if (!this.value) {
      return false;
    } else if (nodeValue == this.value) {
      console.log("we find " + nodeValue);
      return true;
    }

    if (nodeValue >= this.value && this.rightChild) {
      return this.rightChild.findNode(nodeValue);
    } else if (nodeValue < this.value && this.leftChild) {
      return this.leftChild.findNode(nodeValue);
    }
  }
  findClosestParent(node1, node2) {}
}
const letters = ["E", "S", "G", "L", "Y", "I"];

let bSTree = new Node("H");
letters.forEach((l) => bSTree.insertBinary(l));
console.log(JSON.stringify(bSTree));
bSTree.findNode("Y");

// findNode(node, val) {
//   if (node.value === val) {
//     return true;
//   } else if (!node.rightChild && !node.leftChild) {
//     return false;
//   }

//   if (val < node.value) {
//     return this.findNode(node.leftChild, val);
//   } else if (val > node.value) {
//     return this.findNode(node.rightChild, val);
//   }
// }
// findCommonParent(node1, node2) {
//   return this.findCommonParentForTree(this, node1, node2);
// }

// findCommonParentForTree(root, node1, node2) {
//   if (!root) {
//     return null;
//   } else if (root.value === node1 || root.value === node2) {
//     return root;
//   }

//   let leftCommon = this.findCommonParentForTree(root.leftChild, node1, node2);
//   let rightCommon = this.findCommonParentForTree(
//     root.rightChild,
//     node1,
//     node2
//   );

//   if (leftCommon && rightCommon) {
//     return root;
//   } else {
//     return leftCommon ? leftCommon : rightCommon;
//   }
// }
// removeNode(node, val) {
//   if (!node) return undefined;
//   else if (val < node.value) {
//     node.leftChild = this.removeNode(node.leftChild, val);
//     return node;
//   } else if (val > node.value) {
//     node.rightChild = this.removeNode(node.rightChild, val);
//     return node;
//   } else {
//     if (!node.leftChild && !node.rightChild) {
//       node = undefined;
//       return node;
//     } else if (!node.leftChild) {
//       node = node.rightChild;
//       return node;
//     } else if (!node.rightChild) {
//       node = node.leftChild;
//       return node;
//     }

//     let minNode = this.findMinNode(node.leftChild);
//     node.value = minNode.value;

//     node.leftChild = this.removeNode(node.leftChild, minNode.value);
//     return node;
//   }
// }
// findMinNode(node) {
//   if (!node.rightChild) return node;
//   else return this.findMinNode(node.rightChild);
// }
