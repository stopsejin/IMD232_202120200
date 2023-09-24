let pos;
let vel;
let acc;
let radius = 50;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
  acc.mult(0.1);
}

function draw() {
  background('white');
  update();
  checkEdges();
  display();

  let mouse = createVector(mouseX, mouseY);
  let center = createVector(ellipse(radius));
  strokeWeight(4);
  stroke(200);
  line(pos.x, pos.y, mouse.x, mouse.y);
  mouse.sub(center);
  stroke(0);
  translate(radius / 2, radius / 2);
  line(pos.x, pos.y, mouse.x, mouse.y);
  line(pos.x, pos.y, random(width), random(height));
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.5);
  vel.add(acc);
  vel.limit(2);
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
  fill('black');
  ellipse(pos.x, pos.y, radius);
}
