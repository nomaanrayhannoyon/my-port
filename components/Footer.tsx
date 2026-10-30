"use client";

import React from "react";
import { ArrowUpIcon, GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#060910] border-t border-slate-800/80 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#060910] rounded-[7px] flex items-center justify-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 font-mono font-bold text-sm">
                    &lt;/&gt;
                  </span>
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Portfolio<span className="text-indigo-400">.</span>
              </span>
            </a>
            <p className="text-xs text-slate-500 mt-2">
              Designed &amp; built with modern dark aesthetics, clean code, and passion.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="Twitter profile"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@developer.dev"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="Send email"
            >
              <MailIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-all duration-200"
          >
            <span>Back to top</span>
            <ArrowUpIcon className="w-3.5 h-3.5 text-indigo-400" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>&copy; 2026 All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-mono">
            <span>Powered by</span>
            <span className="text-slate-400 font-semibold">Next.js 16</span>
            <span>&bull;</span>
            <span className="text-slate-400 font-semibold">React 19</span>
            <span>&bull;</span>
            <span className="text-slate-400 font-semibold">Tailwind CSS v4</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
