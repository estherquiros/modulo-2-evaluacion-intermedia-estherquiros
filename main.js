"use strict";

function getRandomNumber(max) {
  return 1 + parseInt(Math.random() * max);
}

const selector = document.querySelector(".js_selector");
const button = document.querySelector(".js_button");
const result = document.querySelector(".js_result");
const player = document.querySelector(".js_player");
const computer = document.querySelector(".js_computer");
const reset = document.querySelector(".js_button-reset");

let playerScore = 0;
let computerScore = 0;

button.addEventListener("click", (ev) => {
  ev.preventDefault();
  const selectedValue = selector.value;
  const randomNumber = getRandomNumber(9); // Generamos un número del 1 al 9
  let computerMove = "";
  let resultText = "";

  // si el jugador no selecciona nada salimos de la función
  if (selectedValue === "") {
    result.innerHTML = "Selecciona una opción para jugar";
    return;
  }

  if (randomNumber <= 3) {
    computerMove = "Piedra";
  } else if (randomNumber <= 6) {
    computerMove = "Papel";
  } else {
    computerMove = "Tijera";
  }

  if (selectedValue === computerMove) {
    resultText = "Empate";
  } else if (
    (selectedValue === "Piedra" && computerMove === "Tijera") ||
    (selectedValue === "Papel" && computerMove === "Piedra") ||
    (selectedValue === "Tijera" && computerMove === "Papel")
  ) {
    resultText = "¡Has ganado!";
    playerScore++;
  } else {
    resultText = "¡Has perdido!";
    computerScore++;
  }

  result.innerHTML = resultText;
  player.innerHTML = playerScore;
  computer.innerHTML = computerScore;

  console.log("Tu elección:", selectedValue);
  console.log("Ordenador:", computerMove);

  if (playerScore === 10 || computerScore === 10) {
    button.classList.add("hidden");
    reset.classList.remove("hidden");
  }

  if (playerScore === 10) {
    result.innerHTML = "¡Felicidades! ¡Has ganado el juego! 🎉";
  } else if (computerScore === 10) {
    result.innerHTML =
      "Lo siento, has perdido el juego. ¡Inténtalo de nuevo! 💪🏼";
  }
});
