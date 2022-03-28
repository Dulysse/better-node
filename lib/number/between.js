try {
  Object.defineProperty(
    global.Number.prototype, 
    'between', 
    {
      value: function(min, max) {
        if(typeof min !== "number") throw new Error('TypeError: Min value should be a number.');
        if(typeof max !== "number") throw new Error('TypeError: Max value should be a number.');
        if(min > max) throw new Error('TypeError: Max value should be bigger or equal than min value.');
        return (
          this >= min &&
          this <= max
        );
      }
    }
  );
} catch (error) {
  void 0;
}

module.exports = {};