/// <reference path="operators.d.ts" />
/// <reference path="_union.d.ts" />

declare type _Object = {
  [key: string]: any;
  [key: number]: any;
  [key: bigint]: any;
  [key: symbol]: any;
}

declare type _Merge<
  O1 extends _Object,
  O2 extends _Object
> = {
  [K in (keyof O1 | keyof O2)]: _Equal<O1[_Cast<K, keyof _Object>], unknown> extends true 
    ? O2[_Cast<K, keyof _Object>] 
  : O1[_Cast<K, keyof _Object>];
}

declare type _Required<
  O extends _Object
> = {
  [K in keyof O]-?: O[_Cast<K, keyof _Object>];
}

declare type _Partial<
  O extends _Object
> = {
  [K in keyof O]?: O[_Cast<K, keyof _Object>];
}

declare type _Omit<
  O extends _Object,
  K extends keyof _Object,
  E=_UnionExclude<keyof O, K>
> = {
  [K in _Cast<E, keyof _Object>]: O[_Cast<K, keyof _Object>];
}

