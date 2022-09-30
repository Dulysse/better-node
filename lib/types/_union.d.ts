import { _Insert, _Length as L } from "./_array";

export declare type IntersectOf<U extends any> = (U extends unknown ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

export declare type _Last<U extends any> = IntersectOf<U extends unknown ? (x: U) => void : never> extends (x: infer P) => void ? P : never;
export declare type _Exclude<U extends any, M extends any> = U extends M ? never : U;

export declare type _ToArray<
  U extends any, 
  LN extends any[] = [], 
  LastU = _Last<U>
> = [LastU] extends [never] 
  ? LN
: _ToArray<
  _Exclude<U, LastU>,
  _Insert<LN, 0, LastU>
>;

export declare type _Length<
  U extends any
> = L<_ToArray<U>>;