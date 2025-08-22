interface Book {
  title: string;
  year: number;
}

type BookKeys = keyof Book

const myBook: Book = { title: "TypeScript Basics", year: 2025 };

function printBookProperty(Book: Book, Key: BookKeys) {
  return Book[Key]
}

// ตัวอย่างการเรียกใช้ที่คาดหวัง
console.log(printBookProperty(myBook, "title")); // 👉 "TypeScript Basics"
console.log(printBookProperty(myBook, "year"));  // 👉 2025
// console.log(printBookProperty(myBook, "author")); // ❌ Error (ไม่มี property นี้)

