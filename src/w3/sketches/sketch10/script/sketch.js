let pos;
let vel;
function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('salmon');
  pos = createVector(random(width), random(height));
  //   vel = createVector(random(-5, 5), random(-5, 5));
  //  일정속도
  vel = createVector(1, 0);
  vel.rotate(random(TAU));
  vel.mult(5);
}

function draw() {
  background('salmon');
  update();
  checkEdges();
  display();
}

function update() {
  pos.add(vel);
}

function checkEdges() {
  if (pos.x < 0) {
    x = width;
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
