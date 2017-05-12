const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function (root, id) {
  // Your code here
  const flatArr = flattenTreeToArray(root);
  for (var i = 0; i < flatArr.length; i++) {
    if (flatArr[i].id === id) {
      return flatArr[i];
    }
  }
};

const getElementsByClassName = function (root, className) {
  // Your code here
  // TODO: test not passing
  const flatArr = flattenTreeToArray(root);
  let classNameArr = [];
  for (var i = 0; i < flatArr.length; i++) {
    if (flatArr[i].className === className) {
      classNameArr.push(flatArr[i]);
    }
  }

  return classNameArr;
};

const getElementsByTagName = function (root, tagName) {
  // Your code here
  const flatArr = flattenTreeToArray(root);
  let tagNameArr = [];
  for (var i = 0; i < flatArr.length; i++) {
    if (flatArr[i].tagName === tagName) {
      tagNameArr.push(flatArr[i]);
    }
  }

  return tagNameArr;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName,
};
