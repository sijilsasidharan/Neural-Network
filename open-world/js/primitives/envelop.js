class Envelop {
  constructor(skeleton, width) {
    this.skeleton = skeleton;
    this.width = width;

    this.poly = this.#createPoly();
  }

  #createPoly() {
    const poly = [];

    for (let i = 0; i < this.skeleton.length; i++) {
      const v1 = this.skeleton[i];
      const v2 = this.skeleton[(i + 1) % this.skeleton.length];

      const dx = v2.x - v1.x;
      const dy = v2.y - v1.y;
      const len = Math.sqrt(dx * dx + dy * dy);

      const nx = dy / len;
      const ny = -dx / len;

      const p1 = {
        x: v1.x + nx * this.width,
        y: v1.y + ny * this.width,
      };

      const p2 = {
        x: v2.x + nx * this.width,
        y: v2.y + ny * this.width,
      };

      poly.push(p1);
      poly.push(p2);
    }

    return new Polygon(poly);
  }
}
