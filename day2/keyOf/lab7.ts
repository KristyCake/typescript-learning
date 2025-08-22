interface Car {
  brand: string;
  year: number;
  electric: boolean;
}

type CarBrand = Car["brand"]
type CarYear = Car["year"]
type CarElectric = Car["electric"]

const a: CarBrand = "1"
const b: CarElectric = true