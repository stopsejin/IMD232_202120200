//위치
// let x;
// let y;
let pos;
// let velocityX = 3;
// let velocityY = 0.5;
let vel = [3, 5];

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
  pos = [width / 2, height / 2];
}
function draw() {
  //   x += velocityX;
  //   y += velocityY;
  background('white');
  pos[0] += vel[0];
  pos[1] += vel[1];
  ellipse(pos[0], pos[1], 50);
  //   ellipse(x, y, 50);
  //   if (x < 0 || x > width) {
  // velocityX *= -1;
  //   }
  //   if (y < 0 || y > height) {
  // velocityY *= -1;
  //   }
  if (pos[0] < 0 || pos[0] > width) {
    vel[0] *= -1;
  }
  if (pos[1] < 0 || pos[1] > height) {
    vel[1] *= -1;
  }
}
