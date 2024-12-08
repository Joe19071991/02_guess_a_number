function getNumber() {
  const givenNumber = parseFloat(prompt("Veuillez saisir un chiffre"));
  if (isNaN(givenNumber)) {
    alert("Veuillez saisir un chiffre valide !");
    return null;
  }
  return givenNumber;
}
//console.log("Le chiffre choisi est un chiffre valide ? " + getNumber());

function didIWin(givenNumber) {
  const targetNumber = 22;
  if (givenNumber < targetNumber) {
    alert("Le chiffre à deviner est plus grand.");
    return false;
  } else if (givenNumber > targetNumber) {
    alert("Le chiffre à deviner est plus petit.");
    return false;
  }
  alert("Bravo ! Vous avez deviné le chiffre !");
  return true;
}

//console.log("Est-ce le bon chiffre à deviner ? => " + didIWin(67));
//console.log("Est-ce le bon chiffre à deviner ? => " + didIWin(8));
//console.log("Est-ce le bon chiffre à deviner ? => " + didIWin(22));

function gamePlay() {
  const targetNumber = 22;
  let goodNumberToGuess = false;
  while (!goodNumberToGuess) {
    const givenNumber = getNumber();
    if (givenNumber != null) {
      goodNumberToGuess = didIWin(givenNumber, targetNumber);
    }
  }
}
gamePlay();
