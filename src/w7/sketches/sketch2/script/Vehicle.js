class Vehicle {
  constructor(x, y, rad, speedMx, forceMx, color) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.mass = 1;
    this.rad = rad;
    this.speedMx = speedMx;
    this.forceMx = forceMx;
    this.color = color;
  }

  separate(others) {
    let cnt = 0;
    //  ㄴ count
    let steer = createVector(0, 0);
    //  others = vhhicle arry 전체
    others.forEach((eachOther) => {
      let distSq = this.pos.dist(eachOther.pos);
      if (distSq > 0 && dist <= (eachOther.rad + this.rad) ** 2) {
        let towardMeVEc = p5.Vector.sub(this.pos, eachOther.pos);
        towardMeVEc.setMag(1 / dist);
        steer.add(towardMeVEc);
        cnt++;
      }
    });
    if (cnt > 0) {
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  borderInfinite() {
    if (this.pos.x < -20) {
      this.pos.x = width + 20;
    } else if (this.pos.x > width + 20) {
      this.pos.x = -20;
    }
    if (this.pos.y < -20) {
      this.pos.y = height + 20;
    } else if (this.pos.y > height + 20) {
      this.pos.y = -20;
    }
  }
  //    ㄴ 애들 밖으로 나가면 반대편으로 다시 들어오게

  seek(target) {
    // target.sub(this.pos);
    let desired = p5.Vector.sub(target, this.pos);
    // desired.normalize();
    // desired.mult(this.speedMx);
    desired.setMag(this.speedMx);
    let steering = p5.Vector.sub(desired, this.vel);
    if (debug) {
      push();
      translate(this.pos.x, this.pos.y);
      noFill();
      stroke(127);
      line(0, 0, desired.x * 10, desired.y * 10);
      stroke(0, 0, 255);
      line(0, 0, steering.x * 10, steering.y * 10);
      pop();
    }
    steering.limit(this.forceMx);
    this.applyForce(steering);
  }

  applyForce(force) {
    // force.div(this.mass);
    let calcedAcc = p5.Vector.div(force, this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMxMx);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    let angle = this.vel.heading();
    push();
    translate(this.pos.x, this.pos.y);
    rotate(angle);
    noStroke();
    fill(this.color);
    beginShape();
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);
    pop();
  }
}
