class Attractor {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.mass = 20;
    this.radius = 30;
  }

  attract(mover) {
    let force = p5.Vector.sub(this.position, mover.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 20);
    let strength = (G * this.mass * mover.mass) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  display() {
    strokeWeight(4);
    stroke(0);

    circle(mouseX, mouseY, this.radius * 2);
  }
}
