import { 
  _At,
  _Length,
  _Split,
  _IndexOf,
  _Replace,
  _ReplaceAll,
  _Reverse,
  _Slice
} from "./_string";

declare global {
  namespace Tx {
    namespace String {
      type Split<T extends string, S=""> = S extends string ? _Split<T, S> : never;
      type At<T extends string, I extends number> = _At<T, I>;
      type Length<T extends string> = _Length<T>;
      type IndexOf<T extends string, S extends string> = _IndexOf<T, S>;
      type Replace<T extends string, From extends string, To extends string> = _Replace<T, From, To>;
      type ReplaceAll<T extends string, From extends string, To extends string> = _ReplaceAll<T, From, To>;
      type Reverse<T extends string> = _Reverse<T>;
      type Slice<T extends string, Start=0, End=Length<T>> = _Slice<T, Start, End>;
    }
  }
}

export {}