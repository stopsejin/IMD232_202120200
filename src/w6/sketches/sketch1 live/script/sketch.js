let particle;
let gravity = 0;

//  let pos[] array

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);

  particle = new Particle(width / 2, 20);
  gravity = createVector(0, 0.1);

  background(255);
}

function draw() {
  //   console.log(particle.isDead());
  if (particle.isDead()) {
    particle = new Particle(width / 2, 20);
  }
  particle.applyForce(gravity);
  particle.update();
  background(255);
  particle.display();
}

// 수명이 다하면 새로 만들고.
