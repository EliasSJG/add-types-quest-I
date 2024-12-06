export type User = {
  name: string;
  hobby: string[];
  age: number;
};

export type Dogs = {
  name: string;
  color: string;
};

export type Monsters = {
  name: string;
  age: number;
  tentacles: number;
  eyes: number;
  hasWings: boolean;
};

export const arr: User[] = [
  {
    name: "Stina",
    hobby: ["läsa böcker"],
    age: 67,
  },
  {
    name: "Lisa",
    hobby: ["åka skidor"],
    age: 26,
  },
  {
    name: "Mio",
    hobby: ["spela rollspel", "spela brädspel"],
    age: 22,
  },
  {
    name: "Olle",
    hobby: ["sportklättring", "vandra", "sticka", "virka"],
    age: 38,
  },
  {
    name: "Leo",
    hobby: ["matlagning", "bakning"],
    age: 17,
  },
];

export const dogs: Dogs[] = [
  { name: "Nisse", color: "brown" },
  { name: "Fiffi", color: "white" },
  { name: "Fluffe", color: "black" },
  { name: "Hoppe", color: "beige" },
  { name: "Pluto", color: "gray" },
  { name: "Winter", color: "gray" },
  { name: "Rolf", color: "brown" },
  { name: "Benny", color: "brown" },
  { name: "Krister", color: "brown" },
];

export const monsters: Monsters[] = [
  { name: "Florg", age: 1266, tentacles: 29, eyes: 666, hasWings: true },
  { name: "Smirch", age: 78, tentacles: 68, eyes: 2, hasWings: false },
  { name: "Gorge", age: 25, tentacles: 2, eyes: 2, hasWings: false },
  { name: "Fioliviargh", age: 478, tentacles: 6, eyes: 1, hasWings: true },
  { name: "Snorla", age: 42, tentacles: 9, eyes: 9456, hasWings: false },
  { name: "Oligarnaclech", age: 36, tentacles: 675, eyes: 148, hasWings: true },
  { name: "Milowarg", age: 78, tentacles: 2, eyes: 12, hasWings: false },
  { name: "Znawrl", age: 456, tentacles: 8, eyes: 6, hasWings: true },
  { name: "Welff", age: 6548, tentacles: 34, eyes: 4, hasWings: true },
  { name: "Ulf", age: 56, tentacles: 4, eyes: 2, hasWings: false },
  { name: "Ellorn", age: 423, tentacles: 2, eyes: 2, hasWings: true },
];
