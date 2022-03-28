try {
  Object.defineProperty(
    global.Number.prototype, 
    'float', 
    {
      value: function(precision=1) {
        if(!precision.between(0, 100)) throw new Error('RangeError: float() digits argument must be between 0 and 100');
        return parseFloat(this.toFixed(precision));
      }
    }
  );
} catch (error) {
  void 0;
}

module.exports = {};