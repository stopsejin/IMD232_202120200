let pos;
let vel;
let acc;
let cvToMv;
let radius = 50;

let centerToMouse;
let normalizedVector;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('salmon');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
  acc.mult(0.1);
  cvToMv = createVector();

  center = createVector(ellipse / 2, height / 2);
  mouse = createVector();
}

function draw() {
  background('salmon');
  update();
  checkEdges();
  display();

  stroke('fuchsia');
  line(0, 0, mouseX, mouseY);

  cvToMv = p5.Vector.sub(mv, cv);
  stroke('lime');
  translate(cv.x, cv.y);
  line(0, 0, cvToMv.x, cvToMv.y);

  cvToMv.mult(0.5);
  stroke('black');
  strokeWeight(4);
  line(0, 0, cvToMv.x, cvToMv.y);
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
  ellipse(mouseX, mouseY, 2 * radius);
}
