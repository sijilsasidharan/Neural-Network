class GraphEditor {
  constructor(canvas, graph) {
    this.canvas = canvas;
    this.graph = graph;

    this.selected = null;
    this.hovered = null;

    this.ctx = this.canvas.getContext("2d");

    this.#addEventListeners();
  }

  #addEventListeners() {
    this.canvas.addEventListener("mousedown", (e) => {
      const mouse = new Node(e.offsetX, e.offsetY);
      this.hovered = getNearestNode(this.graph.nodes, mouse);
      if (this.hovered) {
        this.selected = this.hovered;
        return;
      }
      this.graph.addNode(mouse);
      this.selected = mouse;
    });
  }

  display() {
    this.graph.draw(this.ctx);
    if (this.selected) {
      this.selected.draw(this.ctx, { outline: true });
    }
  }
}
