class Envelop {
  constructor(skeleton, width, roundness = 10) {
    this.skeleton = skeleton;
    this.width = width;

    this.poly = this.#createPoly(width, roundness);
  }

  #createPoly(width, roundness) {
    const { p1, p2 } = this.skeleton;

    const radius = width / 2;
    const alpha = angle(subtract(p1, p2));

    // clock wise
    const alpha_cw = alpha + Math.PI / 2;
    // counter clock wise
    const alpha_ccw = alpha - Math.PI / 2;

    // const p1_ccw = translate(p1, alpha_ccw, radius);
    // const p2_ccw = translate(p2, alpha_ccw, radius);
    // const p2_cw = translate(p2, alpha_cw, radius);
    // const p1_cw = translate(p1, alpha_cw, radius);

    const points = [];
    const step = Math.PI / Math.max(1, roundness);

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
    this.poly.drawSegments(ctx);
  }
}
