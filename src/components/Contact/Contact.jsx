import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [copiedText, setCopiedText] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const copyToClipboard = (text, label) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedText(label);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div id="Contact" className="w-full py-20 relative font-space">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-900/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center mb-16 relative z-10 glass p-10 md:p-16 rounded-3xl border-t border-white/10 shadow-2xl">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
          Let's Work Together
        </h2>
        <p className="text-slate-400 text-center mb-10 max-w-lg">
          I'm currently available for freelance work or full-time roles. If you have a project that needs some creative magic, I'd love to hear about it.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-white w-full">
          <a
            href="https://www.linkedin.com/in/wasif-ansari/"
            target="_blank"
            rel="noreferrer"
            className="flex-1 min-w-[200px] py-4 px-6 glass rounded-2xl flex items-center justify-center gap-3 hover:bg-white/5 border border-white/5 hover:border-cyan-400/50 transition-all group"
          >
            <span className="group-hover:text-cyan-400 font-semibold transition-colors">LinkedIn</span>
          </a>

          <a
            href="https://github.com/Wasif-Ansari"
            target="_blank"
            rel="noreferrer"
            className="flex-1 min-w-[200px] py-4 px-6 glass rounded-2xl flex items-center justify-center gap-3 hover:bg-white/5 border border-white/5 hover:border-purple-400/50 transition-all group"
          >
            <span className="group-hover:text-purple-400 font-semibold transition-colors">GitHub</span>
          </a>

          <button
            onClick={() => copyToClipboard("+91 7888151128", "Phone Number")}
            className="flex-1 min-w-[200px] py-4 px-6 glass rounded-2xl flex items-center justify-center gap-3 hover:bg-white/5 border border-white/5 hover:border-blue-400/50 transition-all group"
          >
            <span className="group-hover:text-blue-400 font-semibold transition-colors">+91 7888151128</span>
          </button>

          <button
            onClick={() => copyToClipboard("wasifansari2709@gmail.com", "Email Address")}
            className="flex-1 min-w-[200px] py-4 px-6 glass rounded-2xl flex items-center justify-center gap-3 hover:bg-white/5 border border-white/5 hover:border-emerald-400/50 transition-all group"
          >
            <span className="group-hover:text-emerald-400 font-semibold transition-colors truncate">Email Me</span>
          </button>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center text-slate-500 font-outfit mt-12 mb-4 relative z-10">
        <div className="w-16 h-px bg-slate-700 mb-6"></div>
        <p>Copyright &copy; {new Date().getFullYear()} Wasif Ansari. All rights reserved.</p>
        <p className="text-sm mt-1">Designed with passion ✦</p>
      </div>

      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-slate-800 text-white px-6 py-3 rounded-full border border-slate-700 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="font-outfit font-medium">{copiedText} copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
