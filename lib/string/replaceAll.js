function replaceAll_(w, o, n) {
  return (w.includes(o)) ? replaceAll_(w.replace(o, n), o, n) : w;
}
try {
  Object.defineProperty(
    global.String.prototype, 
    'replaceAll', 
    {
      value: function(o, n) {
        return replaceAll_(this.toString(), o, n);
      }
    }
  );
} catch (error) {
  void 0;
}

module.exports = {};