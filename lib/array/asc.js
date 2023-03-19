try {
  Object.defineProperty(
    global.Array.prototype, 
    "asc",
    {
      value: function() {
        if (this.some(e => typeof e !== "number")) {
          let el = this.find(e => typeof e !== "number");
          throw new Error(`TyperError: Element of index ${this.indexOf(el)} is not a number: "${el}"`);
        } else {
          return this.sort((a, b) => a - b);
        }
      }
    }
  );
} catch (error) {
  void 0;
}
module.exports = {};