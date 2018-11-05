import tippy from 'tippy.js/dist/tippy.all';
import snarkdown from 'snarkdown';

const a = Array.from(document.querySelectorAll('a.closed'));
const retos = [
  {
    title: 'CSS Card (Very Easy)',
    tip: '* CSS Nested\n* CSS Custom Properties\n* REM units\n* CSS Colors\n* JS Tilt.js (Optional)'
  },
  {
    title: 'Penguin Eye (Easy)',
    tip: '* Flexbox CSS\n* CSS Calc\n* CSS Transitions\n* JS set Custom Properties'
  },
  {
    title: '3 of Hearts (Easy)',
    tip: '* CSS Before/After\n* CSS Animations\n* 3D Transforms'
  },
  {
    title: 'JS Guy (Easy)',
    tip: '* SVG Images\n* Font Faces\n* CSS Animations\n* CSS Transforms\n* JS Audio Howler.js'
  },
  {
    title: 'Pink Floyd (Medium)',
    tip: '* CSS Shadows\n* CSS Selector +\n* SVG (Simple)\n* CSS Position\n* CSS Transforms\n* JS Audio Howler.js (Optional)'
  },
  {
    title: 'Knight Rider (Medium)',
    tip: '* CSS Grid\n* CSS Flexbox\n* JS Audio Howler.js (Optional)\n* JS setTimeout\n* Algorithm (Hard)'
  },
  {
    title: 'VHS Star Wars (Hard)',
    tip: '* CSS Shadows\n* CSS Animations\n* CSS After/Before\n* MP3 Native audio\n* Canvas'
  },
  {
    title: 'Super Mario Bros (Hard)',
    tip: '* CSS Shadows\n* CSS Position\n* Font face\n* Overflow\n* CSS Transforms\n* CSS Shape'
  }
];

tippy.setDefaults({
  arrow: true,
  placement: 'right'
});

a.forEach((a,i) => {

  tippy(a, {
    content: retos[i].title + `<img src="./reto${i+1}.png">` + snarkdown(retos[i].tip)
  });

});