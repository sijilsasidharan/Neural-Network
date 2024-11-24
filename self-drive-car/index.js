const canvas = document.getElementById('carCanvas');
canvas.height = window.innerHeight;
canvas.width = 250;

const ctx = canvas.getContext('2d');
const road = new Road(canvas.width / 2, canvas.width * 0.9);
const car = new Car(road.getLaneCenter(1), 500, 50, 80);
car.draw(ctx); 

animate()

function animate() {
    car.update();
    canvas.height = window.innerHeight;
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
}
