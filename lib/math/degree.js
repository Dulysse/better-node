try {
  Object.defineProperty(
    global.Math,
    'degrees',
    {
      value: function(rad) {
        if(
          typeof rad !== "number"
        ) {
          throw new Error('TypeError: rad value should be a number.')
        }
        return rad * ( 180 / this.PI );
      }
    }
  )
} catch (error) {
  void 0;
}
module.exports = {};