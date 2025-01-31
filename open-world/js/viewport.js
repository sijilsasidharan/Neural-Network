class Viewport {
  constructor(canvas, graph) {
    this.canvas = canvas;
    this.graph = graph;

    this.ctx = this.canvas.getContext("2d");

    this.zoom = 1;
    this.offset = new Node(0, 0);

    this.drag = {
      active: false,
      start: new Node(0, 0),
      end: new Node(0, 0),
      offset: new Node(0, 0),
    };

    this.#addEventListeners();
  }

  getMouse(e) {
    return new Node(e.offsetX * this.zoom, e.offsetY * this.zoom);
  }

  #addEventListeners() {
    this.canvas.addEventListener(
      "mousewheel",
      this.#handleMouseWheel.bind(this)
    );
    this.canvas.addEventListener("mousedown", this.#handleMouseDown.bind(this));
  }

  #handleMouseDown(e) {
    if (e.button === 1) {
      this.drag.start = this.getMouse(e);
      this.drag.active = true;
    }
  }

  #handleMouseWheel(e) {
    const dir = Math.sign(e.deltaY);
    const step = 0.1;
    this.zoom += dir * step;
    this.zoom = Math.max(1, Math.min(5, this.zoom));
  }
}
