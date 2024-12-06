import { Dogs } from "../main";

export const numberOfColors = (allDogs: Dogs[]): number => {
  const specialColor: string[] = [];

  allDogs.forEach((dog) => {
    let found = false;
    for (let i = 0; i < specialColor.length; i++) {
      if (specialColor[i] === dog.color) {
        found = true;
        break;
      }
    }

    if (!found) {
      specialColor.push(dog.color);
    }
  });

  return specialColor.length;
};

const allColors = (allDogs: Dogs[]): { [key: string]: number } => {
  const colorColors: { [key: string]: number } = {};

  allDogs.forEach((dog) => {
    if (colorColors[dog.color]) {
      colorColors[dog.color]++;
    } else {
      colorColors[dog.color] = 1;
    }
  });
  return colorColors;
};

export const commonColor = (allDogs: Dogs[]): string => {
  const colorColors = allColors(allDogs);

  let mostCommonColor = "";
  let maxCount = 0;

  for (const color in colorColors) {
    if (colorColors[color] > maxCount) {
      mostCommonColor = color;
      maxCount = colorColors[color];
    }
  }

  return mostCommonColor;
};

export const printDogs = (allDogs: Dogs[]) => {
  const colorColors = allColors(allDogs);

  for (const color in colorColors) {
    console.log(` ${color.charAt(0) + color.slice(1)}: ${colorColors[color]} `);
  }
};
