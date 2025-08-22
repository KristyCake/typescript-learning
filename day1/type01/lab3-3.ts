const raw = ["10", 20, null, "30", undefined, "x", 40, true];

const rawType: string[] | number[] | null[] | boolean[] = ["10", "cccccc", "asdoiasoasopop", "true"];


const rawType2: (string | number | null | boolean | undefined)[] = ["10",
  20, null, "30", undefined, "x", 40, true];


const rawType3: (string | number)[] = [30, "30", 15, "cake"]