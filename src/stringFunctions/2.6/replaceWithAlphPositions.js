export const replaceWithAlphPositions = (string) =>
    string
    .replace(/[^A-zА-я]/g, '')
    .toLowerCase()
    .split('')
    .map((letter) => letter.charCodeAt(0) - 96)
    .join(' ');