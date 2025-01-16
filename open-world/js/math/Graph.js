class Graph {
  constructor(nodes = [], edges = []) {
    this.nodes = nodes;
    this.edges = edges;
  }

  draw(ctx) {
    for (const edge of this.edges) {
      edge.draw(ctx);
    }

    for (const node of this.nodes) {
      node.draw(ctx);
    }
  }
}
