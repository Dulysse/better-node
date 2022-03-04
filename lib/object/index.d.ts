declare global {
  interface ObjectConstructor {
    keys<T>(o: T): ObjectKeys<T>;
    entries<T>(o: T): [ObjectKeys<T>, ObjectValues<T>];
    values<T>(o: T): ObjectValues<T>;
  }
}
export = {};