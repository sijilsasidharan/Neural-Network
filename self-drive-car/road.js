/**
 * Road class will draw road in the canvas with lanes
 */
class Road {
    constructor(x, width, lanes = 3) {
        this.x = x;
        this.width = width;
        this.lanes = lanes;

        this.left = this.x - this.width / 2;
        this.right = this.x + this.width / 2;

        const infinity = 1000000;
        this.top = -infinity;
        this.bottom = infinity;

        // road borders
        const topLeft = { x: this.left, y: this.top}
        const topRight = { x: this.right, y: this.top}
        const bottomLeft = { x: this.left, y: this.bottom}
        const bottomRight = { x: this.right, y: this.bottom}

        this.borders = [
            [topLeft, bottomLeft],
            [topRight, bottomRight]
        ]
    }

    getLaneCenter(laneIndex) {
        const laneWidth = this.width / this.lanes;
        return this.left + laneWidth / 2 + Math.min(laneIndex, this.lanes - 1) * laneWidth;
    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";

        for (let i = 0; i <= this.lanes; i ++) {
            const x = LERP(this.left, this.right, i / this.lanes);

            ctx.setLineDash([20, 20]);
            ctx.beginPath();
            ctx.moveTo(x, this.top)
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }
        ctx.setLineDash([]);

        this.borders.forEach(border => {
            ctx.beginPath();
            ctx.moveTo(border[0].x, border[0].y);
            ctx.lineTo(border[1].x, border[1].y);
            ctx.stroke();
        })

        // // left lane
        // ctx.beginPath();
        // ctx.moveTo(this.left, this.top)
        // ctx.lineTo(this.left, this.bottom);
        // ctx.stroke();

        // // right lane
        // ctx.beginPath();
        // ctx.moveTo(this.right, this.top)
        // ctx.lineTo(this.right, this.bottom);
        // ctx.stroke();
    }
}