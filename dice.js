let arrayPics = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png","images/dice5.png", "images/dice6.png",]
let random1 = Math.floor(Math.random() * arrayPics.length);
let random2 = Math.floor(Math.random() * arrayPics.length);
let picking1 = arrayPics[random1];
let picking2 = arrayPics[random2];

function diceY (){
            if (random1 > random2){
                document.getElementById("winner").innerHTML = "Horray!!! Player 1 wins";
                document.getElementById('img1').setAttribute('src', picking1)
                document.getElementById('img2').setAttribute('src', picking2)
        }else if(random1 < random2){
            document.getElementById("winner").innerHTML = "Horray!!! Player 2 wins";
                document.getElementById('img1').setAttribute('src', picking1)
                document.getElementById('img2').setAttribute('href', picking2)
            
        }else{
            document.getElementById("winner").innerHTML = "This is a draw";
                document.getElementById('img1').setAttribute('src', picking1)
                document.getElementById('img2').setAttribute('src', picking2)
        };     
}
