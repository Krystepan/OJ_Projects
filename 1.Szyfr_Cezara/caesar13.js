const caesar13 = (input) => {
  const word = [...input.toLowerCase()];
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

  const newWord = word.map((letter) => {
    const indexOfLetter = alphabet.indexOf(letter);
    const newIndex = (indexOfLetter + 13) % alphabet.length;

    return letter.replace(letter, alphabet[newIndex].toUpperCase());
  });

  return newWord.join('');
};

export default caesar13;
