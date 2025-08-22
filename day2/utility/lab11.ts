interface Employee {
  id: number
  name: string
  salary: number
  department: string
}

type PublicEmployee = Omit<Employee, "salary">

let emp: PublicEmployee = { id: 3, name: "Cake", department: "Dev" }

console.log(emp)