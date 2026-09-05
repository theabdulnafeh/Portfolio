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
        width="64"
        height="64"
        src="https://img.icons8.com/ios-filled/128/FFFFFF/html-5--v1.png"
        alt="html-5--v1"
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
      />
    ),
  },
  {
    name: 'CSS3',
    color: '#1572B6',
    icon: (
      <img
        width="64"
        height="64"
        src="https://img.icons8.com/ios-filled/128/FFFFFF/css3.png"
        alt="css3"
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
      />
    ),
  },
  {
    name: 'Tailwind CSS',
    color: '#06B6D4',
    icon: (
      <img
        width="64"
        height="64"
        src="https://img.icons8.com/material-rounded/128/FFFFFF/tailwind_css.png"
        alt="tailwind_css"
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
      />
    ),
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    icon: (
      <img
        width="64"
        height="64"
        src="https://img.icons8.com/ios-filled/128/FFFFFF/javascript.png"
        alt="javascript"
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
      />
    ),
  },
  {
    name: 'React',
    color: '#61DAFB',
    icon: (
      <img
        width="64"
        height="64"
        src="https://img.icons8.com/ios-filled/128/FFFFFF/react-native.png"
        alt="react"
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
      />
    ),
  },
  {
    name: 'Node.js',
    color: '#339933',
    icon: (
      <img
        width="64"
        height="64"
        src="https://img.icons8.com/windows/128/FFFFFF/nodejs.png"
        alt="nodejs"
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
      />
    ),
  },
  {
    name: 'Express',
    color: '#FFFFFF',
    icon: (
      <img
        width="64"
        height="64"
        src="https://img.icons8.com/ios/128/FFFFFF/express-js.png"
        alt="express-js"
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
      />
    ),
  },
  {
    name: 'MongoDB',
    color: '#47A248',
    icon: (
      <img
        width="64"
        height="64"
        src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/128/FFFFFF/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png"
        alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo"
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
      />
    ),
  },
];

export default function TechTicker() {
  // Duplicate array 4 times for infinite smooth marquee scroll
  const tickerItems = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div
      id="skills"
      className="absolute top-[115vh] left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-20 flex flex-col items-center justify-center text-center font-[family-name:var(--font-montserrat)] scroll-mt-28"
    >
      {/* Section Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-zinc-100 mb-8 sm:mb-10 font-syne drop-shadow-lg">
        Technologies & Frameworks
      </h2>

      {/* Clean Ticker Container with Alpha Feather Edges */}
      <div
        className="relative w-full overflow-hidden py-4"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        {/* Marquee Track - Icons with Titles Below */}
        <div className="flex animate-marquee items-center gap-10 sm:gap-14 whitespace-nowrap">
          {tickerItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              title={item.name}
              className="px-2 py-1 opacity-85 hover:opacity-100 transition-all duration-300 transform hover:scale-110 flex flex-col items-center justify-center gap-2 cursor-pointer shrink-0 group"
            >
              <div className="shrink-0 flex items-center justify-center">{item.icon}</div>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-zinc-300 group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


