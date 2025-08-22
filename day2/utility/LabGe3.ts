function mergeWithId<T extends { id: number }, U>(base: T, extra: U): T & U {
  return { ...extra, ...base }
}

const base = { id: 101, name: "Item A" };
const extra = { price: 250, stock: 5 };

const merged = mergeWithId(base, extra);
// คาดหวัง type: { id: number; name: string; price: number; stock: number }
// ลองเข้าถึง merged.id, merged.price ให้ผ่าน type-check
// mergeWithId({ name: "No Id" }, extra); // ❌ ควร error

console.log(merged)