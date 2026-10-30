"use client";

import React, { useEffect } from "react";
import {
  CloseIcon,
  ExternalLinkIcon,
  GithubIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "./Icons";

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  fullOverview: string;
  keyFeatures: string[];
  techStack: string[];
  metrics?: string;
  liveUrl: string;
  githubUrl: string;
  bannerGradient: string;
  iconText: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0d1424] border border-slate-700/80 shadow-2xl shadow-black/80 z-10 flex flex-col text-slate-200 animate-scaleUp"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Banner Graphic Header */}
        <div className={`relative h-48 sm:h-56 w-full bg-gradient-to-br ${project.bannerGradient} p-6 sm:p-8 flex flex-col justify-between overflow-hidden`}>
          {/* Subtle noise/grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white/90 hover:text-white transition-all backdrop-blur-sm border border-white/10"
            aria-label="Close project modal"
          >
            <CloseIcon className="w-5 h-5" />
          </button>

          {/* Category Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider w-fit">
            <SparklesIcon className="w-3.5 h-3.5 text-cyan-300" />
            <span>{project.category}</span>
          </div>

          {/* Title & Tagline in banner */}
          <div className="relative z-10">
            <h3 id="modal-headline" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-sm">
              {project.title}
            </h3>
            <p className="text-white/80 text-sm sm:text-base mt-1 line-clamp-2">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metrics Pill if exists */}
          {project.metrics && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm">
              <span className="font-semibold text-white">Impact Highlight:</span>
              <span>{project.metrics}</span>
            </div>
          )}

          {/* Detailed Overview */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 mb-2">
              Project Overview
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.fullOverview}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 mb-3">
              Key Features &amp; Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/90 text-cyan-300 border border-slate-700/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* External Links / CTAs */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md shadow-indigo-600/30 transition-all duration-200"
            >
              <span>Live Demonstration</span>
              <ExternalLinkIcon className="w-4 h-4" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white border border-slate-700 transition-all duration-200"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code</span>
            </a>

            <button
              onClick={onClose}
              className="ml-auto px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
