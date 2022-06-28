///// TESTS ////////

require('../');

console.log(Math.PI.between(3, 4));

const arr = [ "hello", 2, 3, 2, 1, "derfrftrf", 2 ]
const barr = arr.copy();
barr.push('pute')
console.log(arr);

console.log(
  arr.first()
);

console.log(
  Math.degrees(2.343342)
);

const array = [ 1, 2, 3, "hello" ];
array.drop("hello", 1, "4")
console.log(array);

const a = [ true ];
const b = Object.copy(a);
b.insert(1, b.length);
console.log(a, b);

console.log('Wow'.bg_green.black);

console.log("Hello World!".reverse());

const l = [ 1, 2, 3, 4 ];
l.update([ 2, 222, 3, 3, 34 ]);
console.log(l);

console.log([1, 2, 3, 4, 5, 1].shuffle());

console.log("UserHasName".uncapitalized("_", true));

let name = "Francois";
console.log(name.replaceAll("a", "x"))
console.log(name)
