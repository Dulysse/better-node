Object.defineProperty(
  Math,
  'radians',
  {
    value: function(deg) {
      if(
        typeof deg !== "number"
      ) {
        throw new Error('TypeError: deg value should be a number.')
      }
      return ( deg * this.PI ) / 180.0;
    }
  }
)
module.exports = {};