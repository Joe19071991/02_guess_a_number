function getNumber() {
  let givenNumber = Number(prompt("saisir un nombre :"));
  return givenNumber;
}
let result = getNumber();

function didIWin(givenNumber) {
  if (givenNumber < 22) {
    alert("plus petit");
  } else if (givenNumber > 22) {
    alert("plus grand");
  } else if (givenNumber === 22) {
    alert("Bravo ! Vous avez deviné le nombre");
  }
}
didIWin(result);

function gamePlay() {}
