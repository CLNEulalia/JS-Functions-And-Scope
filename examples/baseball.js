teamName = "Giraffes"; // What scope is this?
var teamCity = "Sioux Falls"; // What scope is this?

function playBaseball() {
  console.log("From " + teamCity + "..."); // Does this work?
  console.log("Welcome the " + teamName + "!"); // Does this work?

  if (teamCity === "Sioux Falls") {
    const pitcherName = "Meg"; // What scope is this?
  }
  var batterName = "Perry"; // What scope is this?

  console.log('Batter from inside the function', batterName); // Does this work?
  console.log('Pitcher from inside the function', pitcherName); // Does this work?
}

playBaseball();

console.log(teamCity); // Does this work?
console.log(teamName); // Does this work?

console.log(batterName); // Does this work?
// console.log(pitcherName); // Does this work?