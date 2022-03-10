Object.defineProperty(
  global.Array.prototype,
  'last',
  {
    value: function() {
      return this.length ? this[this.length] : null;
    }
  }
);
module.exports = {};