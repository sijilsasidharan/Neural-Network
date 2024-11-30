class Sensor {
    constructor(car) {
        this.car = car;
        this.rayCount = 3;
        this.rayLength = 100;
        this.raySpread = Math.PI / 4;

        this.rays = [];
    }

    update() {
        this.rays = [];
        for(let i = 0; i < this.rayCount; i++) {
            const rayAngle = LERP(
                this.raySpread/2,
                -this.raySpread/2,
                this.rayCount === 1 ? 0.5 : i/(this.rayCount - 1)
            ) + this.car.angle;
            const start = { x: this.car.x, y: this.car.y };
            const end = {
                x: this.car.x - Math.sin(rayAngle) * this.rayLength,
                y: this.car.y - Math.cos(rayAngle) * this.rayLength
            };
            this.rays.push([start, end]);
            console.log(rayAngle);
        }
        console.log(this.rays)
    }

    draw(ctx) {
        for (let i = 0; i < this.rays.length; i++) {
            ctx.beginPath();
            ctx.lineWidth=2;
            ctx.strokeStyle='yellow';
            ctx.moveTo(
                this.rays[i][0].x,
                this.rays[i][0].y
            );
            ctx.lineTo(
                this.rays[i][1].x,
                this.rays[i][1].y
            );
            ctx.stroke()
        }
    }
}