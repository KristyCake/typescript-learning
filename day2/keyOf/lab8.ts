interface User {
  id: number;
  username: string;
  active: boolean;
}

const users: User[] = [
  { id: 1, username: "Alice", active: true },
  { id: 2, username: "Bob", active: false },
];

function getValue<T>(items: T[], key: keyof T): T[keyof T][] {
  return items.map(items => items[key])
}

console.log(getValue(users, "id"))
console.log(getValue(users, "username"))
console.log(getValue(users, "active"))