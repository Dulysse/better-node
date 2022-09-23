import "../";

type a = Tx.String.Reverse<"Hello world!">

type b = Tx.Object.Merge<{ name: "coucou"}, { age: 22}>

type c = Tx.Number.Add<10, 12>

type d = Tx.Array.Push<[1, 2, 3], 4>