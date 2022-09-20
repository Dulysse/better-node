import { 
  _Join,
  _Length,
  _Replace,
  _ReplaceAll,
  _Reverse,
  _First,
  _Last,
  _IndexOf,
  _Find,
  _Filter,
  _Includes,
  _ToString,
  _Splice,
  _Slice,
  _Concat,
  _Push
} from "./_array";

declare global {
  namespace T {
    namespace Array {
      type Pop<L extends any[]> = L extends [ ...infer Start, infer _ ] ? [ ...Start ] : never;
      type Shift<L extends any[]> = L extends [ infer _, ...infer Next ] ? [ ...Next ] : never;
      type Join<L extends any[], S=","> = S extends string ? _Join<L, S> : never;
      type Length<L extends any[]> = _Length<L>;
      type Replace<L extends any[], From extends any, To extends any> = _Replace<L, From, To>;
      type ReplaceAll<L extends any[], From extends any, To extends any> = _ReplaceAll<L, From, To>;
      type Reverse<L extends any[]> = _Reverse<L>;
      type First<L extends any[]> = _First<L>;
      type Last<L extends any[]> = _Last<L>;
      type IndexOf<L extends any[], T extends any> = _IndexOf<L, T>;
      type Includes<L extends any[], T extends any> = _Includes<L, T>;
      type Find<L extends any[], F extends () => any> = _Find<L, F>;
      type Filter<L extends any[], F extends () => any> = _Filter<L, F>;
      type ToString<L extends any[]> = _ToString<L>;
      type Splice<L extends any[]> = _Splice<L>;
      type Slice<L extends any[]> = _Slice<L>;
      type Concat<L extends any[]> = _Concat<L>;
      type Push<L extends any[]> = _Push<L>;
    }
  }
}

export {}