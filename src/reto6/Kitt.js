import { Howl } from 'Howler';
import knightSong from './knight.mp3';
export default class Kitt {

  constructor() {
    this.prepareCells();
    this.prepareCruiseButtons();

    this.cells = Array.from(document.querySelectorAll('.cell'));
    this.audio = new Howl({
      src: [knightSong],
      loop: true
    });
    this.audioId = null;
    this.talkingId = null;
    this.intensity = {
      value: 1,
      fluctuate: () => [-1, 1, 0, 0][~~(Math.random() * 4)],     // Devuelve una variación (-1, 0 ó +1)
      change: function() {
        let v = this.value + this.fluctuate();
        if (v > 0 && v < 8)
          this.value = v;
      }
    };
  }

  // Crea 51 (17x3) celdas en el contenedor .voice (apagadas)
  prepareCells() {
    const voice = document.querySelector('.voice');
    voice.innerHTML = ''; // fix HMR Parcel [dev]

    for (let i = 0; i < 51; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.color = 0;
      voice.appendChild(cell);
    }
  }

  // Prepara conmutación de botones pulsables (Cruise) y activación de sonido en "Pursuit"
  prepareCruiseButtons() {
    const buttons = Array.from(document.querySelectorAll('.off'));
    const cruiseSelect = button => {
      buttons.forEach(e => e.classList.add('off'));
      button.classList.remove('off');
    };
    buttons.forEach(e => e.addEventListener('click', () => cruiseSelect(e)));
    buttons[2].addEventListener('click', () => this.talk());
  }

  // Pinta en la columna "col", con una intensidad "power"
  paintKitt(col, power = 1) {
    let item = 8 * 3 + col;

    for (let i = 8; i > power; i--) {
      this.cells[item-(i*3)].dataset.color = 0;
      this.cells[item+(i*3)].dataset.color = 0;
    }

    if (power < 1)
      return;

    for (let i = 0; i < power; i++) {
      this.cells[item-(i*3)].dataset.color = 3;
      this.cells[item+(i*3)].dataset.color = 3;
    }
    this.cells[item-(power*3)].dataset.color = 1;
    this.cells[item+(power*3)].dataset.color = 1;
  }

  // Pinta en las 3 columnas con una intensidad "power" (-1, 0, -1)
  renderKitt(power = 1) {
    this.paintKitt(0, power - 1);
    this.paintKitt(1, power);
    this.paintKitt(2, power - 1);
  }

  talk() {
    if (this.talkingId)
      return;

    this.audio.play();
    this.talkingId = setInterval(() => {
      this.intensity.change();
      this.renderKitt(this.intensity.value);
    }, 20);
  }
}