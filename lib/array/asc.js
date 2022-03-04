Object.defineProperty(
  Array.prototype, 
  "asc",
  {
    value: function() {
      return (
        this.some(e => typeof e !== "number")
      ) ? null : this.sort((a, b) => a - b);
    }
  }
);
module.exports = {};