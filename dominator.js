const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function (root, id) {
  // Your code here
  const flatArr = flattenTreeToArray(root);
  return flatArr.filter((elem) => {
    if (flatArr[elem] === id) {
      return id;
    }
  });
};

const getElementsByClassName = function (root, className) {
  // Your code here
};

const getElementsByTagName = function (root, tagName) {
  // Your code here
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName,
};
