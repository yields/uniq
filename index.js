
/**
 * dependencies
 */

try {
  var indexOf = require('indexof');
} catch(e){
  var indexOf = require('indexof-component');
}

/**
 * Create duplicate free array
 * from the provided `arr`.
 *
 * @param {Array} arr
 * @return {Array}
 */

module.exports = function (arr) {
  var len = arr.length, ret = [], v;
  for (var i = 0; i < len; i++) {
    if (!~indexOf(ret, v = arr[i])) ret.push(v);
  }
  return ret;
};
