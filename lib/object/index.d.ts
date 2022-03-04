declare global {
  interface ObjectConstructor {
    keys<T>(o: T): ObjectKeys<T>;
    entries<T>(o: T): [
      UnpackArrayType<ObjectKeys<T>>, 
      UnpackArrayType<ObjectValues<T>>
    ][];
    values<T>(o: T): ObjectValues<T>;
  }
}
export {};