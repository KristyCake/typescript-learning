type Car = { wheel: number };
type Boat = { propeller: number };

function printVehicle(veh: Car | Boat) {
  if ("wheel" in veh) {
    console.log(`Car with ${veh.wheel} wheels `)
  } else {
    console.log(`Boat with ${veh.propeller} wheels`)
  }
}

printVehicle({ wheel: 4 })
printVehicle({ propeller: 2 })