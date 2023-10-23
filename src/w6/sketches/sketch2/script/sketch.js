// let Particle = [];
//  ㄴ array 처리
let emitter;
let particle;
let g;

function setup() {
  setCanvasContainer('p5-canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100);

  particle = new Ball(width / 2, 0, 1, 0, 100, 50);

  emitter = new Emitter(width / 2, 0);

  g = createVector(0, 0.1);

  background(255);
}

function draw() {
  background(255);
  const scaledG = p5.Vector.mult(g, particle.mass);
  particle.applyForce(scaledG);
  particle.update();
  particle.display();

  emitter.createBall();
  emitter.applyGravity(g);
  emitter.update();
  emitter.display();
}
