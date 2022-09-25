import "../";

type a = Tx.String.LastIndexOf<"coucou", "u">;

type b = Tx.Object.Merge<{ name: "coucou"}, { age: 22}>;

type c = Tx.Number.Add<50, 12>;

type d = Tx.Array.Asc<[ 21, 1 , -1, 0 , 23, -12, 22 ]>;

type e = Tx.Array.Flat<[1, 2, 3, [4, ["coucou"]]]>;

type f = Tx.Number.Multiply<-9, -9>;

type g = Tx.Number.IsEven<0>;

type h = Tx.Array.Average<[ 0, 10, 10, 13, 22, 24 ]>;

type i = Tx.Array.Filter<[ 0, 10, 10, 13, 22, 10 ], () => "10">;

