import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative border-t border-white/5 bg-black/30 backdrop-blur-md py-12 px-6 lg:px-16 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-sky-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-8 border-b border-white/5 items-center">
          
          {/* Logo & Brief Info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-extrabold tracking-tight text-white">
              RIFKI<span className="text-sky-400">.DEV</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Mewujudkan ide-ide kreatif menjadi barisan kode yang elegan, tangguh, dan performa tinggi.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-start md:justify-center">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">Skills</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>

          {/* Social Icons & Scroll to Top */}
          <div className="flex items-center justify-start md:justify-end gap-6">
            {/* Social Media Link Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all duration-300 hover:scale-105"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-[#E1306C] hover:border-[#E1306C]/30 transition-all duration-300 hover:scale-105"
              >
                <FaInstagram size={18} />
              </a>
            </div>

            {/* Back to top button */}
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-400 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(56,189,248,0.3)] active:scale-95 cursor-pointer ml-2"
              title="Back to Top"
            >
              <FaArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            &copy; {currentYear} Rifki Cahya Septiawan. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs text-center sm:text-right flex items-center gap-1">
            <span>Designed & Built with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>in Indonesia.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
