function introduce(name: string, age?: number, country: string = "Thailand") {
  return `Hi, My name is ${name} ${age ? `I'm ${age} years old` : ""} ${country}`
}

console.log(introduce("Alice"))
console.log(introduce("Bob", 30, "Japan"))
console.log(introduce("John", 40))