try {
  Object.defineProperty(
    global.Array.prototype, 
    "average",
    {
      value: function() {
        let total = 0;
        for (let i = 0; i < this.length; i++) {
          if( typeof this[i] !== "number" ) throw new Error(`TyperError: Element of index ${i} is not a number: "${this[i]}"`);
          total += this[i];
        }
        return total / this.length;
      }
    }
  );
} catch (error) {
  void 0;
}
module.exports = {};