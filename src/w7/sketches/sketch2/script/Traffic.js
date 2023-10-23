class Traffic {
  constructor() {
    this.vehicles = [];
    // arry
  }

  run() {
    this.vehicles.forEach((eachVehicle) => {
      let sepForce = eachVehicle.separate(this.vehicles);
      eachVehicle.applyForce(sepForce);
      eachVehicle.update();
      eachVehicle.borderInfinite();
      eachVehicle.display();
    });
    // ㄴ 각각한테 다 돌린다는 의미
  }

  addVehicle(x, y) {
    this.vehicles.push(
      new Vehicle(x, y, 8, 5, 0.1, color(random(360), 100, 50))
    );
  }
}
