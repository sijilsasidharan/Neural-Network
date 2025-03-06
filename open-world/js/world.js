class World {
  constructor(graph, roadWidth = 100, roadRoundness = 10) {
    this.graph = graph;
    this.roadWidth = roadWidth;
    this.roadRoundness = roadRoundness;

    this.intersections = [];
    this.envolop = [];
    this.roadBoarders = [];
    this.generate();
  }

  generate() {
    this.envolop.length = 0;
    this.envolop = this.graph.edges.map((edge) => {
      return new Envelop(edge, this.roadWidth, this.roadRoundness);
    });

    this.intersections = Polygon.break(
      this.envolop[0].poly,
      this.envolop[1].poly
    );
    this.roadBoarders = Polygon.union(this.envolop.map((env) => env.poly));
  }

  draw(ctx) {
    for (const env of this.envolop) {
      env.draw(ctx, { fill: "#BBB", stroke: "#BBB", lineWidth: 15 });
    }
    for (const int of this.intersections) {
      int.draw(ctx, { color: "red", size: 6 });
    }
    for (const road of this.roadBoarders) {
      road.draw(ctx, { color: "white", size: 4 });
    }
  }
}
