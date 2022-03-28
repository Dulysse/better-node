try {
  Object.defineProperty(
    global.Array.prototype,
    "copy",
    {
      value: function() {
        return [ ...this ];
      }
    }
  );
} catch (error) {
  void 0;
}
module.exports = {};