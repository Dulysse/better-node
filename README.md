# [Better Node]('https://www.npmjs.com/package/@dulysse1/better-node')
###### ✅  Work for `Javascript` and `Typescript` ✅ 

### How to install ?

```node
> npm install @dulysse1/better-node
```

```node
> yarn add @dulysse1/better-node
```

### How to use ?

```typescript
  /**
   * IMPORT AT THE TOP MODULE SCRIPT
   * (index.js, index.ts ...)
   * SO THAT YOU CAN USE IT EVERYWHERE !
  **/

  import '@dulysse1/better-node';
  // OR //
  require('@dulysse1/better-node');

  /**
   * Then... Enjoy !
  **/
```
### Examples

```diff
+ New !
``` 
#### Namespace 👉 Tx 👈
<i> A magic toolkit for typing </i>
##### Architecture
```txt
/Tx
  --/Array
      --/Split
      --/...
  --/Any
      --/Equal
      --/...
  --/Object
      --/Merge
      --/...
  --/String
      --/Replace
      --/...
  --/Number
      --/Add
      --/...
  --/Union
      --/ToArray
      --/...
```
##### Usage example
```typescript
type T1 = Tx.Array.Reverse<[1, 2, 3]>;
type T1 = [3, 2, 1];

type T2 = Tx.String.ReplaceAll<"Hello world!", "o", "x">;
type T2 = "Hellx wxrld!";

type T3 = Tx.Number.Multiply<9, 9>;
type T3 = 81;

type T4 = Tx.Object.Merge<{ name: "hello" }, { age: 22 }>;
type T4 = { name: "hello", age: 22 };

type T5 = Tx.String.Slice<"Hello world!", 1, 4>;
type T5 = "ell";

type T6 = Tx.Number.Sub<19, 8>;
type T6 = 11;

type T7 = Tx.Array.Average<[1, 2, 3, 4, 5]>;
type T7 = 3;

type T8 = Tx.Union.ToArray<1 | 2 | 3 | 4 | 5>;
type T8 = [1, 2, 3, 4, 5];

type T9 = Tx.String.Last<"hello">;
type T9 = "o"

// AND MUCH MORE !
```

```diff
+ ----
``` 

#### String
```typescript
// STRING REPLACE ALL
console.log(
  "I like 🐑 , 🐑 is my favorite pet 🐑 !".replaceAll('🐑','🦁')
);
```
```node
> 'I like 🦁 , 🦁 is my favorite pet 🦁 !'
```
```typescript
// STRING STYLE
console.log(
  "Server internal error! ⚠️".red
);
```
```node 
> 'Server internal error! ⚠️'  <= your text will be red 🔴  
```
```typescript
// REVERSE YOUR STRING
console.log(
  "Hello World!".reverse()
);
```
```node 
> '!dlroW olleH'
```
```typescript
// CAPITALIZE YOUR STRING
console.log(
  "user_has_name".capitalized(false, "_")
);
```
```node 
> 'userHasName'
```
```typescript
// UN-CAPITALIZE YOUR STRING
console.log(
  "UserHasName".uncapitalized(true, "-")
);
```
```node 
> 'user-has-name'
```

#### Array
```typescript
// ARRAY GENERATOR
console.log(
  new Array(10).randomize().asc()
);
```
```node
> [ 0, 1, 3, 5, 5, 5, 8, 8, 8, 8 ]
```
```typescript
// ARRAY REPLACE ELEMENT
const array = [1, 2, 1, 1];

array.replace(1, 3);
console.log(array);

array.replaceAll(1, 3);
console.log(array);
```
```node
> [ 3, 2, 1, 1 ]
> [ 3, 2, 3, 3 ]
```
```typescript
// ARRAY SHUFFLE
const array = [1, 2, 3, 4, 5, 6];
console.log(
  array.shuffle()
);
```
```node
> [ 3, 6, 1, 4, 2, 5 ]
```
```typescript
// ARRAY DROP
const array = [ 1, 2, 3, "hello", "world", 1, "4" ];
array.drop("world", 1, "4")
console.log(array);
```
```node
> [ 2, 3, 'hello' ]
```
```typescript
// ARRAY COPY
const array = [ 1, 2, 3 ];
const array_copy = array.copy();
array.push(4);
console.log(array_copy);
```
```node
> [ 1, 2, 3 ]
```
```typescript
// ARRAY SUM
const array = [ 15, 14, 18 ];
console.log(
  array.sum()
);
```
```node
> 47
```
```typescript
// ARRAY INSERT
const array = [ 1, 2, 3 ];
array.insert(4, 1);
console.log(array);

```
```node
> [ 1, 4, 2, 3 ]
```

#### Number
```typescript
// NUMBER PRECISION
console.log(
  Math.PI.float(2)
);
```
```node
> 3.14
```
```typescript
// NUMBER IS BETWEEN
const age = 18;
console.log(
  age.between(18, 25)
);
```
```node
> true
```

## And more... :)

### Contact
* [Github](https://github.com/Dulysse)
* [GitLab](https://gitlab.com/Dulysse1)
* [Linkedin](https://www.linkedin.com/in/ulysse-dupont-994848197/)
