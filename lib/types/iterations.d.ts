import { IterationMap } from "./iterations.map";
export declare type Iteration = [
  value: number,
  sign: '-' | '0' | '+',
  prev: keyof IterationMap,
  next: keyof IterationMap,
  oppo: keyof IterationMap
];
export declare type IterationOf<N extends number> = `${N}` extends keyof IterationMap ? IterationMap[`${N}`] : IterationMap['__'];
export declare type Next<I extends Iteration> = IterationMap[I[3]];
export declare type Prev<I extends Iteration> = IterationMap[I[2]];
export declare type Pos<I extends Iteration> = I[0];
export { IterationMap };