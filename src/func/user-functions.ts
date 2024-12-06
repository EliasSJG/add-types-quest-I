import { User } from "../main";

export const averageAge = (allUsers: User[]): number => {
  let allAges = 0;
  allUsers.forEach((u) => {
    allAges += u.age;
  });
  return allAges / allUsers.length;
};

export const averageNumberOfHobbies = (allUsers: User[]): number => {
  let AllHobbies = 0;
  allUsers.forEach((u) => {
    AllHobbies += u.hobby.length;
  });
  return AllHobbies / allUsers.length;
};

export const mostHobbies = (allUsers: User[]): number => {
  let mostHobbiesvar = allUsers[0];
  for (let i = 1; i < allUsers.length; i++) {
    if (allUsers[i].hobby.length > mostHobbiesvar.hobby.length) {
      mostHobbiesvar = allUsers[i];
    }
  }
  return mostHobbiesvar.hobby.length;
};

export const oldestPerson = (allUsers: User[]): string => {
  let oldestPersonVar = allUsers[0];
  for (let i = 1; i < allUsers.length; i++) {
    if (allUsers[i].age > oldestPersonVar.age) {
      oldestPersonVar = allUsers[i];
    }
  }
  return oldestPersonVar.name;
};

export const youngestPerson = (allUsers: User[]): string => {
  let youngestPersonVar = allUsers[0];
  for (let i = 1; i < allUsers.length; i++) {
    if (allUsers[i].age < youngestPersonVar.age) {
      youngestPersonVar = allUsers[i];
    }
  }
  return youngestPersonVar.name;
};
