import { _At, _Length, _Split, _IndexOf, _Replace, _ReplaceAll } from "./_string";

declare global {
  namespace T {
    namespace String {
      type Split<T extends string, S=""> = S extends string ? _Split<T, S> : never;
      type At<T extends string, I extends number> = _At<T, I>;
      type Length<T extends string> = _Length<T>;
      type IndexOf<T extends string, S extends string> = _IndexOf<T, S>;
      type Replace<T extends string, From extends string, To extends string> = _Replace<T, From, To>;
      type ReplaceAll<T extends string, From extends string, To extends string> = _ReplaceAll<T, From, To>;
    }
  }
}

export {}