// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, string) {
    let newDrivers = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
  return newDrivers;
}


function fuzzyMatch(drivers, string){
  const lettersMatch = drivers.filter( driver => driver.charAt( 0 ) === string.charAt( 0 ) );
  return lettersMatch;
}


function matchName(drivers, string){
  return drivers.filter( driver => driver.name === string )
}