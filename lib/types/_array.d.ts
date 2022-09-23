import { _Decr, _Incr, _Lower, _IsNegative, _Add, _LowerEq, _Sub, _GreaterEq, _Greater } from "./_number";
import { IterationOf, Pos } from "./iterations";
import { _And, _Equal, _NotEqual, _Cast, _Or } from "./operators";

export declare type _StringLiteralType = string | number | bigint | boolean;

export declare type _StringLiteralTypeParser<
  T extends any
> = T extends _StringLiteralType 
  ? T
: {
  0: "[object Object]";
  1: _Join<[ ...(_Cast<T, []>) ], ",">
}[T extends any[] ? 1 : 0];

export declare type _Join<
  L extends any[], 
  S extends string,
  Result=""
> = L extends [ infer Start, ...infer End ] 
  ? End extends unknown[]
    ? _Join<
      [ ...End ], 
      S, 
      `${_StringLiteralTypeParser<Result>}${_StringLiteralTypeParser<Start>}${_Length<End> extends 0 ? "" : S}`
    > 
  : never 
: Result;

export declare type _Length<
  L extends any[]
> = L extends any[] ? L['length'] : never;

export declare type _Replace<
  L extends any[], 
  From extends any, 
  To extends any,
  Result=[],
  AsChange=false,
  Counter=_Length<L>
> = Counter extends 0
  ? Result
: L extends [ infer Start, ...infer End ] 
? End extends unknown[]
    ? Start extends From
      ? _Replace<
        [ ...End ],
        From,
        To,
        [ 
          ...(Result extends any[] ? Result : []),
          AsChange extends false ? To : From
        ], 
        AsChange extends false ? true : AsChange,
        _Decr<
          IterationOf<
            Counter extends number ? Counter : never
          >
        >
      >
    : _Replace<
      [ ...End ],
      From,
      To,
      [ 
        ...(_Cast<Result, any[]>),
        Start
      ], 
      AsChange,
      _Decr<
        IterationOf<
          Counter extends number ? Counter : never
        >
      >
    >
  : never
: L;

export declare type _ReplaceAll<
  L extends any[], 
  From extends any,
  To extends any,
  Next=_Replace<L, From, To>
> = L extends Next
  ? L
: Next extends any[] 
  ? _ReplaceAll<Next, From, To>
: never;

export declare type _Reverse<
  L extends any[],
  Counter=_Length<L>,
  Result=[]
> = Result extends any[] 
  ? Counter extends 0
    ? Result
  : L extends [ infer Start, ...infer End ]
    ? End extends unknown[]
      ? _Reverse<
        End,
        _Decr<
          IterationOf<
            Counter extends number ? Counter : never
          >
        >,
        [ Start, ...Result ]
      >
    : never
  : never
: never;

export declare type _First<
  L extends any[]
> = L extends [ infer First, ...infer _ ] 
  ? First
: never;

export declare type _Last<
  L extends any[]
> = L extends [ ...infer _, infer Last ] 
  ? Last
: never;

export declare type _IndexOf<
  L extends any[],
  T extends any,
  I=0
> = I extends number 
  ? _Equal<I, _Length<L>> extends true
    ? -1
  : _Equal<L[I], T> extends true
    ? I
  : _IndexOf<
    L, 
    T, 
    _Incr<IterationOf<I>>
  > 
: never;

export declare type _Includes<
  L extends any[],
  T extends any
> = _NotEqual<
  _IndexOf<L, T>,
  -1
>;

export declare type _Filter<
  L extends any[],
  F extends () => any,
  Result=[]
> = F extends () => infer R
  ? L extends [ infer K, ...infer Next ]
    ? _Filter<
      Next, 
      F, 
      [ 
        ...(_Cast<Result, any[]>),
        ...(_Equal<R, K> extends true 
          ? [ K ] 
        : []) 
      ]
    >
  : Result
: never;

export declare type _Find<
  L extends any[],
  F extends () => any,
  Result=null
> = F extends () => infer R
  ? L extends [ infer K, ...infer Next ]
    ? _Find<
      Next, 
      F, 
      _Equal<R, K> extends true 
        ? K 
      : Result
    >
  : Result
: never;

export declare type _ToString<
  L extends any[]
> = _Join<L, ",">;

export declare type _Slice<
  L extends any[],
  Start=0,
  End=_Length<L>,
  Counter=(
    _IsNegative<
      IterationOf<_Cast<Start, number>>
    > extends true 
      ? _IsNegative<
        _Add<
          IterationOf<_Length<L>>,
          IterationOf<_Cast<Start, number>>
        >
      > extends true 
        ? 0
      : Pos<_Add<
        IterationOf<_Length<L>>,
        IterationOf<_Cast<Start, number>>
      >>
    : Start
  ),
  Result=[]
> = Counter extends End
? Result
: _Lower<
IterationOf<_Cast<Start, number>>,
IterationOf<_Cast<End, number>>
> extends true 
? _Slice<
  L,
  Start,
  (
    _IsNegative<
      IterationOf<_Cast<End, number>>
    > extends true 
      ? Pos<_Add<
          IterationOf<_Length<L>>,
          IterationOf<_Cast<End, number>>
        >>
    : End
  ),
  _Incr<
    IterationOf<_Cast<Counter, number>>
  >,
  [ ..._Cast<Result, any[]>,
    ...(_Lower<
      IterationOf<_Cast<Counter, number>>,
      IterationOf<_Length<L>>
    > extends true 
      ? [ L[_Cast<Counter, number>] ]
    : [])
  ]
>
: [];

export declare type _Splice<
  L extends any[],
  Start=0,
  DeleteCount=_Length<L>,
  Index=(
    _IsNegative<
      IterationOf<_Cast<Start, number>>
    > extends true 
      ? _IsNegative<
        _Add<
          IterationOf<_Length<L>>,
          IterationOf<_Cast<Start, number>>
        >
      > extends true 
        ? 0
      : Pos<_Add<
        IterationOf<_Length<L>>,
        IterationOf<_Cast<Start, number>>
      >>
    : Start
  ),
  Target=(
    _Greater<
      IterationOf<Pos<_Add<
        IterationOf<_Cast<Index, number>>,
        IterationOf<_Cast<DeleteCount, number>>
      >>>,
      IterationOf<_Length<L>>
    > extends true
      ? _Length<L>
    : Pos<_Add<
      IterationOf<_Cast<Index, number>>,
      IterationOf<_Cast<DeleteCount, number>>
    >>
  ),
  Result=[]
> = _Or<
  _IsNegative<IterationOf<_Cast<Target, number>>>,
  _GreaterEq<IterationOf<_Cast<Index, number>>, IterationOf<_Cast<Target, number>>>
> extends true 
  ? [
    ...(_Cast<Result, any[]>),
  ]
: _Splice<
  L,
  Start,
  DeleteCount,
  _Incr<IterationOf<_Cast<Index, number>>>,
  Target,
  _Push<
    _Cast<Result, any[]>,
    L[_Cast<Index, number>]
  >
>

export declare type _Concat<
  L1 extends any[],
  L2 extends any[]
> = [
  ...L1,
  ...L2
];

export declare type _Push<
  L extends any[],
  T extends any
> = [
  ...L,
  T
];

export declare type _Insert<
  L extends any[],
  I extends number,
  T extends any
> = never;

export declare type _Drop<
  L extends any[]
> = never;

export declare type _Sum<
  L extends any[]
> = never;

export declare type _Asc<
  L extends any[]
> = never;

export declare type _Desc<
  L extends any[]
> = never;

export declare type _Of<
  L extends any[]
> = never;