# Better Node
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

  /**
   * Then... Enjoy !
  **/
```
### Examples

#### String
```typescript
  console.log(
    "I like 🐑 , 🐑 is my favorite pet 🐑 !".replaceAll('🐑','🦁')
  );
```
```node
> 'I like 🦁 , 🦁 is my favorite pet 🦁 !'
```
#### Array
```typescript
  console.log(
    new Array(10).randomize().asc()
  );
```
```node
> [ 0, 1, 3, 5, 5, 5, 8, 8, 8, 8 ]
```
```typescript
  const array = [ 1, 2, 3, "hello", "world", 1, "4" ];
  array.drop("world", 1, "4")
  console.log(array);
```
```node
> [ 2, 3, 'hello' ]
```

#### Number
```typescript
  console.log(
    Math.PI.float(2)
  );
```
```node
> 3.14
```
```typescript
  const age = 18;
  console.log(
    age.between(18, 25)
  );
```
```node
> true
```

### Contact
* [Github](https://github.com/Dulysse)
* [GitLab](https://gitlab.com/Dulysse1)
* [Linkedin](https://www.linkedin.com/in/ulysse-dupont-994848197/)