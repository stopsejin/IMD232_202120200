let p = {
  add: function (otherVector) {
    this.x += otherVector.x;
    this.x += otherVector.y;
  },
};
let v = {
  x: 3,
  y: 5,
};

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
  p.x = width / 2;
  p.y = height / 2;
}
function draw() {
  background('white');
  p.x += v.x;
  p.y += v.y;

  ellipse(p.x, p.y, 50);

  if (p.x < 0 || p.x > width) {
    v.x *= -1;
  }

  if (p.y < 0 || p.y > height) {
    v.y *= -1;
  }
}
