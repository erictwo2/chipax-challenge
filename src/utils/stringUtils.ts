const countCharacters = (text: string[], charToFind: string): number => {
  return text
    .join('')
    .split('')
    .filter((char) => char.toLowerCase() === charToFind.toLowerCase()).length;
};

export { countCharacters };
