class World {
  constructor(graph, roadWidth = 100, roadRoundness = 3) {
    this.graph = graph;
    this.roadWidth = roadWidth;
    this.roadRoundness = roadRoundness;

    this.intersections = [];
    this.envolop = [];
    this.generate();
  }

  generate() {
    this.envolop.length = 0;
    this.envolop = this.graph.edges.map((edge) => {
      return new Envelop(edge, this.roadWidth, this.roadRoundness);
    });

    // this.intersections = Polygon.break(
    //   this.envolop[0].poly,
    //   this.envolop[1].poly
    // );
  }

  draw(ctx) {
    for (const env of this.envolop) {
      env.draw(ctx);
    }
    for (const int of this.intersections) {
      int.draw(ctx);
    }
  }
}
