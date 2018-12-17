// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver() {
  drivers.push("Ralph")
}
function destructivelyPrependDriver() {
  drivers.unshift("Bob")
}
function destructivelyRemoveLastDriver() {
  drivers.pop("Garfield")
}
function destructivelyRemoveFirstDriver() {
  drivers.shift("Milo")
}
function appendDriver () {
  const allDrivers = [...drivers, "Broom"]
  return allDrivers
}

function prependDriver () {
  const newDrivers = ["Broom",...drivers]
  return newDrivers
}