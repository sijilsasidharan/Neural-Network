function getNearestPoint(loc, points) {
  let minDist = Infinity;
  let nearest = null;
  for (const point of points) {
    const dist = distance(point, loc);
    if (dist < minDist) {
      minDist = dist;
      nearest = point;
    }
  }
  return nearest;
}

const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
