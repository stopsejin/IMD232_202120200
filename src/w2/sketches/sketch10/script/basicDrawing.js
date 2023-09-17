function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background(255);
  ellipse(100, 100, 50);
  rect(100, 100, 50);
  ellipse(200, 100, 50, 25);
  rect(200, 100, 50, 25);

  rectMode(CENTER);
  rect(300, 100, 50);
  ellipse(300, 100, 25, 50);

  fill('#ff224e');
  circle(100, 200, 50);
  colorMode(RGB);
  fill(58, 200, 150);
  rect(400, 100, 50);

  noStroke();

  rect(100, 300, 50, 50, 15, 5, 0, 5);

  stroke(0);
  stroke('black');
  line(300, 300, 300, 35031);

  strokeWeight(1);
  point(100, 100);
  point(110, 110);
}
