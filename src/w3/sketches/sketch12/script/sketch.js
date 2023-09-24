let pos;
let vel;
let acc;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('salmon');
  random(width), random(height);
  pos = createVector();
  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
  acc.mult(0.1);
}

function draw() {
  background('salmon');
  update();
  checkEdges();
  display();
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(1);
  vel.add(acc);
  vel.limit(10);
  pos.add(vel);
}

function checkEdges() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}

function display() {
  noStroke();
  fill('consilk');
  ellipse(pos.x, pos.y, 50);
}
