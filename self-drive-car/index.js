const canvas = document.getElementById('carCanvas');
canvas.height = window.innerHeight;
canvas.width = 250;

const ctx = canvas.getContext('2d');

const car = new Car(100, 500, 50, 80);
car.draw(ctx); 

animate()

function animate() {
    car.update();
    canvas.height = window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate);
}
