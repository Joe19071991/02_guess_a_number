function getNumber() {
  const givenNumber = parseFloat(prompt("Veuillez saisir un chiffre"));
  if (isNaN(givenNumber)) {
    return null;
  }
  return givenNumber;
}

console.log("Le chiffre choisi est un chiffre valide ? " + getNumber());
