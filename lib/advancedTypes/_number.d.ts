import { Cast } from "./operators";
import { Iteration, IterationOf, Pos, Prev, Next } from "./iterations";

export declare type _SubPositive<N1 extends Iteration, N2 extends Iteration> = {
  0: _SubPositive<Prev<N1>, Prev<N2>>;
  1: N1;
  2: number;
}[Pos<N2> extends 0 ? 1 : number extends Pos<N2> ? 2 : 0];

export declare type _SubNegative<N1 extends Iteration, N2 extends Iteration> = {
  0: _SubNegative<Next<N1>, Next<N2>>;
  1: N1;
  2: number;
}[Pos<N2> extends 0 ? 1 : number extends Pos<N2> ? 2 : 0];

export declare type _AddPositive<N1 extends Iteration, N2 extends Iteration> = {
  0: _AddPositive<Next<N1>, Prev<N2>>;
  1: N1;
  2: IterationOf<number>;
}[Pos<N2> extends 0 ? 1 : number extends Pos<N2> ? 2 : 0];

export declare type _AddNegative<N1 extends Iteration, N2 extends Iteration> = {
  0: _AddNegative<Prev<N1>, Next<N2>>;
  1: N1;
  2: number;
}[Pos<N2> extends 0 ? 1 : number extends Pos<N2> ? 2 : 0];

export declare type SubPositive<N1 extends Iteration, N2 extends Iteration> = _SubPositive<N1, N2> extends infer X ? Cast<X, Iteration> : never;
export declare type SubNegative<N1 extends Iteration, N2 extends Iteration> = _SubNegative<N1, N2> extends infer X ? Cast<X, Iteration> : never;
export declare type AddPositive<N1 extends Iteration, N2 extends Iteration> = _AddPositive<N1, N2> extends infer X ? Cast<X, Iteration> : never;
export declare type AddNegative<N1 extends Iteration, N2 extends Iteration> = _AddNegative<N1, N2> extends infer X ? Cast<X, Iteration> : never;

export declare type _IsNegative<N extends Iteration> = {
  '-': 1;
  '+': 0;
  '0': 0;
}[N[1]];
export declare type _Sub<N1 extends Iteration, N2 extends Iteration> = {
  0: SubPositive<N1, N2>;
  1: SubNegative<N1, N2>;
}[_IsNegative<N2>];
export declare type _Add<N1 extends Iteration, N2 extends Iteration> = {
  0: AddPositive<N1, N2>;
  1: AddNegative<N1, N2>;
}[_IsNegative<N2>];