class Envelop {
  constructor(skeleton, width) {
    this.skeleton = skeleton;
    this.width = width;

    this.poly = this.#createPoly();
  }

  #createPoly() {
    const { p1, p2 } = this.skeleton;

    const radius = this.width / 2;
    const alpha = Math.atan2(p2.y - p1.y, p2.x - p1.x);

    // clock wise
    const alpha_cw = alpha + Math.PI / 2;
    // counter clock wise
    const alpha_ccw = alpha + Math.PI / 2;

    return new Polygon(poly);
  }
}
