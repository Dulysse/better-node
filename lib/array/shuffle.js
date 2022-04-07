try {
  Object.defineProperty(
    global.Array.prototype, 
    "shuffle",
    {
      value: function(c = 1) {
        if(typeof c !== "number" || !c.between(1, 100)) {
          throw new Error(`IncorrectCountValue: Your count value should be an integer between 1 and 100.`);
        }
        for (let i = 0; i < c; i++) {
          for (let j = 0; j < this.length; j++) {
            const randomIndex = Math.floor(Math.random() * this.length);
            [ this[j], this[randomIndex] ] = [ this[randomIndex], this[j] ];
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