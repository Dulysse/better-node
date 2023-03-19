/// <reference path="operators.d.ts" />
/// <reference path="_array.d.ts" />
/// <reference path="iterations.d.ts" />
/// <reference path="_number.d.ts" />

declare type _StringSplit<
  T extends string, 
  S extends string,
  Result=[]
> = T extends `${infer Start}${S}${infer Next}` 
  ? _StringSplit<
    Next, 
    S,
    _Push<
      _Cast<Result, any[]>,
      Start
    >
  >
: T extends `${infer End}` 
  ? _Equal<End, ""> extends true
    ? _Cast<Result, any[]> 
  : _Push<
    _Cast<Result, any[]>,
    End
  >
: never;

declare type _StringFirst<
  T extends string
> = T extends string 
  ? _NotEqual<T, string> extends true 
    ? _NotEqual<_StringLength<T>, 0> extends true
      ? T extends `${infer F}${string}`
        ? F
      : string
    : undefined
  : string
: never;

declare type _StringLast<
  T extends string
> = T extends string 
  ? _NotEqual<T, string> extends true 
    ? _NotEqual<_StringLength<T>, 0> extends true
      ? _StringAt<T, _Decr<IterationOf<_StringLength<T>>>>
    : undefined
  : string
: never;

declare type _StringAt<
  T extends string, 
  I extends number,
  Result=_StringSplit<T, "">[I]
> = Result extends string ? Result : never;

declare type _StringLength<
  T extends string, 
  Result=_Length<_StringSplit<T, "">>
> = Result extends number ? Result : never;

declare type _StringIndexOf<
  T extends string,
  S extends string
> = _Or<
  _Equal<T, string>,
  _Equal<S, string>
> extends true
  ? number
: _StringLength<S> extends 0 
  ? 0
: T extends `${infer Before}${S}${infer _}`
  ? _StringLength<Before>
: -1;

declare type _StringLastIndexOf<
  T extends string,
  S extends string,
  Result=-1
> =  _Or<
  _Equal<T, string>,
  _Equal<S, string>
> extends true
  ? number
: _StringLength<S> extends 0 
  ? _StringLength<T>
: T extends `${infer Before}${S}${infer End}`
  ? _StringLastIndexOf<
    End,
    S,
    _IsNegative<IterationOf<_Cast<Result, number>>> extends true 
      ? _StringLength<Before>
    : Pos<
      _Add<
        IterationOf<_Cast<Result, number>>,
        IterationOf<_Incr<IterationOf<_StringLength<Before>>>>
      >
    >
  >
: Result;

declare type _StringReplace<
  T extends string, 
  From extends string, 
  To extends string
> = T extends `${infer Before}${From}${infer After}`
  ? `${Before}${To}${After}`
: T;

declare type _StringReplaceAll<
  T extends string, 
  From extends string, 
  To extends string,
  Next=_StringReplace<T, From, To>
> = T extends Next
  ? T
: _StringReplaceAll<_Cast<Next, string>, From, To>;

declare type _StringReverse<
  T extends string,
  Counter=_StringLength<T>,
  Result=""
> = Result extends string 
  ? Counter extends 0
    ? Result
  : T extends `${infer Start}${infer End}`
    ? _StringReverse<
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

declare type _StringSlice<
  T extends string,
  Start=0,
  End=_StringLength<T>,
  Counter=(
    _IsNegative<
      IterationOf<_Cast<Start, number>>
    > extends true 
      ? _IsNegative<
        _Add<
          IterationOf<_StringLength<T>>,
          IterationOf<_Cast<Start, number>>
        >
      > extends true 
        ? 0
      : Pos<_Add<
        IterationOf<_StringLength<T>>,
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
  ? _StringSlice<
    T,
    Start,
    (
      _IsNegative<
        IterationOf<_Cast<End, number>>
      > extends true 
        ? Pos<_Add<
            IterationOf<_StringLength<T>>,
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
        IterationOf<_StringLength<T>>
      > extends true 
        ? _StringAt<T, _Cast<Counter, number>> 
      : ""
    }`
  >
: "";