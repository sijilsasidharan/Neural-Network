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

function subtract(p1, p2) {
  return new Node(p1.x - p2.x, p1.y - p2.y);
}

function scale(p, s) {
  return new Node(p.x * s, p.y * s);
}

function translate(loc, angle, offset) {
  return new Node(
    loc.x + offset * Math.cos(angle),
    loc.y + offset * Math.sin(angle)
  );
}

function angle(p) {
  return Math.atan2(p.y, p.x);
}

const LERP = (A, B, t) => A + (B - A) * t;

function getIntersection(A, B, C, D) {
  const tTop = (D.x - C.x) * (A.y - C.y) - (D.y - C.y) * (A.x - C.x);
  const uTop = (C.y - A.y) * (A.x - B.x) - (C.x - A.x) * (A.y - B.y);
  const bottom = (D.y - C.y) * (B.x - A.x) - (D.x - C.x) * (B.y - A.y);

  if (bottom != 0) {
    const t = tTop / bottom;
    const u = uTop / bottom;
    if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
      return {
        x: LERP(A.x, B.x, t),
        y: LERP(A.y, B.y, t),
        offset: t,
      };
    }
  }

  return null;
}
