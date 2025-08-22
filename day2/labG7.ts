// TODO:
type Result<T> = { ok: true; value: T } | { ok: false; error: string }


function unwrapOr<T>(r: Result<T>, fallback: T): T {
  if (r.ok) {
    return r.value
  } else {
    return fallback
  }
}

console.log(unwrapOr({ ok: true, value: 10 }, 0))      // 10
console.log(unwrapOr({ ok: false, error: "x" }, 0));    // 0