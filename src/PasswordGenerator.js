// Generates a random password given a character length and a conditions object
function generatePassword(length, conditions) {
  const { uppercase, lowercase, numbers, symbols } = conditions;
  const characters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^?&*()`,<>.:"/|][{}-_+=';
  let generatedPassword = "";
  let characterIndex;
  for (let i = 0; i < length; i++) {
    if (uppercase && lowercase && numbers && symbols) {
      characterIndex = Math.floor(Math.random() * characters.length);
    } else if (uppercase && lowercase && numbers) {
      characterIndex = Math.floor(Math.random() * 62);
    } else if (uppercase && lowercase) {
      characterIndex = Math.floor(Math.random() * 52);
    } else {
      characterIndex = Math.floor(Math.random() * 26);
    }
    const character = characters[characterIndex];
    generatedPassword += character;
  }
  return generatedPassword;
}

export default generatePassword;
