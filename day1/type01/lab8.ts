function formInput(input: string): string;
function formInput(input: number): string;

function formInput(input: string | number): string {
  return typeof input === "number" ? `Number: ${input}` :
    `String: ${input}`
}

console.log(formInput(123))
console.log(formInput("Hello"))