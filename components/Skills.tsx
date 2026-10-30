"use client";

import React, { useState } from "react";
import { CodeIcon, LayersIcon, SparklesIcon, CheckCircleIcon } from "./Icons";

interface SkillItem {
  name: string;
  level: string;
  proficiency: number;
  iconText: string;
  color: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories: Record<string, SkillCategory> = {
    Frontend: {
      title: "Frontend Engineering",
      description: "Crafting fluid, intuitive, and responsive interfaces with modern standards.",
      skills: [
        { name: "React 19", level: "Expert", proficiency: 95, iconText: "Re", color: "from-cyan-400 to-blue-500" },
        { name: "Next.js 16", level: "Expert", proficiency: 92, iconText: "Nx", color: "from-white to-slate-400" },
        { name: "TypeScript", level: "Advanced", proficiency: 90, iconText: "TS", color: "from-blue-400 to-indigo-500" },
        { name: "Tailwind CSS v4", level: "Expert", proficiency: 96, iconText: "TW", color: "from-teal-300 to-cyan-500" },
        { name: "JavaScript (ES6+)", level: "Expert", proficiency: 95, iconText: "JS", color: "from-amber-300 to-yellow-500" },
        { name: "Redux / Zustand", level: "Advanced", proficiency: 88, iconText: "St", color: "from-purple-400 to-indigo-500" },
      ],
    },
    Backend: {
      title: "Backend & Systems",
      description: "Architecting secure, scalable microservices, REST & GraphQL endpoints.",
      skills: [
        { name: "Node.js", level: "Advanced", proficiency: 89, iconText: "No", color: "from-emerald-400 to-green-600" },
        { name: "Express.js", level: "Advanced", proficiency: 87, iconText: "Ex", color: "from-slate-300 to-slate-500" },
        { name: "RESTful APIs", level: "Expert", proficiency: 94, iconText: "API", color: "from-indigo-400 to-cyan-500" },
        { name: "GraphQL", level: "Proficient", proficiency: 80, iconText: "GQL", color: "from-pink-400 to-rose-500" },
        { name: "Python", level: "Proficient", proficiency: 82, iconText: "Py", color: "from-blue-400 to-yellow-400" },
        { name: "Authentication / JWT", level: "Advanced", proficiency: 90, iconText: "Auth", color: "from-amber-400 to-orange-500" },
      ],
    },
    Database: {
      title: "Databases & Storage",
      description: "Optimizing queries, database indexing, and designing resilient schemas.",
      skills: [
        { name: "PostgreSQL", level: "Advanced", proficiency: 88, iconText: "PG", color: "from-blue-400 to-sky-600" },
        { name: "MongoDB", level: "Advanced", proficiency: 86, iconText: "MG", color: "from-emerald-400 to-green-500" },
        { name: "Prisma ORM", level: "Advanced", proficiency: 90, iconText: "Pr", color: "from-indigo-300 to-purple-400" },
        { name: "Supabase", level: "Advanced", proficiency: 89, iconText: "Sb", color: "from-emerald-300 to-teal-500" },
        { name: "Redis", level: "Proficient", proficiency: 78, iconText: "Rd", color: "from-red-400 to-rose-600" },
        { name: "Firebase", level: "Proficient", proficiency: 84, iconText: "Fb", color: "from-amber-400 to-orange-500" },
      ],
    },
    DevOps: {
      title: "Tools, DevOps & Cloud",
      description: "Streamlining deployment workflows, containerization, and agile tooling.",
      skills: [
        { name: "Git & GitHub", level: "Expert", proficiency: 95, iconText: "Git", color: "from-orange-400 to-red-500" },
        { name: "Docker", level: "Proficient", proficiency: 80, iconText: "Dk", color: "from-sky-400 to-blue-600" },
        { name: "Vercel / Cloudflare", level: "Expert", proficiency: 92, iconText: "Vc", color: "from-slate-200 to-slate-400" },
        { name: "Linux / Bash", level: "Advanced", proficiency: 85, iconText: "Lx", color: "from-amber-300 to-yellow-600" },
        { name: "Figma UI/UX", level: "Advanced", proficiency: 86, iconText: "Fg", color: "from-purple-400 to-pink-500" },
        { name: "CI / CD Pipelines", level: "Proficient", proficiency: 82, iconText: "CI", color: "from-cyan-400 to-teal-500" },
      ],
    },
  };

  const allSkills = Object.values(categories).flatMap((cat) => cat.skills);
  const displayedSkills =
    activeCategory === "All"
      ? allSkills
      : categories[activeCategory]?.skills || [];

  return (
    <section id="skills" className="relative py-24 border-t border-slate-800/80">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Modern tools and proven technologies I leverage to build robust, scalable applications.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === "All"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              All Skills ({allSkills.length})
            </button>
            {Object.keys(categories).map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === key
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative p-5 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${skill.color} p-[1px] flex items-center justify-center shadow-sm`}
                  >
                    <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-xs font-bold text-white font-mono">
                      {skill.iconText}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] text-slate-400">{skill.level}</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-medium text-slate-400 group-hover:text-cyan-300">
                  {skill.proficiency}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-800/90 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-700`}
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/60 border border-slate-800/80">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
              <CodeIcon className="w-5 h-5" />
            </div>
            <h4 className="text-base font-semibold text-white mb-2">Modern Architecture</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Writing clean, modular, and maintainable TypeScript code adhering to best practices and component-driven design.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/60 border border-slate-800/80">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
              <LayersIcon className="w-5 h-5" />
            </div>
            <h4 className="text-base font-semibold text-white mb-2">Performance &amp; SEO</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Lightning fast Core Web Vitals, server components, dynamic asset optimization, and accessibility compliance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/60 border border-slate-800/80">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <CheckCircleIcon className="w-5 h-5" />
            </div>
            <h4 className="text-base font-semibold text-white mb-2">Full Lifecycle Delivery</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              From brainstorming Figma wireframes to backend schema design, unit tests, and production CI/CD deployments.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
