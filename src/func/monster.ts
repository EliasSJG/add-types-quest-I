//utöka så alla egenskaper för monstret skrivs ut

import { Monsters } from "../main";

export const prettyPrintMonster = (allMonsters: Monsters[]) => {
  for (let monster of allMonsters) {
    console.log(
      `Monster: ${monster.name}. Age ${monster.age}. Tentacles: ${monster.tentacles}. Eyes: ${monster.eyes}. Wings ${monster.hasWings}`
    );
  }
};

export const averageMonsterAge = (allMonsters: Monsters[]): number => {
  let allAges = 0;
  allMonsters.forEach((monster) => {
    allAges += monster.age;
  });
  return allAges / allMonsters.length;
};

export const averageNumberOfTentacles = (allMonsters: Monsters[]): number => {
  let allTentacles = 0;
  allMonsters.forEach((monster) => {
    allTentacles += monster.tentacles;
  });
  return allTentacles / allMonsters.length;
};

export const numberOfMonstersWithWings = (allMonsters: Monsters[]): number => {
  const wingsTrueOrFalse = true;
  let monsterWithWings = 0;
  allMonsters.forEach((monster) => {
    if (wingsTrueOrFalse === monster.hasWings) {
      monsterWithWings++;
    }
  });
  return monsterWithWings;
};

export const getAllNoWingedMonster = (allMonsters: Monsters[]) => {
  const wingsTrueOrFalse = true;
  const monstersWithNoWings: string[] = [];
  allMonsters.forEach((monster) => {
    if (!wingsTrueOrFalse === monster.hasWings) {
      monstersWithNoWings.push(monster.name);
    }
  });
  return monstersWithNoWings;
};
