"use client";

import React from "react";
import { SparklesIcon, CheckCircleIcon, CodeIcon, LayersIcon } from "./Icons";

export default function About() {
  const experiences = [
    {
      period: "2024 - Present",
      role: "Senior Full Stack Engineer",
      company: "TechVentures Inc.",
      description:
        "Leading development of cloud-native web applications, managing microservices with Next.js, TypeScript, and PostgreSQL. Reduced latency by 35% through edge caching.",
    },
    {
      period: "2022 - 2024",
      role: "Frontend Developer",
      company: "Digital Studio Labs",
      description:
        "Engineered scalable design systems and high-converting web apps with React, Tailwind CSS, and REST APIs. Collaborated closely with UI/UX designers and product managers.",
    },
    {
      period: "2021 - 2022",
      role: "Junior Web Developer",
      company: "Innovative Soft",
      description:
        "Built responsive client portals, streamlined database schemas, and integrated third-party payment gateways and authentication flows.",
    },
  ];

  return (
    <section id="about" className="relative py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Behind the Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me &amp; Experience
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Bridging technical precision with creative design to engineer unforgettable digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Story */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>Who I Am</span>
                <span className="text-cyan-400 font-mono text-sm">&lt;bio&gt;</span>
              </h3>
              <p>
                Hello! I am a full-stack software engineer with a strong appreciation for modern design aesthetics, accessibility, and high performance. I love transforming complex ideas into intuitive, elegant digital products.
              </p>
              <p>
                Over the past several years, I have worked with startups and forward-thinking enterprises, shipping everything from scalable SaaS platforms and dynamic e-commerce suites to real-time interactive tools.
              </p>
              <p>
                When I&apos;m not writing code or experimenting with new frameworks, you&apos;ll find me exploring open source repositories, mentoring emerging developers, or refining UI design interactions.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                  <span>Clean Code Advocate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                  <span>Responsive UI Obsessed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                  <span>Continuous Learner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                  <span>Agile Collaborator</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <LayersIcon className="w-5 h-5 text-indigo-400" />
              <span>Career Journey</span>
            </h3>

            <div className="relative border-l border-slate-800 pl-6 space-y-8 ml-3">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline bullet */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-indigo-400 group-hover:border-cyan-300 transition-colors" />

                  <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider block mb-1">
                    {exp.period}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {exp.role} <span className="text-slate-400 font-normal">@ {exp.company}</span>
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
