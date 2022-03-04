Object.defineProperty(
  Array.prototype,
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
module.exports = {};