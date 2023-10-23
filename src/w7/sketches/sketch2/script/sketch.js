let traffic;
let vehicle;
let mVec;
let debug = true;

function setup() {
  setCanvasContainer('p5-canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100, 100);

  traffic = new Traffic();
  for (let n = 0; n < 20; n++) {
    traffic.addVehicle(random(width), random(height));
  }
  // ㄴ for 구문 처음에 20개 돌아다니게 하는 설정

  // colorMode(RGB, 255, 255, 255);
  background(0, 100, 100);
}

function draw() {
  background(0, 100, 100);
  traffic.run();
}

function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY);
}
