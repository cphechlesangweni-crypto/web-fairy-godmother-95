import { useEffect, useRef, useCallback } from "react";

/*
 * BlueprintGrid — architectural grid with traveling data-point dots.
 *
 * • Fine light-grey grid lines drawn on a <canvas> (retina-aware)
 * • Multiple emerald glowing dots traveling along grid paths
 * • Subtle 3D perspective applied via CSS transform
 * • Lightweight: single canvas, no extra DOM, 60 fps rAF loop
 */

/* ── Config ─────────────────────────────────────────────── */
const CELL = 52;                // grid cell size (px)
const LINE_COLOR = "rgba(180, 190, 205, 0.22)";
const LINE_WIDTH = 0.7;
const CROSS_SIZE = 3;           // cross-hair tick at intersections
const CROSS_COLOR = "rgba(160, 175, 195, 0.30)";

// Data-point dots
const DOT_COUNT = 18;
const DOT_RADIUS = 2.4;
const DOT_GLOW_RADIUS = 14;
const DOT_BASE_SPEED = 0.45;    // px per frame
const DOT_SPEED_VARIANCE = 0.55;
const DOT_COLOR = "rgba(16, 185, 129, 1)";      // emerald-500
const DOT_GLOW_COLOR = "rgba(16, 185, 129, 0.35)";
const DOT_TRAIL_LENGTH = 28;
const DOT_TRAIL_COLOR = "rgba(16, 185, 129, 0.08)";

/* ── Types ──────────────────────────────────────────────── */
interface DataPoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;
  trail: { x: number; y: number }[];
  // For pulsing glow
  phase: number;
  phaseSpeed: number;
}

/* ── Component ──────────────────────────────────────────── */
export default function BlueprintGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<DataPoint[]>([]);
  const rafRef = useRef<number>(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  /* helpers ------------------------------------------------ */
  const snapToGrid = (v: number) => Math.round(v / CELL) * CELL;

  const createDot = useCallback((w: number, h: number): DataPoint => {
    const horizontal = Math.random() > 0.5;
    const speed = DOT_BASE_SPEED + Math.random() * DOT_SPEED_VARIANCE;
    let x: number, y: number, vx: number, vy: number;

    if (horizontal) {
      x = Math.random() * w;
      y = snapToGrid(Math.random() * h);
      vx = (Math.random() > 0.5 ? 1 : -1) * speed;
      vy = 0;
    } else {
      x = snapToGrid(Math.random() * w);
      y = Math.random() * h;
      vx = 0;
      vy = (Math.random() > 0.5 ? 1 : -1) * speed;
    }

    return {
      x, y, vx, vy, speed,
      trail: [],
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: 0.02 + Math.random() * 0.03,
    };
  }, []);

  /* init dots --------------------------------------------- */
  const initDots = useCallback((w: number, h: number) => {
    dotsRef.current = Array.from({ length: DOT_COUNT }, () => createDot(w, h));
  }, [createDot]);

  /* draw one frame ---------------------------------------- */
  const draw = useCallback((ctx: CanvasRenderingContext2D, dpr: number) => {
    const w = sizeRef.current.w;
    const h = sizeRef.current.h;

    ctx.clearRect(0, 0, w * dpr, h * dpr);
    ctx.save();
    ctx.scale(dpr, dpr);

    /* ── grid lines ──────────────────────────────────────── */
    ctx.strokeStyle = LINE_COLOR;
    ctx.lineWidth = LINE_WIDTH;
    ctx.beginPath();

    // Vertical lines
    for (let x = 0; x <= w; x += CELL) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
    }
    // Horizontal lines
    for (let y = 0; y <= h; y += CELL) {
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
    }
    ctx.stroke();

    /* ── intersection crosshairs ─────────────────────────── */
    ctx.strokeStyle = CROSS_COLOR;
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    for (let x = 0; x <= w; x += CELL) {
      for (let y = 0; y <= h; y += CELL) {
        ctx.moveTo(x - CROSS_SIZE, y);
        ctx.lineTo(x + CROSS_SIZE, y);
        ctx.moveTo(x, y - CROSS_SIZE);
        ctx.lineTo(x, y + CROSS_SIZE);
      }
    }
    ctx.stroke();

    /* ── data-point dots ─────────────────────────────────── */
    const dots = dotsRef.current;
    for (let i = 0; i < dots.length; i++) {
      const d = dots[i];

      /* movement */
      d.x += d.vx;
      d.y += d.vy;
      d.phase += d.phaseSpeed;

      /* trail */
      d.trail.push({ x: d.x, y: d.y });
      if (d.trail.length > DOT_TRAIL_LENGTH) d.trail.shift();

      /* chance to turn at intersection */
      const atNodeX = Math.abs(d.x - snapToGrid(d.x)) < 1.2;
      const atNodeY = Math.abs(d.y - snapToGrid(d.y)) < 1.2;
      if (atNodeX && atNodeY && Math.random() < 0.025) {
        // Turn 90°
        if (d.vx !== 0) {
          d.vy = (Math.random() > 0.5 ? 1 : -1) * d.speed;
          d.vx = 0;
          d.x = snapToGrid(d.x);
        } else {
          d.vx = (Math.random() > 0.5 ? 1 : -1) * d.speed;
          d.vy = 0;
          d.y = snapToGrid(d.y);
        }
      }

      /* wrap around edges */
      if (d.x < -20) d.x = w + 10;
      if (d.x > w + 20) d.x = -10;
      if (d.y < -20) d.y = h + 10;
      if (d.y > h + 20) d.y = -10;

      /* draw trail */
      if (d.trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(d.trail[0].x, d.trail[0].y);
        for (let t = 1; t < d.trail.length; t++) {
          ctx.lineTo(d.trail[t].x, d.trail[t].y);
        }
        ctx.strokeStyle = DOT_TRAIL_COLOR;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      /* pulsing glow factor */
      const pulse = 0.7 + 0.3 * Math.sin(d.phase);

      /* outer glow */
      const glow = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, DOT_GLOW_RADIUS * pulse);
      glow.addColorStop(0, DOT_GLOW_COLOR);
      glow.addColorStop(1, "rgba(16, 185, 129, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(d.x, d.y, DOT_GLOW_RADIUS * pulse, 0, Math.PI * 2);
      ctx.fill();

      /* core dot */
      ctx.fillStyle = DOT_COLOR;
      ctx.beginPath();
      ctx.arc(d.x, d.y, DOT_RADIUS, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }, []);

  /* ── lifecycle ─────────────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const w = rect.width;
      const h = rect.height;
      sizeRef.current = { w, h };
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      // re-init dots on meaningful resize
      if (dotsRef.current.length === 0) {
        initDots(w, h);
      }
    };

    resize();
    initDots(sizeRef.current.w, sizeRef.current.h);

    const tick = () => {
      draw(ctx, dpr);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [draw, initDots]);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        perspective: "1200px",
      }}
    >
      {/* 3-D tilt wrapper */}
      <div
        className="absolute inset-0"
        style={{
          transform: "rotateX(18deg) scale(1.18)",
          transformOrigin: "50% 80%",
        }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: "none" }}
        />
      </div>

      {/* Depth fade — top */}
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, hsl(40 30% 98% / 1) 0%, hsl(40 30% 98% / 0) 100%)",
        }}
      />
      {/* Depth fade — bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-48"
        style={{
          background:
            "linear-gradient(to top, hsl(40 30% 98% / 1) 0%, hsl(40 30% 98% / 0) 100%)",
        }}
      />
      {/* Depth fade — left */}
      <div
        className="absolute inset-y-0 left-0 w-32"
        style={{
          background:
            "linear-gradient(to right, hsl(40 30% 98% / 0.9) 0%, hsl(40 30% 98% / 0) 100%)",
        }}
      />
      {/* Depth fade — right */}
      <div
        className="absolute inset-y-0 right-0 w-32"
        style={{
          background:
            "linear-gradient(to left, hsl(40 30% 98% / 0.9) 0%, hsl(40 30% 98% / 0) 100%)",
        }}
      />
    </div>
  );
}
