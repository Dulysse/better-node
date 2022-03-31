try {
  Object.defineProperty(
    global.String.prototype, 
    'replaceAll', 
    {
      value: function(o, n) {
        return this.split(o).join(n);
      }
    }
  );
} catch (error) {
  void 0;
}
module.exports = {};