/// <reference path="_array.d.ts" />

declare type IntersectOf<U extends any> = (
	U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
	? I
	: never;

declare type _UnionLast<U extends any> = IntersectOf<
	U extends unknown ? (x: U) => void : never
> extends (x: infer P) => void
	? P
	: never;
declare type _UnionExclude<U extends any, M extends any> = U extends M
	? never
	: U;

declare type _UnionToArray<
	U extends any,
	LN extends any[] = [],
	LastU = _UnionLast<U>
> = [LastU] extends [never]
	? LN
	: _UnionToArray<_UnionExclude<U, LastU>, _Insert<LN, 0, LastU>>;

declare type _UnionLength<U extends any> = L<_UnionToArray<U>>;
