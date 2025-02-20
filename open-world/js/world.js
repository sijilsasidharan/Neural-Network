class World {
  constructor(graph, roadWidth = 100, roadRoundness = 3) {
    this.graph = graph;
    this.roadWidth = roadWidth;
    this.roadRoundness = roadRoundness;

    this.envolop = [];
    this.generate();
  }

  generate() {
    this.envolop.length = 0;
    this.envolop = this.graph.edges.map((edge) => {
      return new Envelop(edge, this.roadWidth, this.roadRoundness);
    });
  }

  darw(ctx) {
    for (const env of this.envolop) {
      env.draw(ctx);
    }
    for (const int of this.envolop) {
      int.draw(ctx);
    }
  }
}
