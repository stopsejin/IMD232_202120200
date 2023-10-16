let ball;
let ball2;
let gravity;
let wind;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
  ball = new Mover(width / 2, 0, 50);
  ball2 = new Mover((2 * width) / 3, 0, 10);
  gravity = createVector(0, 0, 1);
  wind = createVector(-1, 0);
  att = new Attractor(widht / 2, height / 2, 100);
}
function draw() {
  // let g = p5.Vector.mult(gravity, ball.mass);
  // ball.applyForce(g);
  // let g2 = p5.Vector.mult(gravity, ball.mass);
  // ball2.applyForce(g2);
  // if (moiseIsPressde) {
  //   ball.applyForce(wind);
  // }
  let force1 = att.attract(ball);
  ball.applyForce(force1);
  let force2 = att.attract(ball2);
  ball.apply.Force(force2);
  ball.update();
  ball2.update();
  // ball.edgeBounce();
  // ball2.edgeBounce();
  background('white');
  fill('black');
  ball.display;
  ball2.display;
  att.display;
}
