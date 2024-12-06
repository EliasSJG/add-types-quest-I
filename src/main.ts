import "./styles.css";
import {
  averageAge,
  averageNumberOfHobbies,
  mostHobbies,
  oldestPerson,
  youngestPerson,
} from "./func/user-functions";
import {
  averageMonsterAge,
  averageNumberOfTentacles,
  getAllNoWingedMonster,
  numberOfMonstersWithWings,
  prettyPrintMonster,
  // prettyPrintMonster,
} from "./func/monster";
import { commonColor, numberOfColors, printDogs } from "./func/dog";
import { arr, dogs, Dogs, monsters, Monsters, User } from "./func/state";

// Fixa så funktionen gör det den ska
const printSum = (a: number, b: number): void => {
  console.log(a + b);
};

printSum(1, 2);
printSum(5, 12);

//USERS
console.log(`Vi har ${arr.length} stycken användare.`);
console.log(`Medelåldern på alla användare är ${averageAge(arr)}`);
console.log(
  `Medelantalet hobbies per användare är ${averageNumberOfHobbies(arr)}`
);
console.log(
  `Den personen med flest hobbies har ${mostHobbies(arr)} stycken hobbies`
);

console.log(
  `Den äldsta personen är ${oldestPerson(
    arr
  )} och den yngsta är ${youngestPerson(arr)}`
);
// skriv ut "Den personen med flest hobbies har Y stycken hobbies". Byt ut Y mot ett funktionsanrop. Skapa den funktionen. KLAR
// skriv ut "Den äldsta personen är A och den yngsta är B". Byt ut A och B mot funktionsanrop. Skapa de två funktionerna. KLAR

//DOGS
console.log(`Vi har ${dogs.length} stycken hundar.`);
console.log(`Hundarna har ${numberOfColors(dogs)} antal unika färger.`);
console.log(
  `Den vanligaste färgen bland alla hundar är: ${commonColor(dogs)}.`
);
printDogs(dogs);

// vi vill ha en pretty print som skriver ut alla färger som hundarna har och hur många hundar det finns av varje färg KLAR

//MONSTERS
console.log(`Vi har ${monsters.length} stycken monster.`);
console.log(`Medelåldern på alla monster är ${averageMonsterAge(monsters)}`);
console.log(
  `Medelantalet tentakler för alla monster är ${averageNumberOfTentacles(
    monsters
  )}`
);

// loopa igenom alla monster och skriv ut dem med prettyPrintMonster
prettyPrintMonster(monsters);

console.log(
  `Antalet monster som har vingar är ${numberOfMonstersWithWings(monsters)}`
);

const noWingedMonster = console.log(
  `Här är alla monster som inte har vingar: ${getAllNoWingedMonster(monsters)} `
);
console.log(noWingedMonster);
export type { User, Monsters, Dogs };
