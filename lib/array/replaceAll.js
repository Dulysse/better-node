try {
  Object.defineProperty(
    global.Array.prototype, 
    "replaceAll",
    {
      value: function(c, r) {
        for (let i = 0; i < this.length; i++) {
          if(this[i] === c) {
            this[i] = r;
          }
        }
        return this;
      }
    }
  );
} catch (error) {
  void 0;
}
module.exports = {};