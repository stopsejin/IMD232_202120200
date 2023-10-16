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

  mover = new Mover(width / 2, height / 2, 50);
  attractor = new Attractor();

  wind = createVector(0.5, 0);
}

function draw() {
  background(255);
  mover.addAcc(G);

  mover.addAcc(wind);
  if (mouseIsPressed) {
    mover.addAcc(wind);
  }

  let force = attractor.attract(mover);
  mover.applyForce(force);
  mover.update();
  mover.display();
  if (showVector) {
    mover.displayVectors();
  }

  attractor.display();

  mover.applyForce(wind);
}
