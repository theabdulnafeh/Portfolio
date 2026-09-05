'use client';

import Link from 'next/link';

export default function Hero() {
  const handleHireMeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#contact';
    }
    setTimeout(() => {
      const nameInput = document.getElementById('contact-fullname');
      if (nameInput) {
        nameInput.focus();
      }
    }, 600);
  };

  return (
    <div
      id="home"
      className="absolute top-[15vh] sm:top-[18vh] left-6 sm:left-12 lg:left-16 max-w-2xl lg:max-w-3xl z-20 font-[family-name:var(--font-montserrat)] scroll-mt-28"
    >
      <div className="flex flex-col gap-6 sm:gap-7">
        
        {/* Top Header: HELLO I'M */}
        <div className="pt-2 sm:pt-3">
          <span className="font-syne font-extrabold text-sm sm:text-base tracking-widest text-white uppercase drop-shadow-md">
            HELLO I'M
          </span>
        </div>

        {/* Main Headline: Name + Role */}
        <div className="flex flex-col text-white font-syne uppercase tracking-tight leading-[0.88]">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[5.5rem] font-extrabold tracking-tight drop-shadow-2xl">
            ABDUL
          </h1>
          
          <div className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-6 mt-1 sm:mt-2">
            <span className="text-5xl sm:text-7xl lg:text-8xl xl:text-[5.5rem] font-extrabold tracking-tight drop-shadow-2xl">
              NAFEH
            </span>
            <span className="font-syne font-extrabold text-xs sm:text-sm lg:text-base tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
              MERN DEVELOPER
            </span>
          </div>
        </div>

        {/* Subtitle / Description */}
        <div className="max-w-xl my-1">
          <p className="font-space text-xs sm:text-sm lg:text-base text-zinc-300 font-medium leading-relaxed tracking-wide drop-shadow-lg">
            Building Dynamic And Scalable Web Applications With Precision. A Passionate Full-Stack Developer Skilled In MongoDB, Express.js, React, Node.js, And Next.js. I Build Websites That Drive Businesses Forward And Provide Innovative Solutions To Solve Complex Challenges.
          </p>
        </div>

        {/* Action Buttons Group */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          {/* Gradient Amber-Brown Pill Button */}
          <a
            href="#contact"
            onClick={handleHireMeClick}
            className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-b from-[#241105] via-[#481e05] to-[#783005] hover:from-[#331808] hover:via-[#592607] hover:to-[#913c07] border border-[#a6480d]/50 hover:border-[#ec7322] shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_20px_rgba(236,115,34,0.4)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 tracking-wide text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] cursor-pointer"
          >
            Hire Me Now
          </a>

          {/* Transparent Bordered WhatsApp Button */}
          <a
            href="https://wa.me/923155462930"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-syne font-bold text-white bg-black/40 hover:bg-black/60 border-2 border-white/60 backdrop-blur-md shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 tracking-wide"
          >
            {/* WhatsApp Icon */}
            <svg
              className="w-5 h-5 text-white fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Whatsapp
          </a>
        </div>

        {/* Social Icon Links */}
        <div className="flex items-center gap-3 pt-1">
          {/* Facebook */}
          <a
            href="https://facebook.com/abduln251"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white/60 bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all duration-200 shadow-md group"
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png"
              alt="facebook-new"
              className="w-5 h-5 sm:w-5 sm:h-5 object-contain group-hover:invert transition-all"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/theabdulnafeh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white/60 bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all duration-200 shadow-md group"
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/github.png"
              alt="github"
              className="w-5 h-5 sm:w-5 sm:h-5 object-contain group-hover:invert transition-all"
            />
          </a>

          {/* Instagram */}
          <a
            href="http://instagram.com/theabdulnafeh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white/60 bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all duration-200 shadow-md group"
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/instagram-new--v1.png"
              alt="instagram-new--v1"
              className="w-5 h-5 sm:w-5 sm:h-5 object-contain group-hover:invert transition-all"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white/60 bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all duration-200 shadow-md group"
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"
              alt="linkedin"
              className="w-5 h-5 sm:w-5 sm:h-5 object-contain group-hover:invert transition-all"
            />
          </a>
        </div>

      </div>
    </div>
  );
}
