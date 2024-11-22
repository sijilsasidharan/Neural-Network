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
    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";

        for (let i = 0; i <= this.lanes; i ++) {
            const x = LERP(this.left, this.right, i / this.lanes);
            if (i > 0 && i < this.lanes) {
                ctx.setLineDash([20, 20]);
            } else {
                ctx.setLineDash([]);
            }
            ctx.beginPath();
            ctx.moveTo(x, this.top)
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }

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