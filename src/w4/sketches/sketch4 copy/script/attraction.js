let mover;
let attractor;
let showVector = false;
let angel = (0, 0);

let G = 1;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  mover = new Mover(300, 50, 2);
  attractor = new Attractor();
}

function draw() {
  background(255);
  let mouse = createVector(mouseX, mouseY);

  let force = attractor.attract(mover);
  mover.applyForce(force);
  mover.update();
  mover.display();
  if (showVector) {
    mover.displayVectors();
  }

  attractor.display();

  function mouseMoved() {
    if (!isMouseInsideCanvas()) return;
    attractor.handleHover(mouseX, mouseY);
  }
}
