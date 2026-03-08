//paso 1 
class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
    }
    puntajeR() {
        let puntaje = Math.floor(Math.random() * 100) + 1;
        console.log(`Jugador ${this.nombre} se le ha asignado el puntaje ${puntaje}`);
    }
}

let player1 = new Jugador('Kenneth');
let player2 = new Jugador('Luis');
let player3 = new Jugador('Abraham');
//paso 2
class Torneo {
    constructor(jugadores) {
        this.jugadores = jugadores;

    }
    iniciar(rondas) {
        for (let i = 0; i < rondas; i++) {
            console.log(`--Ronda${i + 1} --`)
            let jugador = this.jugadores.shift();

            jugador.puntajeR();
            this.jugadores.push(jugador);
        }
    }
}

let torneo = new Torneo([player1, player2, player3]);
torneo.iniciar(7);
//paso 3.
