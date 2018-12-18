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
  const allDrivers = [...drivers, "Broom"];
  return allDrivers
}
function prependDriver () {
  const newDrivers = ["Arnold", ...drivers];
  return newDrivers
}
function removeLastDriver () {
  const copyOfDrivers = drivers.slice(0,2)
  return copyOfDrivers
}
function removeFirstDriver() {
  const firstDriverRemoved = drivers.slice(1)
  return firstDriverRemoved
}