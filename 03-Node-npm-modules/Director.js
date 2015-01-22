'use strict'

/**
 * Director module
 */
module.exports = (function (name) {
  var attributes = {};
  attributes.name = name;
  
  /* Public functions */
  return function () {
    /**
     * Set attribute
     * @param {String} attr
     * @param {Object} value
     */
    this.set = function (attr, value) {
      attributes[attr] = value;
    }

    /**
     * Get attribute
     * @param {String} attr
     * @return {Object} attribute value
     */
    this.get = function (attr) {
      return attributes[attr];
    }

    /**
     * Director speak
     * @return {String} director quotes
     */
    this.speak = function () {
      var quotes = this.get('quotes') === 'object' ? this.get('quotes').join(' and ') : this.get('quotes');
      var say = attributes.name + ' say: ' + quotes;
      console.log(say);
      return say;
    }
  }
})();