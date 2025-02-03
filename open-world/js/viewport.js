class Viewport {
  constructor(canvas, graph) {
    this.canvas = canvas;
    this.graph = graph;

    this.ctx = this.canvas.getContext("2d");

    this.zoom = 1;
    this.center = new Node(canvas.width / 2, canvas.height / 2);
    // this.offset = new Node(0, 0);
    this.offset = scale(this.center, -1);

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

  getOffset(e) {
    return add(this.offset, this.drag.offset);
  }

  #addEventListeners() {
    this.canvas.addEventListener(
      "mousewheel",
      this.#handleMouseWheel.bind(this)
    );
    this.canvas.addEventListener("mousedown", this.#handleMouseDown.bind(this));
    this.canvas.addEventListener("mousemove", this.#handleMouseMove.bind(this));
    this.canvas.addEventListener("mouseup", this.#handleMouseUp.bind(this));
  }

  #handleMouseDown(e) {
    if (e.button === 1) {
      this.drag.start = this.getMouse(e);
      this.drag.active = true;
    }
  }

  #handleMouseMove(e) {
    if (this.drag.active) {
      this.drag.end = this.getMouse(e);
      this.drag.offset = substract(this.drag.end, this.drag.start);
    }
  }

  #handleMouseUp(e) {
    if (this.drag.active) {
      this.offset = add(this.offset, this.drag.offset);

      this.drag = {
        active: false,
        start: new Node(0, 0),
        end: new Node(0, 0),
        offset: new Node(0, 0),
      };
    }
  }

  #handleMouseWheel(e) {
    const dir = Math.sign(e.deltaY);
    const step = 0.1;
    this.zoom += dir * step;
    this.zoom = Math.max(1, Math.min(5, this.zoom));
  }
}
