class GraphEditor {
  constructor(viewport, graph) {
    this.viewport = viewport;
    this.canvas = this.viewport.canvas;
    this.graph = graph;

    this.selected = null;
    this.hovered = null;
    this.dragging = false;
    this.mouse = null;

    this.ctx = this.canvas.getContext("2d");

    this.#addEventListeners();
  }

  #addEventListeners() {
    this.canvas.addEventListener("mousedown", this.#handleMouseDown.bind(this));
    this.canvas.addEventListener("mousemove", this.#handleMouseMove.bind(this));
    this.canvas.addEventListener("contextmenu", (e) => e.preventDefault());
    this.canvas.addEventListener("mouseup", () => (this.dragging = false));
  }

  #handleMouseDown(e) {
    if (e.button === 2) {
      if (this.selected) {
        this.selected = null;
      } else if (this.hovered) {
        this.#removeNode(this.hovered);
      }
    }
    if (e.button === 0) {
      // this.mouse = this.viewport.getMouse(e);
      // this.hovered = getNearestPoint(mouse, this.graph.nodes, 10);
      if (this.hovered) {
        this.#select(this.hovered);
        this.selected = this.hovered;
        this.dragging = true;
        return;
      }
      this.graph.addNode(this.mouse);
      this.#select(this.mouse);
      this.selected = this.mouse;
    }
  }

  #handleMouseMove(e) {
    // this.mouse = new Node(e.offsetX, e.offsetY);
    this.mouse = this.viewport.getMouse(e, true);
    this.hovered = getNearestPoint(
      this.mouse,
      this.graph.nodes,
      10 * this.viewport.zoom
    );
    if (this.dragging) {
      this.selected.x = this.mouse.x;
      this.selected.y = this.mouse.y;
    }
  }

  #select(mouse) {
    if (this.selected) {
      this.graph.tryAddEdge(new Edge(this.selected, mouse));
    }
    this.selected = mouse;
  }

  #removeNode(node) {
    this.graph.removeNode(node);
    this.hovered = null;
    if (this.selected === node) {
      this.selected = null;
    }
  }

  display() {
    this.graph.draw(this.ctx);
    if (this.hovered) {
      this.hovered.draw(this.ctx, { fill: true });
    }
    if (this.selected) {
      const intent = this.hovered ? this.hovered : this.mouse;
      new Edge(this.selected, intent).draw(this.ctx, { dash: [3, 4] });
      this.selected.draw(this.ctx, { outline: true });
    }
  }
}
