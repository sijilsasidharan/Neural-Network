class Graph {
  constructor(nodes = [], edges = []) {
    this.nodes = nodes;
    this.edges = edges;
  }

  addNode(node) {
    this.nodes.push(node);
  }

  containesNode(node) {
    return this.nodes.find((n) => n.equals(node));
  }

  tryAddNode(node) {
    if (!this.containesNode(node)) {
      this.addNode(node);
      return true;
    }
    return false;
  }

  addEdge(edge) {
    this.edges.push(edge);
  }

  removeEdge(edge) {
    this.edges.splice(this.edges.indexOf(edge), 1);
  }

  containesEdge(edge) {
    return this.edges.find((e) => e.equals(edge));
  }

  tryAddEdge(edge) {
    if (!this.containesEdge(edge)) {
      this.addEdge(edge);
      return true;
    }
    return false;
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
