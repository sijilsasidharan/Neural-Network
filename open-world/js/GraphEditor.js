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
      if (e.button === 2) {
        if (this.hovered) {
          this.#removeNode(this.hovered);
        }
        return;
      }
      if (e.button === 0) {
        const mouse = new Node(e.offsetX, e.offsetY);
        // this.hovered = getNearestPoint(mouse, this.graph.nodes, 10);
        if (this.hovered) {
          this.selected = this.hovered;
          return;
        }
        this.graph.addNode(mouse);
        this.selected = mouse;
      }
    });
    this.canvas.addEventListener("mousemove", (e) => {
      const mouse = new Node(e.offsetX, e.offsetY);
      this.hovered = getNearestPoint(mouse, this.graph.nodes, 10);
    });
    this.canvas.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }

  #removeNode(node) {
    this.graph.removeNode(node);
    this.selected = null;
    this.hovered = null;
  }

  display() {
    this.graph.draw(this.ctx);
    if (this.hovered) {
      console.log(this.hovered);
      this.hovered.draw(this.ctx, { fill: true });
    }
    if (this.selected) {
      this.selected.draw(this.ctx, { outline: true });
    }
  }
}
