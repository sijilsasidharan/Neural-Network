class Polygon {
  constructor(nodes) {
    this.nodes = nodes;
    this.segments = [];
    for (let i = 0; i < this.nodes.length; i++) {
      this.segments.push(
        new Segment(this.nodes[i - 1], this.nodes[i % this.nodes.length])
      );
    }
  }

  draw(
    ctx,
    { stroke = "blue", lineWidth = 2, fill = "rgba(0, 0, 255, 0.1)" } = {}
  ) {
    ctx.beginPath();
    ctx.fillStyle = fill;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = stroke;
    ctx.moveTo(this.nodes[0].x, this.nodes[0].y);
    for (let i = 1; i < this.nodes.length; i++) {
      ctx.lineTo(this.nodes[i].x, this.nodes[i].y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}
