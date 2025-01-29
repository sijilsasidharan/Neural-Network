class ViewPort {
  constructor(canvas, graph) {
    this.canvas = canvas;
    this.graph = graph;

    this.ctx = this.canvas.getContext("2d");

    this.#addEventListeners();
  }

  #addEventListeners() {
    this.canvas.addEventListener("mousewheel", (e) =>
      this.#handleMouseWheel(e).bind(this)
    );
  }

  #handleMouseWheel(e) {}
}
