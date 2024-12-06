function getNumber() {
  let givenNumber = prompt("Veuillez entrer un nombre");
  givenNumber = parseFloat(givenNumber); //parseFloat = chiffre à virgule accepté, parseInt = chiffre rond
  if (isNaN(givenNumber)) {
    alert("Le nombre n'est pas valide");
  } else {
    alert("le nombre que vous avez entré est : " + givenNumber);
  }
  return givenNumber;
}
getNumber();

function didIWin(givenNumber) {
  const number = 22;

  if (givenNumber < number) {
    alert("plus grand");
  } else if (givenNumber > number) {
    alert("plus petit");
  } else if (givenNumber === number) {
    alert("bravo ! Vous avez deviné le chiffre");
  } else {
    alert("entrée invalide");
  }
}

let chiffre = parseFloat(prompt("saisissez le chiffre à deviner : "));
didIWin(chiffre);
