try {
  Object.defineProperty(
    global.Array.prototype,
    "update",
    {
      value: function(a) {
        if(!a || typeof a !== "object") throw new Error("You should replace your array by another array!");
        this.splice(a.length, this.length);
        for (let i = 0; i < a.length; i++) {
          this[i] = a[i];
        }
        return this;
      }
    }
  )
} catch (error) {
  void 0;
}
module.exports = {};