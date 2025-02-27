class Polygon {
  constructor(nodes) {
    this.nodes = nodes;
    this.edges = [];
    for (let i = 1; i < this.nodes.length; i++) {
      this.edges.push(
        new Edge(this.nodes[i - 1], this.nodes[i % this.nodes.length])
      );
    }
  }

  static break(poly1, poly2) {
    const edge1 = poly1.edges;
    const edge2 = poly2.edges;
    const intersections = [];
    for (let i = 0; i < edge1.length; i++) {
      for (let j = 0; j < edge2.length; j++) {
        const touch = getIntersection(
          edge1[i].p1,
          edge1[i].p2,
          edge2[j].p1,
          edge2[j].p2
        );
        if (touch && touch.offset != 1 && touch.offset != 0) {
          const point = new Node(touch.x, touch.y);
          intersections.push(point);
          let aux = edge1[i].p2;
          edge1[i].p2 = point;
          edge1.splice(i + 1, 0, new Edge(point, aux));
          aux = edge2[j].p2;
          edge1[j].p2 = point;
          edge1.splice(j + 1, 0, new Edge(point, aux));
        }
      }
    }
    return intersections;
  }

  drawSegments(ctx) {
    for (const edge of this.edges) {
      edge.draw(ctx, { color: getRandomColor() });
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
