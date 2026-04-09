"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Difficulty = "easy" | "medium" | "hard";
type Mode = "11" | "endless";

const DIFF: Record<
  Difficulty,
  { aiSpeed: number; aiError: number; ballSpeed: number }
> = {
  easy: { aiSpeed: 3.5, aiError: 55, ballSpeed: 5 },
  medium: { aiSpeed: 5.5, aiError: 22, ballSpeed: 6 },
  hard: { aiSpeed: 8, aiError: 4, ballSpeed: 7.5 },
};

const W = 760;
const H = 440;
const PADDLE_H = 90;
const PADDLE_W = 12;
const BALL_R = 9;

export default function PickleballModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<Mode>("11");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [score, setScore] = useState({ p: 0, a: 0 });
  const [playing, setPlaying] = useState(false);
  const [winner, setWinner] = useState<"You" | "CPU" | null>(null);

  const gameRef = useRef({
    ballX: W / 2,
    ballY: H / 2,
    vx: 0,
    vy: 0,
    playerY: H / 2 - PADDLE_H / 2,
    aiY: H / 2 - PADDLE_H / 2,
  });
  const scoreRef = useRef({ p: 0, a: 0 });
  const playingRef = useRef(false);
  const modeRef = useRef<Mode>("11");
  const diffRef = useRef<Difficulty>("medium");
  const keys = useRef({ up: false, down: false });
  const mouseY = useRef<number | null>(null);
  const rafRef = useRef(0);

  const resetBall = (dir: 1 | -1) => {
    const g = gameRef.current;
    const d = DIFF[diffRef.current];
    g.ballX = W / 2;
    g.ballY = H / 2;
    const angle = (Math.random() - 0.5) * 0.7;
    g.vx = dir * d.ballSpeed * Math.cos(angle);
    g.vy = d.ballSpeed * Math.sin(angle);
  };

  const startGame = () => {
    scoreRef.current = { p: 0, a: 0 };
    setScore({ p: 0, a: 0 });
    setWinner(null);
    modeRef.current = mode;
    diffRef.current = difficulty;
    const g = gameRef.current;
    g.playerY = H / 2 - PADDLE_H / 2;
    g.aiY = H / 2 - PADDLE_H / 2;
    resetBall(Math.random() > 0.5 ? 1 : -1);
    playingRef.current = true;
    setPlaying(true);
  };

  // Keyboard + escape
  useEffect(() => {
    if (!open) return;
    const kd = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") keys.current.up = true;
      if (e.key === "ArrowDown") keys.current.down = true;
      if (e.key === "Escape") onClose();
    };
    const ku = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") keys.current.up = false;
      if (e.key === "ArrowDown") keys.current.down = false;
    };
    window.addEventListener("keydown", kd);
    window.addEventListener("keyup", ku);
    return () => {
      window.removeEventListener("keydown", kd);
      window.removeEventListener("keyup", ku);
    };
  }, [open, onClose]);

  // Game loop
  useEffect(() => {
    if (!open) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseY.current = ((e.clientY - rect.top) / rect.height) * H;
    };
    const onLeave = () => {
      mouseY.current = null;
    };
    canvas.addEventListener("mousemove", onMouse);
    canvas.addEventListener("mouseleave", onLeave);

    const checkWin = () => {
      if (modeRef.current !== "11") return;
      const { p, a } = scoreRef.current;
      if (p >= 11 && p - a >= 2) {
        playingRef.current = false;
        setPlaying(false);
        setWinner("You");
      } else if (a >= 11 && a - p >= 2) {
        playingRef.current = false;
        setPlaying(false);
        setWinner("CPU");
      }
    };

    const loop = () => {
      const g = gameRef.current;
      const d = DIFF[diffRef.current];

      if (playingRef.current) {
        // Player
        if (mouseY.current !== null) {
          g.playerY = Math.max(
            0,
            Math.min(H - PADDLE_H, mouseY.current - PADDLE_H / 2)
          );
        }
        if (keys.current.up) g.playerY = Math.max(0, g.playerY - 7);
        if (keys.current.down)
          g.playerY = Math.min(H - PADDLE_H, g.playerY + 7);

        // AI
        const aiCenter = g.aiY + PADDLE_H / 2;
        const target = g.ballY + (Math.random() - 0.5) * d.aiError;
        if (g.vx > 0 || diffRef.current === "hard") {
          if (aiCenter < target - 6)
            g.aiY = Math.min(H - PADDLE_H, g.aiY + d.aiSpeed);
          else if (aiCenter > target + 6)
            g.aiY = Math.max(0, g.aiY - d.aiSpeed);
        }

        // Ball
        g.ballX += g.vx;
        g.ballY += g.vy;

        // Walls
        if (g.ballY < BALL_R) {
          g.ballY = BALL_R;
          g.vy *= -1;
        }
        if (g.ballY > H - BALL_R) {
          g.ballY = H - BALL_R;
          g.vy *= -1;
        }

        // Player paddle
        if (
          g.ballX - BALL_R < 10 + PADDLE_W &&
          g.ballX - BALL_R > 4 &&
          g.ballY > g.playerY &&
          g.ballY < g.playerY + PADDLE_H &&
          g.vx < 0
        ) {
          g.vx *= -1.04;
          const rel = (g.ballY - (g.playerY + PADDLE_H / 2)) / (PADDLE_H / 2);
          g.vy = rel * 6;
          g.ballX = 10 + PADDLE_W + BALL_R;
        }
        // AI paddle
        if (
          g.ballX + BALL_R > W - 10 - PADDLE_W &&
          g.ballX + BALL_R < W - 4 &&
          g.ballY > g.aiY &&
          g.ballY < g.aiY + PADDLE_H &&
          g.vx > 0
        ) {
          g.vx *= -1.04;
          const rel = (g.ballY - (g.aiY + PADDLE_H / 2)) / (PADDLE_H / 2);
          g.vy = rel * 6;
          g.ballX = W - 10 - PADDLE_W - BALL_R;
        }

        // Scoring
        if (g.ballX < -BALL_R * 2) {
          scoreRef.current = {
            p: scoreRef.current.p,
            a: scoreRef.current.a + 1,
          };
          setScore({ ...scoreRef.current });
          checkWin();
          if (playingRef.current) resetBall(-1);
        } else if (g.ballX > W + BALL_R * 2) {
          scoreRef.current = {
            p: scoreRef.current.p + 1,
            a: scoreRef.current.a,
          };
          setScore({ ...scoreRef.current });
          checkWin();
          if (playingRef.current) resetBall(1);
        }
      }

      // --- Draw ---
      // Court
      ctx.fillStyle = "#3b7d4f";
      ctx.fillRect(0, 0, W, H);
      // Kitchen (non-volley zone) center strip
      ctx.fillStyle = "#2f6a42";
      ctx.fillRect(W / 2 - 70, 0, 140, H);

      // Outer boundary
      ctx.strokeStyle = "rgba(255,255,255,0.75)";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.strokeRect(8, 8, W - 16, H - 16);

      // Kitchen lines
      ctx.beginPath();
      ctx.moveTo(W / 2 - 70, 8);
      ctx.lineTo(W / 2 - 70, H - 8);
      ctx.moveTo(W / 2 + 70, 8);
      ctx.lineTo(W / 2 + 70, H - 8);
      ctx.stroke();

      // Net (dashed center)
      ctx.strokeStyle = "rgba(255,255,255,0.9)";
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 8]);
      ctx.beginPath();
      ctx.moveTo(W / 2, 8);
      ctx.lineTo(W / 2, H - 8);
      ctx.stroke();
      ctx.setLineDash([]);

      // Paddles
      ctx.fillStyle = "#f1f5f9";
      ctx.fillRect(10, g.playerY, PADDLE_W, PADDLE_H);
      ctx.fillRect(W - 10 - PADDLE_W, g.aiY, PADDLE_W, PADDLE_H);

      // Ball (wiffle-style)
      ctx.fillStyle = "#fde047";
      ctx.beginPath();
      ctx.arc(g.ballX, g.ballY, BALL_R, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(0,0,0,0.25)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = "rgba(0,0,0,0.35)";
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(
          g.ballX + Math.cos(a) * 3.5,
          g.ballY + Math.sin(a) * 3.5,
          1.3,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mousemove", onMouse);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [open]);

  // Reset state when modal closes
  useEffect(() => {
    if (!open) {
      playingRef.current = false;
      setPlaying(false);
      setWinner(null);
      scoreRef.current = { p: 0, a: 0 };
      setScore({ p: 0, a: 0 });
    }
  }, [open]);

  if (!open) return null;
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[#0f0f18] border border-white/10 rounded-2xl p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-4 text-slate-400 hover:text-white text-2xl leading-none"
        >
          ×
        </button>
        <h3 className="text-xs uppercase tracking-[0.25em] text-cyan-300/80 mb-2">
          Easter Egg
        </h3>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Pickleball Pong
        </h2>

        <div className="flex flex-wrap gap-3 mb-4 text-sm items-center">
          <div className="flex gap-1 bg-white/5 rounded-lg p-1 border border-white/10">
            {(["11", "endless"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-3 py-1 rounded-md transition ${
                  mode === m
                    ? "bg-purple-500/30 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {m === "11" ? "First to 11" : "Endless"}
              </button>
            ))}
          </div>
          <div className="flex gap-1 bg-white/5 rounded-lg p-1 border border-white/10">
            {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`px-3 py-1 rounded-md transition capitalize ${
                  difficulty === d
                    ? "bg-cyan-500/30 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
          <button
            onClick={startGame}
            className="ml-auto px-4 py-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:opacity-90 transition"
          >
            {playing ? "Restart" : "Start"}
          </button>
        </div>

        <div className="flex justify-between items-baseline text-slate-300 text-sm mb-2">
          <div>
            You:{" "}
            <span className="text-white font-bold text-lg">{score.p}</span>
          </div>
          <div className="text-slate-500 text-xs">Mouse or ↑ / ↓</div>
          <div>
            CPU:{" "}
            <span className="text-white font-bold text-lg">{score.a}</span>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden border border-white/10">
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            className="w-full block"
          />
          {winner && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/65 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white mb-3">
                {winner === "You" ? "You win! 🏆" : "CPU wins."}
              </div>
              <button
                onClick={startGame}
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:opacity-90 transition"
              >
                Play again
              </button>
            </div>
          )}
          {!playing && !winner && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm pointer-events-none">
              <div className="text-white text-lg">Press Start to play</div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
