Object.defineProperty(
  Array.prototype, 
  "average",
  {
    value: function() {
      let total = 0;
      for (let i = 0; i < this.length; i++) {
        if( typeof this[i] !== "number" ) return null;
        total += this[i];
      }
      return total / this.length;
    }
  }
);
module.exports = {};