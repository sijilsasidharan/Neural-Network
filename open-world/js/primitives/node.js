class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(node) {
    return this.x === node.x && this.y === node.y;
  }

  draw(ctx, size = 18, color = "black") {
    const radius = size / 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
