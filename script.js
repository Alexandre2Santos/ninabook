const botaoPlayPause = document.getElementById("play-pause");
const audio = document.getElementById("audio-capitulo");
let taTocando = false;

// teste no console
// console.log(botaoPlayPause);
// console.log(audio);
// audio.play();

function tocarFaixa() {
    console.log("cligou!")
    audio.play();
    taTocando = true;
    console.log("deu play!");
}

function pausarFaixa() {
    console.log("cligou!")
    audio.pause();
    taTocando = false;
    console.log("deu pause!");
}

function tocarOuPausar(){
    if (taTocando === true){
        pausarFaixa();  
    } else {
        tocarFaixa();
    }
}
botaoPlayPause.addEventListener("click", tocarOuPausar);