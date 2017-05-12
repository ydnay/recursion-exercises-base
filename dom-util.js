
const visitAllNodes = function (node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  // Your code here
  let children = node.childNodes;
  if (node.hasChildNodes()) {
    for (let i = 0; i < children.length; i++) {
      visitAllNodes(children[i], callback);
    }
  }

  callback(children);
};

const flattenTreeToArray = function (node) {
  // Hint: Use visitAllNodes()
  // Your code here
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray,
};
