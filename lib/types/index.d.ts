declare global {

  type ObjectKeys<T> = 
    T extends object ? (keyof T)[] :
    T extends number ? [] :
    T extends Array<any> | string ? string[] :
    never;

  type ObjectValues<T> = 
    T extends { [key: string]: infer R } ? R[] :
    T extends number ? [] :
    T extends Array<any> | string ? string[] :
    never;

  type UnpackReturnType<T> =  T extends (...args: any) => infer R ? R : never;
  type UnpackFuncArgs<T> =  T extends (...args: infer R) => any ? R : never;
  type UnpackArrayType<T> =  T extends (infer R)[] ? R : T;
  type UnpackAsyncGenerator<T> = T extends AsyncGenerator<infer R, any, any> ? R : never;
  type UnpackGenerator<T> = T extends Generator<infer R, any, any> ? R : never;
  type UnpackPromise<T> = T extends Promise<infer R> ? R : never;

  type OnlyArrayOf<T=[], V> = V extends number ? 
      'error' extends OnlyNumber<T> ? null : V[] :
    V extends string ?
      0 extends OnlyString<T> ? null : V[] :
    V extends object ?
      'error' extends OnlyObject<T> ? null : V[] :
    V extends any[] ?
      'error' extends OnlyArray<T> ? null : V[] :
    V extends boolean ?
      'error' extends OnlyBoolean<T> ? null : V[] :
    V extends bigint ?
      'error' extends OnlyBigInt<T> ? null : V[] :
    V extends symbol ?
      'error' extends OnlySymbol<T> ? null : V[] :
    V extends undefined ?
      'error' extends OnlyUndefined<T> ? null : V[] :
    null;
  
  type Enumerate<N extends number> = EnumerateInternal<[], N> extends (infer E)[] ? E : never;
  type Range<FROM extends number, TO extends number> = Exclude<Enumerate<TO>, Enumerate<FROM>>;
}

type PrependNextNum<A extends Array<unknown>> = A['length'] extends infer T ? ((t: T, ...a: A) => void) extends ((...x: infer X) => void) ? X : never : never;
type EnumerateInternal<A extends Array<unknown>, N extends number> = { 0: A, 1: EnumerateInternal<PrependNextNum<A>, N> }[N extends A['length'] ? 0 : 1];


type OnlyNumber<T> = T extends string ? 
'error' : T extends object ? 
'error' : T extends any[] ? 
'error' : T extends boolean ?
'error' : T extends bigint ? 
'error' : T extends symbol ? 
'error' : T extends undefined ? 
'error' : T;

type OnlyBoolean<T> = T extends string ? 
'error' : T extends object ? 
'error' : T extends any[] ? 
'error' : T extends number ?
'error' : T extends bigint ? 
'error' : T extends symbol ? 
'error' : T extends undefined ? 
'error' : T;

type OnlyBigInt<T> = T extends string ? 
'error' : T extends object ? 
'error' : T extends any[] ? 
'error' : T extends number ?
'error' : T extends boolean ? 
'error' : T extends symbol ? 
'error' : T extends undefined ? 
'error' : T;

type OnlyString<T> = T extends number ? 
0 : T extends object ? 
0 : T extends any[] ? 
0 : T extends boolean ?
0 : T extends bigint ? 
0 : T extends symbol ? 
0 : T extends undefined ? 
0 : T;

type OnlySymbol<T> = T extends number ? 
'error' : T extends object ? 
'error' : T extends any[] ? 
'error' : T extends boolean ?
'error' : T extends string ? 
'error' : T extends bigint ? 
'error' : T extends undefined ? 
'error' : T;

type OnlyUndefined<T> = T extends number ? 
'error' : T extends object ? 
'error' : T extends any[] ? 
'error' : T extends boolean ?
'error' : T extends string ? 
'error' : T extends bigint ? 
'error' : T extends symbol ? 
'error' : T;

type OnlyObject<T> = T extends number ? 
'error' : T extends string ? 
'error' : T extends any[] ? 
'error' : T extends boolean ?
'error' : T extends bigint ? 
'error' : T extends symbol ? 
'error' : T extends undefined ? 
'error' : T;

type OnlyArray<T> = T extends number ? 
'error' : T extends object ? 
'error' : T extends string ? 
'error' : T extends boolean ?
'error' : T extends bigint ? 
'error' : T extends symbol ? 
'error' : T extends undefined ? 
'error' : T;

export {};