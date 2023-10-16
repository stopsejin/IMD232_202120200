let mover;
let attractor;
let showVector = false;
let x = 1;
let y = 1;
let easing = 0.02;
let wind;

let G = 1;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  mover = new Mover(300, 50, 2);
  attractor = new Attractor();
  moverB = new Mover((2 * width) / 3, height / 2, 1);
  wind = createVector(0.2, 0);
}

function draw() {
  background(255);

  let force = attractor.attract(mover);
  mover.applyForce(force);
  mover.update();
  mover.display();
  if (showVector) {
    mover.displayVectors();
  }

  attractor.display();
}
