import "../";

type a = Tx.String.LastIndexOf<"coucou", "u">;
//   ^?
type b = Tx.Object.Merge<{ name: "coucou" }, { age: 22 }>;
//   ^?
type c = Tx.Number.Add<50, 12>;
//   ^?
type d = Tx.Array.Asc<[1, 2, 3, 4, 1]>;
//   ^?
type e = Tx.Array.Flat<[1, 2, 3, [4, ["coucou"]]]>;
//   ^?
type i = Tx.Array.Filter<[0, 10, 10, 13, 22, 10], () => 10>;
//   ^?
type j = Tx.Object.Object;
//   ^?
type k = Tx.Object.Omit<{ name?: "françois"; age: 22 }, "age">;
//   ^?
type l = Tx.Union.ToArray<"coucou" | "lol">;
//   ^?
type m = Tx.Array.ToUnion<l>;
//   ^?
type n = Tx.Any.NotEqual<"test", "test2">;
//   ^?
type o = Tx.String.Last<"coucou">;
//   ^?

type test = Tx.Array.Fill<4, "Uniite">;
//    ^?
