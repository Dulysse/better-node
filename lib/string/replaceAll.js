try {
  Object.defineProperty(
    global.String.prototype, 
    'replaceAll', 
    {
      value: function(o, n) {
        let self = this.split(o).join(n);
        for (let i = 0; i < self.length; i++) {
          this[i] = self[i];
        }
        return self;
      }
    }
  );
} catch (error) {
  void 0;
}
module.exports = {};