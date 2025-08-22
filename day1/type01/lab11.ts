function crash(message: string): never {
  throw new Error("App crash" + message)
}

console.log("ทำงานมั้ย")
crash("Something went wrong Haha");
console.log("ทำงานมั้ย")