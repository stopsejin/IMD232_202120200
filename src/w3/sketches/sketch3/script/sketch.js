// let x;
// let y;
let position;
// let velocityX = 3;
// let velocityY = 0.5;
let velocity;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
  position = createVector(width / 2, height / 2);
  velocity = createVector(3, 5);
}
function draw() {
  background('white');
  position.add(velocity);
  ellipse(position.x, position.y, 50);

  if (position.x < 0 || position.x > width) {
    velocity.x *= -1;
  }

  if (position.y < 0 || position.y > height) {
    velocity.y *= -1;
  }
}

// position. x/y/z
