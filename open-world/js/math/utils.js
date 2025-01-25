function getNearestPointOnLine(loc, points) {
  let minDist = Infinity;
  let nearest = null;
  for (const point of points) {
    const dist = point.distance(loc);
    if (dist < minDist) {
      minDist = dist;
      nearest = point;
    }
  }
  return nearest;
}
