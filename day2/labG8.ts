type Generic<T> = number | string | object

function createStack<T>(item: T[]) {
  return {
    arr: [],
    push(item: Generic<T>) {
      return this.arr
    },
    pop() {
      return
    },
  }
}