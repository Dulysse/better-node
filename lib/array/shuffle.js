try {
  Object.defineProperty(
    global.Array.prototype, 
    "shuffle",
    {
      value: function(c = 1) {
        if(typeof c !== "number" || !c.between(1, 100)) {
          throw new Error(`IncorrectCountValue: Your count value should be an integer between 1 and 100.`);
        }
        for (let _ = 0; _ < c; _++) {
          for (let i = this.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this[i], this[j]] = [this[j], this[i]];
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