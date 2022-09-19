import { _At, _Length, _Split, _IndexOf } from "./_string";

declare global {
  namespace T {
    namespace String {
      type Split<T extends string, S=""> = S extends string ? _Split<T, S> : never;
      type At<T extends string, I extends number> = _At<T, I>;
      type Length<T extends string> = _Length<T>;
      type IndexOf<T extends string, S extends string> = _IndexOf<T, S>;
    }
  }
}

export {}