
const visitAllNodes = function (node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  // Your code here
  let child = node.childNodes;
  if (child) {
    for (let i = 0; i < child.length; i++) {
      visitAllNodes(child[i], callback);
    }
  }

  callback(node);
};

const flattenTreeToArray = function (node) {
  // Hint: Use visitAllNodes()
  // Your code here
  const flatArr = [];
  visitAllNodes(node, (child) => flatArr.push(child));
  return flatArr;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray,
};
