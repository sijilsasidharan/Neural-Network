class GraphEditor {
  constructor(canvas, graph) {
    this.canvas = canvas;
    this.graph = graph;

    this.ctx = this.canvas.getContext("2d");

    this.#addEventListeners();
  }

  #addEventListeners() {
    this.canvas.addEventListener("mousedown", (e) => {
      const mouse = new Node(e.offsetX, e.offsetY);
      this.graph.addNode(mouse);
    });
  }

  display() {
    this.graph.draw(this.ctx);
  }
}
