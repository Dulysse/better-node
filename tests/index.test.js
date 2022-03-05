///// TESTS ////////

require('../');

console.log(Math.PI.between(3, 4));

const arr = [ "hello", 2, 3, 2, 1, "derfrftrf", 2 ]

console.log(
  arr.first()
);

console.log(
  Math.degrees(2.343342)
);

const array = [ 1, 2, 3, "hello", "world", 1, "4" ];
array.drop("world", 1, "4")
console.log(array);

console.log(
  [ 1, 4, 329032, 22, "3242" ].sum()
)