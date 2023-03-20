/// <reference path="iterations.map.d.ts" />

declare type Iteration = [
	value: number,
	sign: "-" | "0" | "+",
	prev: keyof IterationMap,
	next: keyof IterationMap,
	oppo: keyof IterationMap
];
declare type IterationOf<N extends number> = `${N}` extends keyof IterationMap
	? IterationMap[`${N}`]
	: IterationMap["__"];
declare type Next<I extends Iteration> = IterationMap[I[3]];
declare type Prev<I extends Iteration> = IterationMap[I[2]];
declare type Pos<I extends Iteration> = I[0];
