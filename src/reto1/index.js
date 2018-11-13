import tilt from 'vanilla-tilt';

const card = document.querySelector('.card');
const options = {};
// const options = {
//   reverse:                false,  // reverse the tilt direction
//   max:                    25,     // max tilt rotation (degrees)
//   perspective:            1000,   // Transform perspective, the lower the more extreme the tilt gets.
//   scale:                  1,      // 2 = 200%, 1.5 = 150%, etc..
//   speed:                  300,    // Speed of the enter/exit transition
//   transition:             true,   // Set a transition on enter/exit.
//   axis:                   null,   // What axis should be disabled. Can be X or Y.
//   reset:                  true,    // If the tilt effect has to be reset on exit.
//   easing:                 'cubic-bezier(.03,.98,.52,.99)',    // Easing on enter/exit.
//   glare:                  false,   // if it should have a "glare" effect
//   'max-glare':            0.35,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
//   'glare-prerender':      false,  // false = tilt creates the glare, otherwise, add .js-tilt-glare>.js-tilt-glare-inner
//   'mouse-event-element':  null    // css-selector or link to HTML-element what will be listen mouse events  
// };

tilt.init(card, options);