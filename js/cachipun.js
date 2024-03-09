function IniciarCachipun(){

    let vecesJugar = parseInt(prompt("Cuantas veces deseas jugar?"))

    for (let i = 0; i < vecesJugar; i++) {
       
        let Usuariojugada = prompt("Elige tu jugada: Piedra, Papel, Tijera");
        let MaquinaJugada = JugadaMaquina();
        let resultado = determinarGanador(Usuariojugada,MaquinaJugada)
        mostrarResultado(resultado);

    } 
}

function JugadaMaquina() {

    let jugadasPosibles = ["piedra", "papel", "tijera"];
    return jugadasPosibles[Math.floor(Math.random() * jugadasPosibles.length)];
}

function determinarGanador(Usuariojugada, MaquinaJugada) {
    if (Usuariojugada === MaquinaJugada) {
        return "empate";
    } else if (
        (Usuariojugada === "piedra" && MaquinaJugada === "tijera") ||
        (Usuariojugada === "tijera" && MaquinaJugada === "papel") ||
        (Usuariojugada === "papel" && MaquinaJugada === "piedra")
    ) {
        return "usuario";
    } else {
        return "maquina";
    }
}


function mostrarResultado(resultado) {
    switch (resultado) {
        case "usuario":
            alert("Ganaste esta partida");
            break;
        case "maquina":
            alert("Perdiste contra la maquina");
            break;
        case "empate":
            alert("Es un empate");
            break;
        default:
            alert("Error!");
    }
}


IniciarCachipun();