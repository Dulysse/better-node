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
  Object.defineProperty(
    global.Object.prototype,
    'copy',
    {
      value: function() {
        return Array.isArray(this) ?
          [ ...this ] : 
        { ...this };
      }
    }
  );
  ["entries", "keys", "values"].forEach(key => Object.defineProperty(
    global.Object.prototype,
    key,
    {
      value: function() {
        return Object[key](this);
      }
    }
  ));
  Object.defineProperty(
    global.Object.prototype,
    "iterable",
    {
      value: function(fn = Object.entries) {
        this[Symbol.iterator] = function* () {
          for (const i of fn(this)) {
            yield i;
          }
        };
        return this;
      }
    }
  );
} catch (error) {
  void 0;
}

module.exports = {};