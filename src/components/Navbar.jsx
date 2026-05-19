import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar background state on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 100;
      
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[92%] max-w-5xl rounded-full border border-white/10 ${
        isScrolled 
          ? "top-3 bg-black/60 backdrop-blur-md py-3 px-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-white/15" 
          : "top-6 bg-white/[0.02] backdrop-blur-sm py-4 px-8"
      }`}
    >
      <div className="flex items-center justify-between">
        
        {/* LOGO */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, "hero")}
          className="text-lg font-extrabold tracking-tight text-white hover:opacity-85 transition-opacity"
        >
          RIFKI<span className="text-sky-400">.DEV</span>
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 hover:text-white ${
                activeSection === link.id ? "text-sky-400" : "text-gray-400"
              }`}
            >
              {link.name}
              {/* Animated active bar */}
              <span 
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-sky-400 transition-transform duration-300 origin-left ${
                  activeSection === link.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* DESKTOP CTA BUTTON */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-sky-400 hover:text-black hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] px-5 py-2.5 rounded-full transition-all duration-300 active:scale-95 cursor-pointer"
          >
            Hire Me
          </a>
        </div>

        {/* MOBILE MENU TOGGLER */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white p-1"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

      </div>

      {/* MOBILE NAV MENU */}
      <div 
        className={`md:hidden absolute top-[calc(100%+12px)] left-0 w-full rounded-3xl border border-white/10 bg-black/90 backdrop-blur-xl p-6 transition-all duration-300 flex flex-col gap-4 shadow-[0_15px_30px_rgba(0,0,0,0.6)] ${
          isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.id)}
            className={`text-base font-semibold py-2 border-b border-white/5 last:border-0 ${
              activeSection === link.id ? "text-sky-400" : "text-gray-300"
            }`}
          >
            {link.name}
          </a>
        ))}
        
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="text-sm font-bold text-center text-black bg-white hover:bg-sky-400 py-3 rounded-full mt-2 transition-colors duration-300"
        >
          Hire Me
        </a>
      </div>

    </nav>
  );
}
