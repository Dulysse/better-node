try {
  Object.defineProperty(
    global.Array.prototype, 
    "desc",
    {
      value: function() {
        return (
          this.some(e => typeof e !== "number")
        ) ? null : this.sort((a, b) => b - a);
      }
    }
  );
} catch (error) {
  void 0;
}
module.exports = {};