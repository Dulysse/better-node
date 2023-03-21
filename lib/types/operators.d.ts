declare type _Satisfy<A1 extends any, A2 extends any> = A1 extends A2 ? A1 : A2;

declare type _Not<B extends boolean> = _And<
	B extends boolean ? true : false,
	boolean extends B ? true : false
> extends true
	? boolean
	: B extends true
	? false
	: true;

declare type _Equal<T1, T2> = T1 extends T2
	? T2 extends T1
		? true
		: false
	: false;

declare type _NotEqual<T1, T2> = _Not<_Equal<T1, T2>>;

declare type _Or<B1 extends boolean, B2 extends boolean> = {
	false: {
		false: false;
		true: true;
	};
	true: {
		false: true;
		true: true;
	};
}[`${B1}`][`${B2}`];

declare type _And<B1 extends boolean, B2 extends boolean> = {
	false: {
		false: false;
		true: false;
	};
	true: {
		false: false;
		true: true;
	};
}[`${B1}`][`${B2}`];
