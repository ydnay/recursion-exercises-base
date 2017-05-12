const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function (root, id) {
  // Your code here
  const flatArr = flattenTreeToArray(root);
  return flatArr.map((elem) => {
    if (flatArr[elem].id === id) {
      return flatArr[elem];
    }
  });
};

const getElementsByClassName = function (root, className) {
  // Your code here
  const flatArr = flattenTreeToArray(root);
  let classNameArr = [];
  flatArr.map((elem) => {
    if (flatArr[elem].className && (flatArr[elem].className).indexOf(className) !== -1) {
      classNameArr.push(flatArr[elem]);
    }
  });

  return classNameArr;
};

const getElementsByTagName = function (root, tagName) {
  // Your code here
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName,
};
