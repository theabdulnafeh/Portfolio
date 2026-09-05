'use client';

interface TechItem {
  name: string;
  color: string;
  icon: React.ReactNode;
}

const TECH_ITEMS: TechItem[] = [
  {
    name: 'HTML5',
    color: '#E34F26',
    icon: (
      <img
        width="32"
        height="32"
        src="https://img.icons8.com/ios-filled/50/FFFFFF/html-5--v1.png"
        alt="html-5--v1"
        className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
      />
    ),
  },
  {
    name: 'CSS3',
    color: '#1572B6',
    icon: (
      <img
        width="32"
        height="32"
        src="https://img.icons8.com/ios-filled/50/FFFFFF/css3.png"
        alt="css3"
        className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
      />
    ),
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    icon: (
      <img
        width="32"
        height="32"
        src="https://img.icons8.com/ios-filled/50/FFFFFF/javascript.png"
        alt="javascript"
        className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
      />
    ),
  },
  {
    name: 'React',
    color: '#61DAFB',
    icon: (
      <img
        width="32"
        height="32"
        src="https://img.icons8.com/ios-filled/50/FFFFFF/react-native.png"
        alt="react"
        className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
      />
    ),
  },
  {
    name: 'Node.js',
    color: '#339933',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7.7v11.5L12 25l10-5.8V7.7L12 2zm7.9 16.1l-7.9 4.6-7.9-4.6V8.9l7.9-4.6 7.9 4.6v9.2z" />
      </svg>
    ),
  },
  {
    name: 'Express',
    color: '#FFFFFF',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.8 5.6l2.4-3.6-2.4-3.6h2.1l1.4 2.3 1.4-2.3h2.1l-2.4 3.6 2.4 3.6h-2.1l-1.4-2.3-1.4 2.3h-2.1zM5 8.4h6.5v1.8H7.2v2.1h3.8v1.8H7.2v2.1h4.3v1.8H5V8.4z" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    color: '#47A248',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0s-6 7.5-6 13.5S8.6 24 12 24s6-4.5 6-10.5S12 0 12 0zm.5 21.6c-.3.1-.7.1-1 0V2.8c.3.5.7 1.1 1 1.7v17.1z" />
      </svg>
    ),
  },
];

export default function TechTicker() {
  // Duplicate array 4 times for infinite smooth marquee scroll
  const tickerItems = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div
      id="skills"
      className="absolute top-[115vh] left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-20 flex flex-col items-center justify-center text-center font-[family-name:var(--font-montserrat)]"
    >
      {/* Section Subtitle Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-semibold uppercase tracking-widest text-zinc-300 mb-6 shadow-md">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span>Technologies & Frameworks</span>
      </div>

      {/* Glassmorphic Ticker Container */}
      <div className="relative w-full bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden group">
        {/* Edge Gradient Mask Overlays */}
        <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track - Icons Only */}
        <div className="flex animate-marquee items-center gap-8 sm:gap-12 whitespace-nowrap">
          {tickerItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              title={item.name}
              className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/15 opacity-75 hover:opacity-100 transition-all duration-200 transform hover:scale-110 flex items-center justify-center cursor-pointer shrink-0 shadow-lg"
              style={{ color: item.color }}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
