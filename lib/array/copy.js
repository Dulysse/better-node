Object.defineProperty(
  global.Array.prototype,
  "copy",
  {
    value: function() {
      return [ ...this ];
    }
  }
);
module.exports = {};