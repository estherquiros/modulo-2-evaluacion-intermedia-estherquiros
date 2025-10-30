"use strict";

function getRandomNumber(max) {
  return 1 + parseInt(Math.random() * max);
}

const selector = document.querySelector(".js_selector");
const button = document.querySelector(".js_button");
const result = document.querySelector(".js_result");

button.addEventListener("click", (ev) => {
  ev.preventDefault();
  const selectedValue = selector.value;
  const randomNumber = getRandomNumber(9); // Generamos un número del 1 al 9
  let computerMove = "";
  let resultText = "";

  if (randomNumber <= 3) {
    computerMove = "piedra";
  } else if (randomNumber <= 6) {
    computerMove = "papel";
  } else {
    computerMove = "tijera";
  }

  if (selectedValue === computerMove) {
    resultText = "Empate";
  } else if (
    (selectedValue === "piedra" && computerMove === "tijera") ||
    (selectedValue === "papel" && computerMove === "piedra") ||
    (selectedValue === "tijera" && computerMove === "papel")
  ) {
    resultText = "¡Has ganado!";
  } else {
    resultText = "¡Has perdido!";
  }

  result.innerHTML = resultText;

  console.log("Tu elección:", selectedValue);
  console.log("Ordenador:", computerMove);
});
