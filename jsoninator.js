const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...

const stringify = function (obj) {
  // your code goes here
  if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  } else if (Array.isArray(obj)) {
    obj = obj.map((item) => stringify(item));
    return '[' + obj + ']';
  } else if (typeof (obj) === 'object') {
    let res = [];
    for (let key in obj) {
      res.push(stringify(key) + ':' + stringify(obj[key]));
    }

    return '{' + res.join() + '}';
  }

  return obj;
};

module.exports = {
  stringify: stringify,
};
