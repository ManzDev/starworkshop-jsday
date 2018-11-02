import swSong from './imperial-8bit-by-crig.mp3';
import Galaxy from './Galaxy.js';

// Music
const music = new Audio(swSong);
const label = document.querySelector('.label');
label.addEventListener('click', () => music.play());

const galaxy = new Galaxy();
galaxy.loop();