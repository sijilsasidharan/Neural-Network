function getNearestPoint(loc, points, threshold = Number.MAX_SAFE_INTEGER) {
  let minDist = Infinity;
  let nearest = null;
  for (const point of points) {
    const dist = distance(point, loc);
    if (dist < minDist && dist < threshold) {
      minDist = dist;
      nearest = point;
    }
  }
  return nearest;
}

const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

function add(p1, p2) {
  return new Node(p1.x + p2.x, p1.y + p2.y);
}

function substract(p1, p2) {
  return new Node(p1.x - p2.x, p1.y - p2.y);
}

function scale(p, s) {
  return new Node(p.x * s, p.y * s);
}
