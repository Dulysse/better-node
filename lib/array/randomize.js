
try {
  Object.defineProperty(
    global.Array.prototype, 
    "randomize",
    {
      value: function(min=0, max=10) {
        if(min >= max) throw new Error('Min value should be bigger than max.');
        for (let i = 0; i < this.length; i++) {
          this[i] = Math.floor(Math.random() * (max + 1 - min)) + min;
        }
        return this;
      }
    }
  );
} catch (error) {
  void 0;
}
module.exports = {};