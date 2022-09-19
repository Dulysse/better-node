import { Equal } from "./operators";

export declare type _Split<
  T extends string, 
  S extends string,
  Result=[]
> = T extends `${infer Start}${S}${infer Next}` 
  ? _Split<
    Next, 
    S, 
    [ ...(Result extends any[] ? Result : []), Start ]
  >
: T extends `${infer End}` 
  ? Equal<End, ""> extends true
    ? [ ...(Result extends any[] ? Result : []) ] 
  : [ ...(Result extends any[] ? Result : []), End ]
: never;

export declare type _At<
  T extends string, 
  I extends number,
  Result=_Split<T, "">[I]
> = Result extends string ? Result : never;

export declare type _Length<
  T extends string, 
  Result=_Split<T, "">['length']
> = Result extends number ? Result : never;

export declare type _IndexOf<
  T extends string,
  S extends string
> = T extends `${infer Before}${S}${infer _}`
  ? _Length<Before>
: -1;

export declare type _Replace<
  T extends string, 
  From extends string, 
  To extends string
> = T extends `${infer Before}${From}${infer After}`
  ? `${Before}${To}${After}`
: T;

export declare type _ReplaceAll<
  T extends string, 
  From extends string, 
  To extends string,
  Next=_Replace<T, From, To>
> = T extends Next
  ? T
: _ReplaceAll<Next, From, To>;
