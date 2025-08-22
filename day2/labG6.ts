// TODO:
function keySelectorMap<T>(items: T[], keySelector: (x: T) => string): Record<string, T> {
  // return items[]
}

keySelectorMap(
  [{ id: "a", v: 1 }, { id: "b", v: 2 }],
  x => x.id
);
// { a: {id:"a",v:1}, b: {id:"b",v:2} }

