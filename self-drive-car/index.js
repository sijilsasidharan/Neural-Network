const canvas = document.getElementById("carCanvas");
canvas.height = window.innerHeight;
canvas.width = 250;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9);
const car = new Car(road.getLaneCenter(1), 500, 50, 80, "KEY");
// car.draw(ctx);

const traffic = [new Car(road.getLaneCenter(1), -100, 50, 80, "DUMMY", 2)];

animate();

function animate() {
  for (let i = 0; i < traffic.length; i++) {
    traffic[i].update(road.borders, []);
  }
  car.update(road.borders, traffic);
  canvas.height = window.innerHeight;
  ctx.save();
  ctx.translate(0, -car.y + canvas.height * 0.7);
  road.draw(ctx);
  for (let i = 0; i < traffic.length; i++) {
    traffic[i].draw(ctx, "blue");
  }
  car.draw(ctx, "black");
  ctx.restore();
  requestAnimationFrame(animate);
}
