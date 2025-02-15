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

    const p1_ccw = translate(p1, alpha_ccw, radius);
    const p2_ccw = translate(p2, alpha_ccw, radius);
    const p2_cw = translate(p2, alpha_cw, radius);
    const p1_cw = translate(p1, alpha_cw, radius);

    return new Polygon(poly);
  }
}
