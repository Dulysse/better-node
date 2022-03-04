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
}
export = {};