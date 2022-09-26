import { _Equal, _Cast } from "./operators";

export declare type _Object = {
  [key: string]: any;
  [key: number]: any;
}

export declare type _Merge<
  O1 extends _Object,
  O2 extends _Object
> = {
  [K in (keyof O1 | keyof O2)]: _Equal<O1[_Cast<K, string>], unknown> extends true 
    ? O2[_Cast<K, string>] 
  : O1[_Cast<K, string>];
}