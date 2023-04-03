export type TupleToUnion<T extends any[]> = keyof {
  [K in T[number]]
}