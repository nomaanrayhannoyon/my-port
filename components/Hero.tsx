"use client";

import React from "react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  SparklesIcon,
  ArrowDownIcon,
  ArrowUpRightIcon,
  TerminalIcon,
} from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[360px] h-[360px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-medium text-emerald-400 mb-6 shadow-sm shadow-emerald-950/40 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Freelance & Full-time Opportunities
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">scalable apps</span> & modern digital experiences.
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8">
              I am a passionate <span className="text-white font-medium">Full Stack Developer</span> dedicated to building responsive, pixel-perfect user interfaces, robust backend architectures, and blazing-fast web applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-300 active:scale-95"
              >
                <span>View My Work</span>
                <ArrowDownIcon className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 hover:text-white transition-all duration-300 active:scale-95"
              >
                <span>Contact Me</span>
                <ArrowUpRightIcon className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-cyan-300 hover:bg-slate-900/50 transition-colors"
              >
                <SparklesIcon className="w-4 h-4 text-cyan-400" />
                <span>Resume / CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2 border-t border-slate-800/80 w-full">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 mr-2">
                Connect:
              </span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/70 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                aria-label="GitHub profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/70 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/70 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                aria-label="Twitter profile"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@developer.dev"
                className="p-2.5 rounded-lg bg-slate-900/70 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                aria-label="Send email"
              >
                <MailIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 opacity-20 blur-xl"></div>
              
              <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs sm:text-sm">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
                    <span>developer.config.ts</span>
                  </div>
                  <span className="text-[10px] text-slate-500 px-2 py-0.5 rounded bg-slate-800">
                    UTF-8
                  </span>
                </div>

                {/* Code Body */}
                <div className="p-5 text-slate-300 leading-relaxed overflow-x-auto space-y-1.5">
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-300">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-indigo-300">name</span>:{" "}
                    <span className="text-emerald-300">&quot;Full Stack Engineer&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-indigo-300">location</span>:{" "}
                    <span className="text-emerald-300">&quot;Global / Remote&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-indigo-300">coreStack</span>: [
                  </p>
                  <p className="pl-8 text-amber-200">
                    &quot;Next.js 16&quot;, &quot;React 19&quot;, &quot;TypeScript&quot;,
                  </p>
                  <p className="pl-8 text-amber-200">
                    &quot;Tailwind CSS&quot;, &quot;Node.js&quot;, &quot;PostgreSQL&quot;
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-indigo-300">focus</span>:{" "}
                    <span className="text-emerald-300">&quot;Modern Web &amp; Scalable Systems&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-indigo-300">passionateAbout</span>:{" "}
                    <span className="text-emerald-300">&quot;Clean Code, Performance, UI Polish&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-indigo-300">status</span>:{" "}
                    <span className="text-cyan-300">&quot;Building exciting products 🚀&quot;</span>
                  </p>
                  <p>&#125;;</p>

                  <div className="pt-3 border-t border-slate-800/80 text-slate-500">
                    <p className="text-emerald-400 flex items-center gap-1.5">
                      <span className="text-slate-400">$</span> npm run build:success
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Ready to collaborate on your next big idea.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/70 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
              3+
            </span>
            <span className="text-xs sm:text-sm text-slate-400 mt-1">Years Experience</span>
          </div>

          <div className="flex flex-col p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-300">
              20+
            </span>
            <span className="text-xs sm:text-sm text-slate-400 mt-1">Completed Projects</span>
          </div>

          <div className="flex flex-col p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
              99%
            </span>
            <span className="text-xs sm:text-sm text-slate-400 mt-1">Client Satisfaction</span>
          </div>

          <div className="flex flex-col p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              15+
            </span>
            <span className="text-xs sm:text-sm text-slate-400 mt-1">Modern Technologies</span>
          </div>
        </div>

      </div>
    </section>
  );
}
