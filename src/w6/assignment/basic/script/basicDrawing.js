function setup() {
  setCanvasContainer('p5-canvas', 300, 300, true);
  background('white');
}

function draw() {
  background(200, 186, 168);
  fill(212, 212, 212);
  noStroke();
  rect(0, 700, 1000, 1000);
  fill(208, 210, 210);
  rect(600, 0, 400, 400);
  fill(240, 240, 240);
  rect(640, 0, 400, 360);
  fill(140, 160, 80);
  rect(680, 0, 400, 320);
  fill(238, 68, 50);
  rect(680, 0, 400, 160);
  fill(60, 35, 20);
  rect(820, 0, 400, 250);
  fill(65, 200, 0);
  circle(780, 0, 100, 200);
  fill(65, 200, 0);
  circle(900, 0, 100, 200);
  fill(65, 200, 0);
  circle(980, 0, 100, 200);
  fill(65, 200, 0);
  circle(840, 50, 100);
  fill(65, 200, 0);
  circle(840, 50, 100);
  fill(65, 200, 0);
  circle(900, 50, 100);
  fill(65, 200, 0);
  circle(950, 80, 80);

  fill('White');
  rect(0, 210, 380, 200);
  fill('lightblue');
  rect(0, 230, 360, 160);

  fill(110, 70, 40);
  rect(90, 550, 150, 300, 100, 100, 100, 50);
  fill(110, 70, 40);
  rect(90, 700, 280, 150, 100, 100, 100, 100);

  fill(110, 70, 40);
  rect(710, 550, 150, 300, 100, 100, 100, 50);
  fill(110, 70, 40);
  rect(600, 700, 260, 150, 100, 100, 100, 100);

  fill(200, 250, 230);
  rect(330, 580, 300, 50);

  fill(50, 35, 20);
  rect(450, 630, 70, 200);
  rect(410, 800, 150, 50, 8, 8, 8, 8);

  fill(255, 70, 40);
  rect(450, 550, 150, 30);
  fill(255, 78, 180);
  rect(430, 520, 150, 30);
  fill(130, 100, 70);
  rect(470, 490, 150, 30);
  fill(10, 10, 255);
  rect(455, 460, 150, 30);

  fill(60, 30, 20);
  rect(270, 0, 30, 250);

  fill(255, 255, 150);
  arc(289, 380, 350, 360, 3.6, 49.82, PI + QUARTER_PI, CHORD);
}
