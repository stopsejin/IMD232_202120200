let moverA;
let moverB;
let wind;
let gravity;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background(255);
  moverA = new MoverWithMass(width / 2, height / 2, 10);
  moverB = new MoverWithMass((2 * width) / 3, height / 2, 1);
  gravity = createVector(0, 0.1);
  wind = createVector(0.2, 0);
}
function draw() {
  background(255);

  moverA.applyForce(gravity);
  if (mouseIsPressed) {
    moverA.applyForce(wind);
  }
  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVectors();

  moverB.applyForce(gravity);
  if (mouseIsPressed) {
    moverB.applyForce(wind);
  }
  moverB.update();
  moverB.checkEdges();
  moverB.display();
  moverB.displayVectors();
}
