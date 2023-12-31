class Attractor {
  constructor(x, y, mass) {
    this.mass = mass;
    this.pos = createVector(x, y);
  }

  Attractor(mover) {
    let dirVector = p5.Vector.sub(this.pos, mover.pos);
    let distance = dirVector.mag;
    let force = (this.mass * mover.mass) / distance ** 2;
    return dirVector.setMag(strength);
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 100);
  }
}
