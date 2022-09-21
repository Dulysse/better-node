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


declare global {
  interface ObjectConstructor {
    keys<T>(o: T): ObjectKeys<T>;
    entries<T>(o: T): [
      UnpackArrayType<ObjectKeys<T>>, 
      UnpackArrayType<ObjectValues<T>>
    ][];
    values<T>(o: T): ObjectValues<T>;
    /**
     * `From @dulysse1/better-node`
     * ### Make an exact copy of your object in memory
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
     * @returns {T} your object copied in memory
     */
    copy<T>(o: T): T extends object ? T : Error;
  }
}
export {};