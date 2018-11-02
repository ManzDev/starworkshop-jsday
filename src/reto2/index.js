const eye = {
  left: document.querySelector('.left.eye'),
  right: document.querySelector('.right.eye')
};

const ref = {
  x: eye.right.getBoundingClientRect().x,
  y: eye.right.getBoundingClientRect().y
};

const direction = v => (v > 10 ? 10 : (v < -10 ? -10 : v));

const updateMouse = event => {
  const mouse = { x: event.clientX, y: event.clientY };

  const x = direction(mouse.x - ref.x);
  const y = direction(mouse.y - ref.y);

  // change eye value
};

document.body.onmousemove = updateMouse;