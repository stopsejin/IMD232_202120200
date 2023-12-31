let pend;
let gravity;

function setup() {
  setCanvasContainer('p5-canvas', 2, 1, true);

  pend = new Pendulum(width / 2, 10, height / 2, (TAU / 360) * 30, 50);
  gravity = createVector(0, 1);

  background(255);
}

function draw() {
  pend.applyForce(gravity);
  pend.update();

  background(255);
  pend.display();
}

function mouseMoved() {
  pend.mouseMoved(mouseX, mouseY);
}
function mousePressed() {
  pend.mousePressed(mouseX, mouseY);
}
function mouseDragged() {
  pend.mouseDragged(mouseX, mouseY);
}
function mouseReleased() {
  pend.mouseReleased();
}
