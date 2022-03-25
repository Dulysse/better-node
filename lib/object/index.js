function _throwError(errorType, message) {
  throw new Error(`${errorType}: ${message}`);
}
try {
  Object.defineProperty(
    global.Object,
    'copy',
    {
      value: function(o) {
        return (
          typeof o === "object" 
        ) ? 
          Array.isArray(o) ?
            [ ...o ] : 
          { ...o } :
        _throwError('TypeError', 'Should be an object.');
      }
    }
  );
} catch (error) {
  void 0;
}
module.exports = {};