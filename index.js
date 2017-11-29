console.warn('THE TESTED FILE IS BEING REQUIRED HERE')
const lodash = require('lodash');

function reverse (array) {
  lodash.flatten(array);
  return lodash.reverse(array);
};

module.exports = reverse;
