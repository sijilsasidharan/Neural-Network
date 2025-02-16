class Envelop {
  constructor(skeleton, width) {
    this.skeleton = skeleton;
    this.width = width;

    this.poly = this.#createPoly();
  }

  #createPoly() {
    const { p1, p2 } = this.skeleton;

    const radius = this.width / 2;
    const alpha = angle(subtract(p1, p2));

    // clock wise
    const alpha_cw = alpha + Math.PI / 2;
    // counter clock wise
    const alpha_ccw = alpha - Math.PI / 2;

    const p1_ccw = translate(p1, alpha_ccw, radius);
    const p2_ccw = translate(p2, alpha_ccw, radius);
    const p2_cw = translate(p2, alpha_cw, radius);
    const p1_cw = translate(p1, alpha_cw, radius);

    const points = [];
    const step = Math.PI / 10;

    for (let i = alpha_ccw; i <= alpha_cw; i += step) {
      points.push(translate(p1, i, radius));
    }

    for (let i = alpha_ccw; i <= alpha_cw; i += step) {
      points.push(translate(p2, Math.PI + i, radius));
    }

    // return new Polygon([p1_ccw, p2_ccw, p2_cw, p1_cw]);
    return new Polygon(points);
  }

  draw(ctx) {
    this.poly.draw(ctx);
  }
}
