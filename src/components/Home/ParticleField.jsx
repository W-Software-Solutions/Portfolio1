import React, { useEffect, useRef } from "react";

const SKILLS = ["React", "Next.js", "Node", "Three.js", "Python", "MongoDB", "Express", "MySQL", "WebGL", "GSAP", "TypeScript", "Git", "Docker", "Redis", "AWS", "Figma"];

export default function ParticleField() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let W = canvas.offsetWidth;
        let H = canvas.offsetHeight;
        canvas.width = W;
        canvas.height = H;

        const mouse = { x: W / 2, y: H / 2, radius: 120 };
        let animId;

        // ── Particle class ──────────────────────────────────────────────
        class Particle {
            constructor() { this.reset(true); }

            reset(random = false) {
                this.ox = W * 0.15 + Math.random() * W * 0.7;  // original X
                this.oy = H * 0.15 + Math.random() * H * 0.7;  // original Y
                this.x = random ? Math.random() * W : this.ox;
                this.y = random ? Math.random() * H : this.oy;
                this.vx = 0;
                this.vy = 0;
                this.size = 1.2 + Math.random() * 1.8;
                const hue = 180 + Math.random() * 80 - 40; // cyan-ish range
                this.color = `hsla(${hue}, 90%, 65%, `;
                this.alpha = 0.5 + Math.random() * 0.5;
                this.connDist = 80 + Math.random() * 40;
            }

            update() {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Magnetic repulsion from cursor
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    this.vx -= Math.cos(angle) * force * 6;
                    this.vy -= Math.sin(angle) * force * 6;
                }

                // Spring back to origin
                const toOx = this.ox - this.x;
                const toOy = this.oy - this.y;
                this.vx += toOx * 0.04;
                this.vy += toOy * 0.04;

                // Damping
                this.vx *= 0.82;
                this.vy *= 0.82;

                this.x += this.vx;
                this.y += this.vy;
            }

            draw() {
                // Glow
                const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
                grd.addColorStop(0, this.color + this.alpha + ")");
                grd.addColorStop(1, this.color + "0)");
                ctx.fillStyle = grd;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
                ctx.fill();

                // Core dot
                ctx.fillStyle = this.color + this.alpha + ")";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // ── Spawn particles ─────────────────────────────────────────────
        const COUNT = 200;
        const particles = Array.from({ length: COUNT }, () => new Particle());

        // ── Skill labels floating above certain particles ────────────────
        const labelParticles = SKILLS.map((skill, i) => {
            const p = particles[Math.floor((i / SKILLS.length) * COUNT)];
            return { particle: p, label: skill };
        });

        // ── Mouse tracking ───────────────────────────────────────────────
        const onMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        const onLeave = () => {
            mouse.x = W / 2;
            mouse.y = H / 2;
        };
        canvas.addEventListener("mousemove", onMove);
        canvas.addEventListener("mouseleave", onLeave);

        // ── Resize ───────────────────────────────────────────────────────
        const onResize = () => {
            W = canvas.offsetWidth;
            H = canvas.offsetHeight;
            canvas.width = W;
            canvas.height = H;
            particles.forEach(p => p.reset(false));
        };
        window.addEventListener("resize", onResize);

        // ── Draw connections between nearby particles ────────────────────
        function drawEdges() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i];
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxD = (a.connDist + b.connDist) / 2;
                    if (dist < maxD) {
                        const alpha = (1 - dist / maxD) * 0.35;
                        ctx.strokeStyle = `rgba(34,211,238,${alpha})`;
                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }
        }

        // ── Cursor ring ──────────────────────────────────────────────────
        let cursorPulse = 0;
        function drawCursor() {
            cursorPulse += 0.05;
            const r = mouse.radius * 0.3 + Math.sin(cursorPulse) * 8;
            const grd = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, r * 2);
            grd.addColorStop(0, "rgba(34,211,238,0.25)");
            grd.addColorStop(1, "rgba(34,211,238,0)");
            ctx.fillStyle = grd;
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, r * 2, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = "rgba(34,211,238,0.6)";
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, r, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
        }

        // ── Skill labels ─────────────────────────────────────────────────
        function drawLabels() {
            ctx.textAlign = "center";
            labelParticles.forEach(({ particle: p, label }) => {
                const speed = Math.abs(p.vx) + Math.abs(p.vy);
                const alpha = Math.max(0, 1 - speed / 5);
                ctx.font = "bold 10px 'Space Grotesk', monospace";
                ctx.fillStyle = `rgba(148,163,184,${alpha * 0.85})`;
                ctx.fillText(label, p.x, p.y - p.size * 3 - 4);
            });
        }

        // ── Animation loop ───────────────────────────────────────────────
        function loop() {
            ctx.clearRect(0, 0, W, H);
            drawEdges();
            drawCursor();
            particles.forEach(p => { p.update(); p.draw(); });
            drawLabels();
            animId = requestAnimationFrame(loop);
        }
        loop();

        return () => {
            cancelAnimationFrame(animId);
            canvas.removeEventListener("mousemove", onMove);
            canvas.removeEventListener("mouseleave", onLeave);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ display: "block" }}
        />
    );
}
