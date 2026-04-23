import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CODE_LINES = [
    { tokens: [{ t: "const ", c: "text-purple-400" }, { t: "developer", c: "text-cyan-300" }, { t: " = {", c: "text-white" }] },
    { tokens: [{ t: "  name:", c: "text-slate-400" }, { t: ' "Wasif Ansari"', c: "text-emerald-400" }, { t: ",", c: "text-white" }] },
    { tokens: [{ t: "  role:", c: "text-slate-400" }, { t: ' "Full Stack Engineer"', c: "text-emerald-400" }, { t: ",", c: "text-white" }] },
    { tokens: [{ t: "  location:", c: "text-slate-400" }, { t: ' "India 🇮🇳"', c: "text-emerald-400" }, { t: ",", c: "text-white" }] },
    { tokens: [{ t: "  stack:", c: "text-slate-400" }, { t: " [", c: "text-white" }] },
    { tokens: [{ t: '    "React"', c: "text-emerald-400" }, { t: ", ", c: "text-white" }, { t: '"Next.js"', c: "text-emerald-400" }, { t: ", ", c: "text-white" }, { t: '"Node"', c: "text-emerald-400" }] },
    { tokens: [{ t: '    "Python"', c: "text-emerald-400" }, { t: ", ", c: "text-white" }, { t: '"MongoDB"', c: "text-emerald-400" }, { t: ", ", c: "text-white" }, { t: '"WebGL"', c: "text-emerald-400" }] },
    { tokens: [{ t: "  ],", c: "text-white" }] },
    { tokens: [{ t: "  passion:", c: "text-slate-400" }, { t: ' "Craft over everything"', c: "text-yellow-300" }, { t: ",", c: "text-white" }] },
    { tokens: [{ t: "  available:", c: "text-slate-400" }, { t: " true", c: "text-blue-400" }] },
    { tokens: [{ t: "}", c: "text-white" }] },
    { tokens: [] },
    { tokens: [{ t: "// initiating build sequence...", c: "text-slate-600 italic" }] },
    { tokens: [{ t: "developer", c: "text-cyan-300" }, { t: ".", c: "text-white" }, { t: "ship", c: "text-yellow-300" }, { t: "()", c: "text-white" }, { t: " // 🚀", c: "text-slate-500" }] },
];

const CHAR_DELAY_MS = 22;      // typing speed per character
const LINE_PAUSE_MS = 120;    // pause between lines
const RESTART_MS = 3500;   // pause at end before restarting

export default function CodeTerminal() {
    const [visibleLines, setVisibleLines] = useState([]);
    const [currentLine, setCurrentLine] = useState(0);
    const [currentChar, setCurrentChar] = useState(0);
    const [done, setDone] = useState(false);

    // Flatten tokens of a line into a single string for char counting
    const flatLine = (lineIdx) =>
        CODE_LINES[lineIdx]?.tokens.map(t => t.t).join("") ?? "";

    useEffect(() => {
        if (done) {
            const id = setTimeout(() => {
                setVisibleLines([]);
                setCurrentLine(0);
                setCurrentChar(0);
                setDone(false);
            }, RESTART_MS);
            return () => clearTimeout(id);
        }

        if (currentLine >= CODE_LINES.length) { setDone(true); return; }

        const lineStr = flatLine(currentLine);

        if (currentChar > lineStr.length) {
            // Move to next line
            const id = setTimeout(() => {
                setVisibleLines(prev => [...prev, currentLine]);
                setCurrentLine(l => l + 1);
                setCurrentChar(0);
            }, LINE_PAUSE_MS);
            return () => clearTimeout(id);
        }

        const id = setTimeout(() => setCurrentChar(c => c + 1), CHAR_DELAY_MS);
        return () => clearTimeout(id);
    }, [currentLine, currentChar, done]);

    // Renders a partially-typed line
    function renderLine(lineIdx, partialChars) {
        const tokens = CODE_LINES[lineIdx].tokens;
        let remaining = partialChars;
        return tokens.map((tok, ti) => {
            if (remaining <= 0) return null;
            const visible = tok.t.slice(0, remaining);
            remaining -= tok.t.length;
            return (
                <span key={ti} className={tok.c}>{visible}</span>
            );
        });
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[480px] rounded-xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)] border border-white/8"
            style={{ backdropFilter: "blur(2px)" }}
        >
            {/* ── Title bar ─────────────────────────────────────────────── */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1e1e2e] border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-slate-500 text-xs font-mono tracking-wide">developer.js</span>
                <div className="ml-auto flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-[10px] text-cyan-500/80 font-mono">LIVE</span>
                </div>
            </div>

            {/* ── Code body ─────────────────────────────────────────────── */}
            <div className="bg-[#13131f]/95 px-0 py-4 font-mono text-[13px] leading-[1.9] min-h-[340px]">
                {/* Completed lines */}
                {visibleLines.map(li => (
                    <div key={li} className="flex px-4 hover:bg-white/[0.025] transition-colors">
                        <span className="w-8 text-right mr-4 text-slate-600 select-none text-[11px] pt-px">{li + 1}</span>
                        <span>
                            {CODE_LINES[li].tokens.map((tok, ti) => (
                                <span key={ti} className={tok.c}>{tok.t}</span>
                            ))}
                        </span>
                    </div>
                ))}

                {/* Currently typing line */}
                {!done && currentLine < CODE_LINES.length && (
                    <div className="flex px-4 bg-white/[0.04]">
                        <span className="w-8 text-right mr-4 text-slate-500 select-none text-[11px] pt-px">
                            {currentLine + 1}
                        </span>
                        <span>
                            {renderLine(currentLine, currentChar)}
                            {/* blinking caret */}
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 0.9, repeat: Infinity }}
                                className="inline-block w-[2px] h-[14px] bg-cyan-400 align-middle ml-[1px] rounded-sm"
                            />
                        </span>
                    </div>
                )}
            </div>

            {/* ── Status bar ────────────────────────────────────────────── */}
            <div className="flex items-center justify-between px-4 py-1.5 bg-[#0e3a5c] text-[10px] font-mono">
                <div className="flex items-center gap-3 text-cyan-300/80">
                    <span>⎇ main</span>
                    <span>JavaScript</span>
                </div>
                <div className="flex items-center gap-3 text-cyan-300/60">
                    <span>Ln {Math.min(currentLine + 1, CODE_LINES.length)}, Col {currentChar}</span>
                    <span>UTF-8</span>
                </div>
            </div>
        </motion.div>
    );
}
