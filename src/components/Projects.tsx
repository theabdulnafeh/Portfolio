'use client';

import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Frontend' | 'Next.js' | 'MERN';
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: 'ai-smart-study-assistant',
    title: 'AI Smart Study Assistant',
    category: 'Full-Stack',
    description: 'An AI-powered MERN stack study assistant web application leveraging Generative AI to help students master difficult topics. Users can submit notes, topics, or questions to receive instant summaries, simplified explanations, and quizzes through an interactive chatbot interface.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Generative AI'],
    liveUrl: 'https://github.com/theabdulnafeh/AISmartStudyAssistant',
    githubUrl: 'https://github.com/theabdulnafeh/AISmartStudyAssistant',
  },
];

const CATEGORIES = ['All', 'Full-Stack'] as const;

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>('All');

  const filteredProjects = activeTab === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="relative z-20 py-16 sm:py-24 px-5 sm:px-12 lg:px-16 w-full max-w-6xl mx-auto flex flex-col items-center justify-center font-[family-name:var(--font-montserrat)] text-white scroll-mt-28"
    >
      {/* Clean Transparent Container */}
      <div className="w-full relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-syne uppercase tracking-tight text-white drop-shadow-lg">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mt-3 shadow-md" />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-colors duration-200 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none active:outline-none [-webkit-tap-highlight-color:transparent] border ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-orange-500/20 border-transparent'
                  : 'bg-black/50 hover:bg-white/10 text-zinc-300 border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid - Clean Transparent Cards */}
        <div className="max-w-2xl mx-auto w-full grid grid-cols-1 gap-6 lg:gap-8 bg-black/30">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative border border-white/10 hover:border-amber-500/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header Title & Category Tag */}
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider text-amber-400 border border-amber-500/30">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold font-syne text-white tracking-tight group-hover:text-amber-300 transition-colors drop-shadow-md">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium mb-6 drop-shadow-sm">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-zinc-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-center text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 shadow-md transition-all"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-zinc-300 hover:text-white border border-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-1.5"
                >
                  GitHub
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
