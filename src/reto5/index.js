import { Howl } from 'howler';
import timeSong from './time.mp3';

const box = document.querySelector('.box');
const audio = new Howl({
  src: [timeSong],
  autoplay: false,
  loop: true,
  seek: 54,
  volume: 0
});

let id;

const playMusic = () => {
  id = audio.play(id);
  audio.fade(0, 1, 2000, id);
};

const stopMusic = () => {
  audio.fade(1, 0, 2000, id);
  audio.onfade = audio.pause.bind(id);
};

box.addEventListener('mouseenter', playMusic);
box.addEventListener('mouseleave', stopMusic);
