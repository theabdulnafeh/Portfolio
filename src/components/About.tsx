'use client';

import Link from 'next/link';

export default function About() {
  return (
    <section
      id="about"
      className="absolute top-[72vh] sm:top-[105vh] left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] max-w-6xl z-20 flex flex-col items-center justify-center font-[family-name:var(--font-montserrat)] text-white scroll-mt-28"
    >
      {/* Clean Transparent Section (No Glass Container Box) */}
      <div className="w-full relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/10 text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase mb-4 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Get To Know Me</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-syne uppercase tracking-tight text-white drop-shadow-lg">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mt-3 shadow-md" />
        </div>

        {/* Two-Column Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bio & Core Values (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left drop-shadow-md">
            <h3 className="text-xl sm:text-2xl font-extrabold font-syne text-zinc-100 tracking-wide leading-snug drop-shadow-lg">
              Architecting Digital Experiences with Modern Full-Stack Technologies
            </h3>

            <p className="text-sm sm:text-base text-zinc-200 font-medium leading-relaxed tracking-wide drop-shadow">
              I’m <strong className="text-white font-bold">Abdul Nafeh</strong>, a passionate MERN Stack & Next.js Engineer specializing in crafting high-speed, interactive, and visually stunning web applications. I bridge the gap between creative UI design and complex backend infrastructure.
            </p>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed drop-shadow">
              With a deep focus on component architecture, state management, and real-time data flow, I turn complex problems into intuitive, user-centric web applications that drive real business growth.
            </p>

            {/* Feature Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-black/40 border border-white/10 hover:border-amber-500/40 transition-all backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 font-bold">
                  ⚡
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Fast & Scalable</h4>
                  <p className="text-xs text-zinc-300">Optimized performance & SEO</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-black/40 border border-white/10 hover:border-amber-500/40 transition-all backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 font-bold">
                  🎨
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Modern UI/UX</h4>
                  <p className="text-xs text-zinc-300">Pixel-perfect aesthetics</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-black/40 border border-white/10 hover:border-amber-500/40 transition-all backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 font-bold">
                  💻
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">MERN & Next.js</h4>
                  <p className="text-xs text-zinc-300">Full-stack web solutions</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-black/40 border border-white/10 hover:border-amber-500/40 transition-all backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 font-bold">
                  🚀
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Clean Code</h4>
                  <p className="text-xs text-zinc-300">Maintainable architecture</p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 shadow-lg hover:shadow-orange-500/25 transition-all transform hover:-translate-y-0.5"
              >
                Let’s Work Together
              </Link>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-zinc-200 bg-black/40 hover:bg-black/60 border border-white/20 hover:border-white/40 transition-all backdrop-blur-sm"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column: Key Metrics & Stat Cards Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            
            {/* Stat Card 1 */}
            <div className="p-4 sm:p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col items-center text-center group/card backdrop-blur-sm hover:bg-black/60 transform hover:-translate-y-1 shadow-lg">
              <span className="text-2xl sm:text-4xl font-extrabold font-syne text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-1">
                3+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-200">
                Years Experience
              </span>
              <span className="text-[10px] sm:text-[11px] text-zinc-400 mt-1">
                Full-Stack Development
              </span>
            </div>

            {/* Stat Card 2 */}
            <div className="p-4 sm:p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col items-center text-center group/card backdrop-blur-sm hover:bg-black/60 transform hover:-translate-y-1 shadow-lg">
              <span className="text-2xl sm:text-4xl font-extrabold font-syne text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-1">
                25+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-200">
                Projects Completed
              </span>
              <span className="text-[10px] sm:text-[11px] text-zinc-400 mt-1">
                Websites & Apps
              </span>
            </div>

            {/* Stat Card 3 */}
            <div className="p-4 sm:p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col items-center text-center group/card backdrop-blur-sm hover:bg-black/60 transform hover:-translate-y-1 shadow-lg">
              <span className="text-2xl sm:text-4xl font-extrabold font-syne text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-1">
                100%
              </span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-200">
                Commitment
              </span>
              <span className="text-[10px] sm:text-[11px] text-zinc-400 mt-1">
                Quality & Deadlines
              </span>
            </div>

            {/* Stat Card 4 */}
            <div className="p-4 sm:p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col items-center text-center group/card backdrop-blur-sm hover:bg-black/60 transform hover:-translate-y-1 shadow-lg">
              <span className="text-2xl sm:text-4xl font-extrabold font-syne text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-1">
                24/7
              </span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-200">
                Support
              </span>
              <span className="text-[10px] sm:text-[11px] text-zinc-400 mt-1">
                Always Available
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
