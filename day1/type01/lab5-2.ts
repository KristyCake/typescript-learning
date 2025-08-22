// type Name = string
// type Age = number
// type Person = { name: Name, age: Age }
// // อันนี้มันคือเอามารวมกัน

// แต่ทีนี้จะเอามาเป็นคอนเซป intersec ก็ต้องงงง
type Name = { name: string };
type Age = { age: number };

type Person = Name | Age;

const employee: Person = {
  name: "Alice"
};

type Name2 = { name: string };
type Age2 = { age: number };

type Person2 = Name & Age;

const employee2: Person2 = {
  name: "Anna",
  age: 25
};

