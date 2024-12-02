class Sensor {
    constructor(car) {
        // Car object where sensor should be added
        this.car = car;

        // Number of rays the sensor should have
        this.rayCount = 3;

        // Length of rays
        this.rayLength = 100;

        // how wide rays should be spread
        this.raySpread = Math.PI / 4;

        // list of rays which hold start and end position of rays
        // eg:- [[{x: 0, y: 0}, { x: 10, y: 10 }]]
        this.rays = [];

        // if there is a boarder or not. if there, How far is it?
        this.readings = []
    }

    update(roadBorders) {
        this.#castRays();
        this.readings = [];
        for (let i = 0; i < this.rays.length; i++) {
            this.readings.push(
                this.#getReadings(this.rays[i], roadBorders)
            );
        }

        // console.log(this.readings)

    }

    #getReadings(ray, roadBoarders) {
        let touches = [];
        for (let i = 0; i < roadBoarders.length; i++) {
            const touch = getIntersection(
                ray[0],
                ray[1],
                roadBoarders[i][0],
                roadBoarders[i][1]
            );
            console.log(touch)
            if (touch) {
                touches.push(touches);
            }
        }

        if (touches.length === 0) {
            return null;
        } else {
            const offsets = touches.map(touch => touch.offset);
            const minOffset = Math.min(...offsets);
            return touches.find(touch => touch.offset = minOffset)
        }
    }

    #castRays() {
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
        }

    }

    draw(ctx) {
        for (let i = 0; i < this.rays.length; i++) {
            let end = this.rays[i][1];
            // if there is a reading, end should be the reading
            if (this.readings[i]) {
                console.log(this.readings[i])
                end = this.readings[i]
            }
            ctx.beginPath();
            ctx.lineWidth=2;
            ctx.strokeStyle='yellow';
            ctx.moveTo(
                this.rays[i][0].x,
                this.rays[i][0].y
            );
            ctx.lineTo(
                // this.rays[i][1].x,
                // this.rays[i][1].y
                end.x,
                end.y
            );
            ctx.stroke()
        }
    }
}