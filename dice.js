let arrayPics = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];
let refreshBtn = document.getElementById("btn");
refreshBtn.addEventListener("click", () => {
  let random1 = Math.floor(Math.random() * arrayPics.length);
  let random2 = Math.floor(Math.random() * arrayPics.length);
  let picking1 = arrayPics[random1];
  let picking2 = arrayPics[random2];
  let winner1 = document.getElementById("img1").setAttribute("src", picking1);
  let winner2 = document.getElementById("img2").setAttribute("src", picking2);
  let winner = document.getElementById("winner");

  if (random1 > random2) {
    winner.innerHTML = "Horray!!! Player 1 wins";
    return winner1 + winner2;
  } else if (random2 > random1) {
    winner.innerHTML = "Horray!!! Player 2 wins";
    return winner1 + winner2;
  } else {
    winner.innerHTML = "This is a draw";
    return winner1 + winner2;
  }
});
