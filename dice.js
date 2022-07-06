let arrayPics = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]
let refresh = document.getElementById('btn');
refresh.addEventListener("click", () => {
    let random1 = Math.floor(Math.random() * arrayPics.length);
    let random2 = Math.floor(Math.random() * arrayPics.length);
    let picking1 = arrayPics[random1];
    let picking2 = arrayPics[random2];
    let winer1 = document.getElementById('img1').setAttribute('src', picking1)
    let winer2 = document.getElementById('img2').setAttribute('src', picking2)

    if (random1 > random2) {
        document.getElementById("winner").innerHTML = "Horray!!! Player 1 wins";
        return winer1 + winer2

    } else if (random2 > random1) {
        document.getElementById("winner").innerHTML = "Horray!!! Player 2 wins";
        return winer1 + winer2

    } else {
        document.getElementById("winner").innerHTML = "This is a draw";
        return winer1 + winer2

    };
})