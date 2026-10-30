"use client";

import React, { useState } from "react";
import ProjectModal, { Project } from "./ProjectModal";
import {
  SparklesIcon,
  ExternalLinkIcon,
  GithubIcon,
  ArrowUpRightIcon,
  LayersIcon,
} from "./Icons";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const projectList: Project[] = [
    {
      id: "omnistore",
      title: "OmniStore - Modern E-Commerce Suite",
      category: "Full Stack",
      tagline: "High-performance headless e-commerce store with Stripe & inventory engine.",
      description:
        "A full-featured digital commerce platform engineered for sub-second page loads, real-time inventory synchronization, and frictionless payments.",
      fullOverview:
        "OmniStore was built to address sluggish checkout funnels in traditional e-commerce platforms. Leveraging Next.js Server Components and edge caching, it achieves 99+ Google Lighthouse scores. Features include a dynamic product catalog, faceted filtering, multi-currency support, automated invoice generation, and a bespoke admin dashboard for stock tracking.",
      keyFeatures: [
        "Instant search & facet filtering with sub-50ms response",
        "Stripe payment gateway integration with webhook listeners",
        "Role-based administrative control panel & analytics",
        "Responsive cart state management with local persistence",
        "Automated PDF receipts and email notifications",
        "SEO-optimized product metadata and rich schemas",
      ],
      techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "PostgreSQL", "Prisma", "Stripe"],
      metrics: "Sub-second load times & 99+ Lighthouse performance score",
      liveUrl: "https://example.com/demo/omnistore",
      githubUrl: "https://github.com",
      bannerGradient: "from-blue-600 via-indigo-600 to-purple-700",
      iconText: "OS",
    },
    {
      id: "nexus-ai",
      title: "NexusAI - SaaS Intelligence Suite",
      category: "AI & SaaS",
      tagline: "Generative AI workflow assistant with vector search and team workspaces.",
      description:
        "An enterprise-ready SaaS application providing intelligent document analysis, copy generation, and prompt optimization powered by modern LLMs.",
      fullOverview:
        "NexusAI empowers content creators and developers by connecting proprietary knowledge bases to frontier AI models. Users can upload documentation, query complex manuals in natural language, and generate formatted reports. Built with a robust subscription billing architecture and granular permission tiers.",
      keyFeatures: [
        "Context-aware vector embeddings & semantic search",
        "Streaming response rendering for zero perceived latency",
        "Multi-tenant team workspaces with invite links",
        "Usage quota metering and tiered subscription plans",
        "Export workflows to Markdown, Notion, and PDF",
        "End-to-end encrypted API key vault",
      ],
      techStack: ["React 19", "Next.js", "OpenAI API", "Supabase", "Tailwind CSS", "Redis"],
      metrics: "50,000+ simulated prompt queries processed with 99.9% uptime",
      liveUrl: "https://example.com/demo/nexus-ai",
      githubUrl: "https://github.com",
      bannerGradient: "from-purple-600 via-pink-600 to-rose-600",
      iconText: "NX",
    },
    {
      id: "devcanvas",
      title: "DevCanvas - Real-time Collaborative Board",
      category: "Real-time",
      tagline: "Interactive infinite canvas with live cursor presence and WebSockets.",
      description:
        "A lightning-fast collaborative digital whiteboard tailored for engineering architecture planning, sprint reviews, and brainstorming sessions.",
      fullOverview:
        "DevCanvas brings teams together onto a zero-latency interactive canvas. Built using the HTML5 Canvas API and WebSockets, users can sketch system diagrams, drop sticky notes, connect relation nodes, and observe teammate mouse movements in real-time without frame drops.",
      keyFeatures: [
        "Bidirectional WebSocket synchronisation via Socket.io",
        "Infinite zoom and pan canvas with hardware acceleration",
        "Multiplayer cursor presence with real-time avatar badges",
        "Diagram node connections with dynamic bezier curves",
        "Version snapshot history and rollback capabilities",
        "Export to high-resolution PNG, SVG, or JSON",
      ],
      techStack: ["Next.js", "TypeScript", "Node.js", "WebSockets", "HTML5 Canvas", "Tailwind CSS"],
      metrics: "Maintains 60 FPS under 10,000+ interactive canvas elements",
      liveUrl: "https://example.com/demo/devcanvas",
      githubUrl: "https://github.com",
      bannerGradient: "from-cyan-600 via-teal-600 to-emerald-600",
      iconText: "DC",
    },
    {
      id: "pulsemetrics",
      title: "PulseMetrics - Cloud Analytics Platform",
      category: "Full Stack",
      tagline: "Real-time operational observability, latency tracking, and event pipelines.",
      description:
        "A privacy-first telemetry and event analytics dashboard that visualizes traffic funnels, user retention, and server health without intrusive tracking.",
      fullOverview:
        "PulseMetrics was designed as a lightweight, privacy-focused alternative to heavy analytical platforms. It ingests thousands of events per second and renders interactive multi-axis visual charts, conversion pipelines, and geographical traffic distributions.",
      keyFeatures: [
        "Live telemetry feeds with configurable polling intervals",
        "Interactive time-series visualizations and cohort matrices",
        "Configurable threshold alert triggers via Webhooks & Slack",
        "Zero-cookie GDPR/CCPA compliant tracking script (< 2KB)",
        "Granular country, device, and referrer breakdown maps",
        "Role-based API token generator with scoping",
      ],
      techStack: ["TypeScript", "Next.js", "Chart.js", "PostgreSQL", "Tailwind CSS", "Docker"],
      metrics: "Ingesting 15M+ monthly telemetry points with < 30ms latency",
      liveUrl: "https://example.com/demo/pulsemetrics",
      githubUrl: "https://github.com",
      bannerGradient: "from-amber-600 via-orange-600 to-red-600",
      iconText: "PM",
    },
  ];

  const categories = ["All", "Full Stack", "AI & SaaS", "Real-time"];

  const filteredProjects =
    filter === "All"
      ? projectList
      : projectList.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 border-t border-slate-800/80">
      {/* Background accents */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Recent Projects &amp; Work
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Click on any project card to open its interactive details modal with architectural overview and features.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  filter === cat
                    ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/30"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Visual Banner */}
              <div
                className={`relative h-52 sm:h-60 w-full bg-gradient-to-br ${project.bannerGradient} p-6 flex flex-col justify-between overflow-hidden`}
              >
                {/* Decorative radial pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_70%)]" />

                {/* Top Badge & Open Indicator */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-transform group-hover:scale-110">
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </div>
                </div>

                {/* Banner Bottom Title preview */}
                <div className="relative z-10">
                  <span className="text-white/70 text-xs font-mono font-medium block">
                    PROJECT SHOWCASE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm group-hover:text-cyan-100 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5">
                <div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack preview */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/70 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/40 text-slate-400">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-cyan-300 transition-colors">
                    <span>Click to view details modal</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </span>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="GitHub Repository"
                      aria-label="View Github Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="Live Demo"
                      aria-label="View Live Demo"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup Component */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
