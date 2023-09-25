let pos;
let vel;
let acc;
let radius = 50;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
  pos = createVector(random(width / 2), random(height / 2));
  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
  acc.mult(0.001);
}

function draw() {
  background('white');
  update();
  checkEdges();
  mouse = createVector(mouseX, mouseY);
  vis = p5.Vector.sub(mouse, pos);
  stroke('black');
  strokeWeight(2);
  line(pos.x, pos.y, mouse.x, mouse.y);
  display();
  displayAcc();
  displayVel();
}

function update() {
  acc = p5.Vector.random2D();

  acc.mult(0.1);
  vel.add(acc);
  vel.limit();
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
  ellipse(pos.x, pos.y, 50);
}

function displayAcc() {
  stroke('red');
  line(pos.x, pos.y, pos.x + acc.x * 800, pos.y + acc.y * 800);
}

function displayVel() {
  stroke('blue');
  line(pos.x, pos.y, pos.x + vel.x * 80, pos.y + vel.y * 80);
}
