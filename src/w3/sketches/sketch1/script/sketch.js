//위치
let x;
let y;
// let addX = 1;
// let addY = 1;
let velocityX = 3;
let velocityY = 0.5;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
  x = width / 2;
  y = height / 2;
}
function draw() {
  //1픽셀 계속 더해줌(위치값에 변환 수)
  x += velocityX;
  y += velocityY;
  background('white');
  ellipse(x, y, 50);

  // if (x < 0) {
  //   velocityX *= -1;
  // } else if (x > width) {
  //   velocityX *= -1;
  // }

  if (x < 0 || x > width) {
    velocityX *= -1;
  }

  if (y < 0 || y > height) {
    velocityY *= -1;
  }

  // if (y < 0) {
  //   velocityY *= -1;
  // } else if (y > height) {
  //   velocityY *= -1;
  // }
}
