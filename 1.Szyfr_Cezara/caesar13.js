const caesar13 = (input) => {
  const word = [...input];

  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  const bigAlphabet = [...'abcdefghijklmnopqrstuvwxyz'.toUpperCase()];

  const encryptedSentence = word.map((sign) => {
    const newIndex = (i) => (i + 13) % alphabet.length;

    const encrypt = (alph) =>
      sign.replace(sign, alph[newIndex(alph.indexOf(sign))]);

    const checkSmallLetter = alphabet.includes(sign);
    const checkBigLetter = bigAlphabet.includes(sign.toUpperCase());

    if (checkSmallLetter) return encrypt(alphabet);
    else if (checkBigLetter) return encrypt(bigAlphabet);
    return sign;
  });

  if (input === '') return 'Fill me with some text !';
  return `= ${encryptedSentence.join('')}`;
};

export default caesar13;
