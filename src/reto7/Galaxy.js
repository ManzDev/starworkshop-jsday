export default class Galaxy {

  constructor() {
    this.MAX_STARS = 750;
    this.MAX_SPEED = 6;
    this.COLORS = ['#444', '#888', '#FFF'];

    this.canvas = document.querySelector('#galaxy');
    this.ctx = this.canvas.getContext('2d', { alpha: false });

    window.onresize = this.expandCanvas;
    this.expandCanvas();
    this.createStars();
  }

  expandCanvas() {
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;
  }

  clearScreen() {
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  createStars() {
    this.stars = [];
    for (let i=0; i < this.MAX_STARS; i++) {
      this.stars.push({
        x: ~~(Math.random() * this.canvas.width),
        y: ~~(Math.random() * this.canvas.height),
        speed: ~~(1 + Math.random() * this.MAX_SPEED),
        color: ~~(Math.random() * this.COLORS.length),
      });
    }
  }

  loop() {
    requestAnimationFrame(() => { this.loop(); }, this.canvas);
    this.update();
    this.render();
  }

  update() {
    for (let i=0; i < this.MAX_STARS; i++) {
      this.stars[i].x -= this.stars[i].speed;
      this.stars[i].x = (this.stars[i].x < 0) ? this.canvas.width : this.stars[i].x;
    }
  }

  render() {
    this.clearScreen();
    for (let i=0; i < this.MAX_STARS; i++) {
      var s = this.stars[i];
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = this.COLORS[this.stars[i].color];
      this.ctx.strokeRect(s.x, s.y, 1, 1);
    }
  }
}