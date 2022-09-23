import { _Equal, _And, _Cast } from "./operators";
import { 
  _Length as ArrayLength
} from "./_array";
import { 
  _Lower,
  _IsPositive,
  _IsNegative,
  _Decr,
  _Add,
  _Incr
} from "./_number";
import { IterationOf, Pos } from "./iterations";

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
  ? _Equal<End, ""> extends true
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
  Result=ArrayLength<_Split<T, "">>
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
: _ReplaceAll<_Cast<Next, string>, From, To>;

export declare type _Reverse<
  T extends string,
  Counter=_Length<T>,
  Result=""
> = Result extends string 
  ? Counter extends 0
    ? Result
  : T extends `${infer Start}${infer End}`
    ? _Reverse<
      End,
      _Decr<
        IterationOf<
          Counter extends number ? Counter : never
        >
      >,
      `${Start}${Result}`
    >
  : never
: never;

export declare type _Slice<
  T extends string,
  Start=0,
  End=_Length<T>,
  Counter=(
    _IsNegative<
      IterationOf<_Cast<Start, number>>
    > extends true 
      ? _IsNegative<
        _Add<
          IterationOf<_Length<T>>,
          IterationOf<_Cast<Start, number>>
        >
      > extends true 
        ? 0
      : Pos<_Add<
        IterationOf<_Length<T>>,
        IterationOf<_Cast<Start, number>>
      >>
    : Start
  ),
  Result=""
> = Counter extends End
  ? Result
: _Lower<
  IterationOf<_Cast<Start, number>>,
  IterationOf<_Cast<End, number>>
> extends true 
  ? _Slice<
    T,
    Start,
    (
      _IsNegative<
        IterationOf<_Cast<End, number>>
      > extends true 
        ? Pos<_Add<
            IterationOf<_Length<T>>,
            IterationOf<_Cast<End, number>>
          >>
      : End
    ),
    _Incr<
      IterationOf<_Cast<Counter, number>>
    >,
    `${_Cast<Result, string>}${
      _Lower<
        IterationOf<_Cast<Counter, number>>,
        IterationOf<_Length<T>>
      > extends true 
        ? _At<T, _Cast<Counter, number>> 
      : ""
    }`
  >
: "";