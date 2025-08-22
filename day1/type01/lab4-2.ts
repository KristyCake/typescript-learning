interface Productt {
  id: number,
  name: string,
  price: number,
  tag: string[]
}

const dog: Productt[] = [{
  id: 2,
  name: "Daisy",
  price: 2000,
  tag: ["Cute", "Pets", "Good Girl"]
},
{
  id: 3,
  name: "Dazo",
  price: 20000,
  tag: ["Naughty", "Good Boy"]
}];

const cat: Productt = {
  id: 1,
  name: "Songpip",
  price: 0,
  tag: ["cat", "Cat cute"]
}

// console.log(cat)
console.log(cat.name)