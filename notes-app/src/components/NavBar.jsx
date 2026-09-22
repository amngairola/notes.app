import React from "react";
import { Link } from "react-router-dom";
import { FileText, Sparkles } from "lucide-react";

export default function Navbar({ name = "iNote" }) {
  return (
    <header className="h-16 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-50">
      {/* Brand / Logo */}
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <FileText className="w-5 h-5 text-white" />
        </div>
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-zinc-100 flex items-center gap-2"
        >
          {name}
          <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium">
            SaaS
          </span>
        </Link>
      </div>

      {/* Right Corner: Navigation & Auth Actions */}
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors px-3 py-2 rounded-lg hover:bg-zinc-900"
        >
          Home
        </Link>
        <div className="h-4 w-[1px] bg-zinc-800" />
        <Link
          to="/login"
          className="text-sm font-medium text-zinc-300 hover:text-white px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-all"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
