class Node {
  constructor(x, y) {
    console.log(x, y);
    this.x = x;
    this.y = y;
  }

  equals(node) {
    return this.x === node.x && this.y === node.y;
  }

  draw(
    ctx,
    { size = 18, color = "black", outline = false, fill = false } = {}
  ) {
    const radius = size / 2;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
    ctx.fill();
    if (outline) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "yellow";
      ctx.arc(this.x, this.y, radius * 0.6, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (fill) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, radius * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.fill();
    }
  }
}
