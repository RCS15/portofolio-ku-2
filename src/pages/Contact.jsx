import SpotlightCard from '@/components/SpotlightCard';
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoCopyOutline } from 'react-icons/io5';

export default function Contact() {
  const handleCopyEmail = () => {
    const email = 'rifkicahya@gmail.com';
    navigator.clipboard.writeText(email);
    alert('Email copied to clipboard!');
  };

  return (
    <section id="contact" className="min-h-screen w-full bg-transparent flex items-center px-6 lg:px-16">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 w-full">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <span className="text-sky-400 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Get In Touch
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] max-w-2xl">
            Let’s Build Something Amazing Together
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-5 max-w-xl">
            Saya selalu terbuka untuk kolaborasi proyek, peluang baru,
            maupun sekadar berdiskusi tentang teknologi dan pengembangan web modern.
          </p>

          {/* SOCIAL BUTTONS */}
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="#"
              className="group flex items-center gap-2 md:gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 md:px-6 py-2 md:py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#0A66C2] hover:bg-[#0A66C2]/10"
            >
              <FaLinkedinIn className="text-gray-400 transition-colors duration-300 group-hover:text-[#0A66C2]" />
              <span className="font-medium text-sm md:text-base">LinkedIn</span>
            </a>

            <a
              href="#"
              className="group flex items-center gap-2 md:gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 md:px-6 py-2 md:py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10"
            >
              <FaGithub className="text-gray-400 transition-colors duration-300 group-hover:text-white" />
              <span className="font-medium text-sm md:text-base">GitHub</span>
            </a>

            <a
              href="#"
              className="group flex items-center gap-2 md:gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 md:px-6 py-2 md:py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#E1306C] hover:bg-[#E1306C]/10"
            >
              <FaInstagram className="text-gray-400 transition-colors duration-300 group-hover:text-[#E1306C]" />
              <span className="font-medium text-sm md:text-base">Instagram</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <SpotlightCard
            className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8"
            spotlightColor="rgba(255,255,255,0.15)"
          >
            <div className="flex flex-col">
              <span className="text-[#25D366] text-xs md:text-sm font-semibold tracking-wider uppercase">
                Available For Projects
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">
                Mari Bicara
              </h2>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-4">
                Hubungi saya untuk mendiskusikan proyek, peluang kerja,
                atau ide kreatif lainnya.
              </p>

              {/* CONTACT ITEMS */}
              <div className="flex flex-col gap-4 mt-6">
                {/* EMAIL */}
                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#EA4335]/40 hover:bg-[#EA4335]/5">
                  <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-[#EA4335]/30 group-hover:bg-[#EA4335]/10">
                    <MdEmail className="text-2xl md:text-3xl text-gray-300 transition-colors duration-300 group-hover:text-[#EA4335]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs md:text-sm text-gray-500">Email</span>
                    <span className="text-base md:text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#EA4335]">
                      rifkicahya@gmail.com
                    </span>
                  </div>
                </div>

                {/* WHATSAPP */}
                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#25D366]/40 hover:bg-[#25D366]/5">
                  <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-[#25D366]/30 group-hover:bg-[#25D366]/10">
                    <FaWhatsapp className="text-2xl md:text-3xl text-gray-300 transition-colors duration-300 group-hover:text-[#25D366]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs md:text-sm text-gray-500">WhatsApp</span>
                    <span className="text-base md:text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#25D366]">
                      0878-1123-4XXX
                    </span>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-5">
                <div>
                  <span className="text-gray-500 text-xs md:text-sm">Location</span>
                  <p className="text-white font-medium text-sm md:text-base mt-0.5">
                    Jawa Tengah, Indonesia
                  </p>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs md:text-sm text-gray-300 transition-all duration-300 hover:border-white hover:bg-white/10 hover:text-white"
                >
                  <IoCopyOutline className="transition-transform duration-300 group-hover:rotate-6" />
                  <span>Copy Email</span>
                </button>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}