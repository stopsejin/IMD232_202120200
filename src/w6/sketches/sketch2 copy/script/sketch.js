// let particle;
let particleArray = [];
let gravity = 0;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);

  // particle = new Particle(width / 2, 20);
  gravity = createVector(0, 0.1);

  background(255);
}

function draw() {
  particleArray.push(new Particle(width / 2, 20));

  background(255);
  for (let a = 0; a < particleArray.length; a++) {
    particleArray[a].applyForce(gravity);
    particleArray[a].update();
    particleArray[a].display();
  }

  for (let a = particleArray.length - 1; a >= 0; a--) {
    if (particleArray[a].isDead()) {
      particleArray.splice(a, 1);
      // arry 죽은거를 없애고 위에서 새로 만들고 다시 없애고 그대로
    }
  }

  console.log(particleArray.length);
}
