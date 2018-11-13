const eye = {
  left: document.querySelector('.left.eye'),
  right: document.querySelector('.right.eye')
};

const ref = { 
  x: eye.right.getBoundingClientRect().x, 
  y: eye.right.getBoundingClientRect().y 
};

const direction = v => {
  return (v > 10 ? 10 : (v < -10 ? -10 : v));
};

const updateMouse = event => {
  const mouse = { x: event.clientX, y: event.clientY };
  
  const x = direction(mouse.x - ref.x);
  const y = direction(mouse.y - ref.y);

  eye.left.style.setProperty('--eye-x', `${x}px`);
  eye.left.style.setProperty('--eye-y', `${y}px`);
  eye.right.style.setProperty('--eye-x', `${x}px`);
  eye.right.style.setProperty('--eye-y', `${y}px`);
};

document.body.onmousemove = updateMouse;