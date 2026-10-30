/**
 * A short, cut piece of rope on a gentle arc, with frayed ends. The rope is a
 * solid stroke with light grooves cut across it on a slant, which reads as
 * twist. Geometry is computed once at module load; the grooves use the page
 * background, so dark mode just works.
 */

type Pt = [number, number];

const ROPE = 5; // rope thickness, in viewBox units
const GROOVE = 0.9; // groove thickness
const GROOVE_EVERY = 3.2; // distance between grooves along the rope
const TWIST = 50; // groove angle against the rope, in degrees

// the rope's centerline: one cubic from the bottom end up to the top end
const LINE: [Pt, Pt, Pt, Pt] = [
  [30, 94],
  [8, 76],
  [6, 34],
  [24, 6],
];

// loose strands at each cut end: offset across the rope, angle off its axis, length
const FRAY = [
  { offset: -1.8, angle: -26, length: 5 },
  { offset: -0.6, angle: -9, length: 7 },
  { offset: 0.6, angle: 8, length: 6.4 },
  { offset: 1.8, angle: 24, length: 4.6 },
];

const rad = (deg: number) => (deg * Math.PI) / 180;
const f = (n: number) => n.toFixed(2).replace(/\.?0+$/, '');

function at(t: number): Pt {
  const u = 1 - t;
  const [a, b, c, d] = LINE;
  return [0, 1].map(
    (i) =>
      u ** 3 * a[i] +
      3 * u * u * t * b[i] +
      3 * u * t * t * c[i] +
      t ** 3 * d[i],
  ) as Pt;
}

function angleAt(t: number): number {
  const u = 1 - t;
  const [a, b, c, d] = LINE;
  const [dx, dy] = [0, 1].map(
    (i) =>
      3 * u * u * (b[i] - a[i]) +
      6 * u * t * (c[i] - b[i]) +
      3 * t * t * (d[i] - c[i]),
  );
  return Math.atan2(dy, dx);
}

/** Short slanted cuts spaced evenly along the centerline, each spanning the rope's width. */
function grooves(): string {
  const points = Array.from({ length: 241 }, (_, i) => at(i / 240));
  const reach = (ROPE / 2 + 0.4) / Math.sin(rad(TWIST));
  let out = '';
  let next = GROOVE_EVERY / 2;
  let [px, py] = points[0];
  for (const [x, y] of points.slice(1)) {
    let seg = Math.hypot(x - px, y - py);
    while (next <= seg) {
      const k = next / seg;
      const gx = px + (x - px) * k;
      const gy = py + (y - py) * k;
      const a = Math.atan2(y - py, x - px) + rad(TWIST);
      out += `M${f(gx - reach * Math.cos(a))} ${f(gy - reach * Math.sin(a))}L${f(gx + reach * Math.cos(a))} ${f(gy + reach * Math.sin(a))}`;
      seg -= next;
      [px, py] = [gx, gy];
      next = GROOVE_EVERY;
    }
    next -= seg;
    [px, py] = [x, y];
  }
  return out;
}

/** Loose strands splaying out past one cut end. `outward` points away from the rope. */
function fray(end: Pt, outward: number): string {
  const [nx, ny] = [-Math.sin(outward), Math.cos(outward)];
  return FRAY.map(({ offset, angle, length }) => {
    const sx = end[0] + nx * offset;
    const sy = end[1] + ny * offset;
    const a = outward + rad(angle);
    return `M${f(sx)} ${f(sy)}L${f(sx + length * Math.cos(a))} ${f(sy + length * Math.sin(a))}`;
  }).join('');
}

const [a, b, c, d] = LINE;
const PIECE = {
  rope: `M${a.join(' ')}C${b.join(' ')} ${c.join(' ')} ${d.join(' ')}`,
  grooves: grooves(),
  // the bottom end points back along the start tangent, the top end along the finish
  fray: fray(at(0), angleAt(0) + Math.PI) + fray(at(1), angleAt(1)),
};

export function Rope({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-6 -10 50 116"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d={PIECE.fray} strokeWidth={1.1} strokeLinecap="round" />
      <path d={PIECE.rope} strokeWidth={ROPE} strokeLinecap="butt" />
      <path
        d={PIECE.grooves}
        stroke="var(--background)"
        strokeWidth={GROOVE}
        strokeLinecap="butt"
      />
    </svg>
  );
}
