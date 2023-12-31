class Mover {
  constructor(x, y, mass) {
    this.mass = mass;
    this.radius = mass ** (1 / 2) * 8;
    this.position = createVector(x, y);
    this.velocity = createVector(1, 0);
    this.acceleration = createVector(0, 0.1);
    this.velocityVisualization = createVector(0, 0);
    this.accelerationVisualization = createVector(0, 0);
    this.accDisplay = createVector(0, 0);
  }

  applyForce(force) {
    let forceDividedByMass = p5.Vector.div(force, this.mass);
    this.acceleration.add(forceDividedByMass);
  }
  addAcc(accInput) {
    this.acceleration.add(accInput);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.velocityVisualization.set(this.velocity);
    this.velocityVisualization.mult(10);

    this.accelerationVisualization.set(this.acceleration);
    this.accelerationVisualization.mult(100);

    this.acceleration.mult(0);
    this.accDisplay.set(this.acceleration);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127, 127);
    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;

    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;

    ellipse(x, y, 66, 66);
  }

  displayVectors() {
    noFill();
    stroke('red');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.velocityVisualization.x,
      this.position.y + this.velocityVisualization.y
    );
    stroke('blue');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.accelerationVisualization.x,
      this.position.y + this.accelerationVisualization.y
    );
  }
}
