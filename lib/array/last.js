Object.defineProperty(
  global.Array.prototype,
  'last',
  {
    value: function() {
      return this.length ? this[this.length - 1] : null;
    }
  }
);
module.exports = {};