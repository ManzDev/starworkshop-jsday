import thugSong from './thug-life.mp3';
import { Howl } from 'howler';

const audio = new Howl({
  src: [thugSong],
  loop: true,
  volume: 0.5
});

let id;

const jsGuy = document.querySelector('.js-guy');
const goAnimation = () => {
  jsGuy.classList.add('animation');
  jsGuy.querySelector('.sunglasses').classList.remove('off');
  id = audio.play(id);
};

jsGuy.addEventListener('click', goAnimation);