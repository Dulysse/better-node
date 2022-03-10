# [Better Node]('https://www.npmjs.com/package/@dulysse1/better-node')
###### ✅  Work in `Javascript` and `Typescript` ✅ 

### How to install ?

```node
> npm install @dulysse1/better-node
```

### How to use ?

```typescript
  /**
   * IMPORT AT THE TOP MODULE SCRIPT
   * (index.js, index.ts ...)
  **/

  import '@dulysse1/better-node';
  // OR //
  require('@dulysse1/better-node');

  /**
   * Then... Enjoy !
  **/
```
### Examples

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
  "Server internal error! ⚠️".red.bold
);
```
<div style="background-color: #F4F4F4FF;" >
  <span style="color: #AA00AA;zoom: .8;margin: 0;">
    &gt;
  </span>
  <span style="font-size: .9rem;color: red;font-weight: bold;padding-top: 20px;padding-left: .5rem;">
    Server internal error! ⚠️ 
  </span> 
</div>

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
* [npm module]('https://www.npmjs.com/package/@dulysse1/better-node')