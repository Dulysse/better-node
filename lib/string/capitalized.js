const separators = [ "-", "_", " " ];
function _replaceSepWords(str, sep) {
  const index = str.indexOf(sep);
  if(index === -1) return str;
  if(str[index + 1]) {
    return _replaceSepWords(`${str.slice(0, index)}${str[index + 1].toUpperCase()}${str.slice(index + 2)}`, sep)
  }
  return _replaceSepWords(`${str.slice(0, index)}`, sep);
}
try {
  Object.defineProperty(
    global.String.prototype, 
    'capitalized', 
    {
      value: function(sep, first=true) {
        if(sep && !separators.includes(sep)) {
          throw new Error(`InvalidSeparator: Capitalize separator must be: "${separators.join('" or "')}".`);
        }
        if(!sep) {
          return this ? first ? this.charAt(0).toUpperCase() + this.slice(1) : this : this;
        }
        let str = this ? first ? this.charAt(0).toUpperCase() + this.slice(1): this : this;
        str = _replaceSepWords(first ? str : str.slice(1), sep);
        return first ? str : this[0] + str;  
      }
    }
  );
} catch (error) {
  void 0;
}
exports.separators = separators;