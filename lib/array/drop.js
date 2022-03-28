try {
  Object.defineProperty(
    global.Array.prototype,
    'drop',
    {
      value: function(...elem) {
        let self = [ ...this ];
        for (let i = 0; i < self.length; i++) {
          if(elem.includes(self[i])) this.splice(this.indexOf(self[i]), 1);
        }
        return this;
      }
    }
  );
} catch (error) {
  void 0;
}
module.exports = {};