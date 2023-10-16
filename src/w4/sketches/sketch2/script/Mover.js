class Mover {
  constructor(x, y, radius) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D;

    this.acc = createVector(0, 0);
    this.mass = radius ** (1 / 2);
    this.radius = radius;
  }

  applyForce(Force) {
    // Force.div(this.mass)
    let divedForce = p5.Vector.div(force, this.mass);
    this.acc.add(divedForce);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    // 이건 가속도를 초기화해야 외부의 힘을 제대로 받음
  }

  edgeBounce() {
    if (this.pos.x < 0 + this.radius) {
      let delta = this.pos.x - (0 + this.radius);

      this.pos.x += -2 * delta;
      this.vel.x *= -1;
    } else if (this.pos.x > width - 1 - this.radius) {
      let delta = this.pos.x - (whidth - 1 - this.radius);

      this.pos.x += -2 * delta;
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 + this.radius) {
      let delta = this.pos.y - (0 + this.radius);

      this.pos.y += -2 * delta;
      this.vel.y *= -1;
    } else if (this.pos.y > height - 1 - this.radius) {
      let delta = this.pos.y - (height - 1 - this.radius);

      this.pos.y += -2 * delta;
      this.vel.y *= -1;
    }
  }
  display() {
    noStroke();
    fill(0);
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }
}
