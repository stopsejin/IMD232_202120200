let mover;
let wind;
let gravity;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background(255);
  mover = new MoverNoMass(width / 2, height / 2, 50);
  gravity = createVector(0, 0.1);
  wind = createVector(0.5, 0);
}
function draw() {
  background(255);

  mover.addAcc(gravity);
  if (mouseIsPressed) {
    mover.addAcc(wind);
  }
  mover.update();
  mover.checkEdges();
  mover.display();
  mover.displayVectors();
}
