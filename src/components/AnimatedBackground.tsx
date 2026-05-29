import { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  r: number;
  maxR: number;
  growSpeed: number;
  opacity: number;
  state: "growing" | "popping";
  popProgress: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Ek naya bubble banao
    const createBubble = (): Bubble => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 0,
      maxR: Math.random() * 100 + 40,   // 40px–140px
      growSpeed: Math.random() * 0.2 + 0.1, // kitni tezi se bada ho
      opacity: Math.random() * 0.25 + 0.1,  // 0.1–0.35
      state: "growing",
      popProgress: 0,
    });

    // Start with 12 bubbles, staggered
    const bubbles: Bubble[] = Array.from({ length: 12 }, () => {
      const b = createBubble();
      // Random starting size taaki sab ek saath na start ho
      b.r = Math.random() * b.maxR;
      return b;
    });

    // Naye bubbles random interval pe add karo
    const spawnInterval = setInterval(() => {
      if (bubbles.length < 20) {
        bubbles.push(createBubble());
      }
    }, 600);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];

        if (b.state === "growing") {
          b.r += b.growSpeed;

          if (b.r >= b.maxR) {
            b.r = b.maxR;
            b.state = "popping";
          }

          // Draw normal bubble
          const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
          grad.addColorStop(0,   `rgba(34,197,94,${b.opacity})`);
          grad.addColorStop(0.6, `rgba(34,197,94,${b.opacity * 0.5})`);
          grad.addColorStop(1,   `rgba(34,197,94,0)`);

          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();

          // Bubble border ring
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(34,197,94,${b.opacity * 0.4})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();

        } else if (b.state === "popping") {
          b.popProgress += 0.04;

          const popOpacity = b.opacity * (1 - b.popProgress);
          const popR = b.maxR * (1 + b.popProgress * 0.4); // thoda bada hota hai phootne se pehle

          if (b.popProgress >= 1) {
            // Remove and respawn
            bubbles.splice(i, 1);
            bubbles.push(createBubble());
            continue;
          }

          // Draw popping bubble — fade out + expand
          const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, popR);
          grad.addColorStop(0,   `rgba(34,197,94,0)`);
          grad.addColorStop(0.7, `rgba(34,197,94,${popOpacity * 0.3})`);
          grad.addColorStop(1,   `rgba(34,197,94,${popOpacity})`);

          ctx.beginPath();
          ctx.arc(b.x, b.y, popR, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();

          // Popping ring — expands outward
          ctx.beginPath();
          ctx.arc(b.x, b.y, popR, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(34,197,94,${popOpacity * 0.6})`;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Tiny pop particles
          const particleCount = 6;
          for (let p = 0; p < particleCount; p++) {
            const angle = (p / particleCount) * Math.PI * 2;
            const dist = b.maxR * (0.8 + b.popProgress * 0.8);
            const px = b.x + Math.cos(angle) * dist;
            const py = b.y + Math.sin(angle) * dist;
            const pr = (1 - b.popProgress) * 4;

            ctx.beginPath();
            ctx.arc(px, py, Math.max(pr, 0), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(34,197,94,${popOpacity * 0.8})`;
            ctx.fill();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(spawnInterval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default AnimatedBackground;