import SpotlightCard from '@/components/SpotlightCard';
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
// import BorderGlow from '@/components/BorderGlow';

export default function Contact() {
    return (

        <div className='grid grid-cols-1 xl:grid-cols-2 min-h-screen w-full p-10 bg-black'>
            <div className='flex flex-col justify-center gap-3 p-5'>
                {/* bagian kiri */}
                <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase">GET IN TOUCH</span>
                <h1 className="text-7xl font-extrabold text-white leading-none ">
                    LET'S START SOMETHING NEW
                </h1>
                <p className="text-gray-400 leading-relaxed max-w-xl text-justify mt-4 text-lg">
                    Saya selalu terbuka untuk kolaborasi proyek, peluang baru, atau sekedar bertukar pikiran tenang tren reknologi web. Hubungi saya melalui salah satu media berikut..
                </p>
                <div className='flex items-center gap-5 mt-10'>
                    <a href="" className='group flex items-center gap-2 text-white border border-white/20 rounded-full px-6 py-3 font-semibold hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(10,102,194,0.3)] transition-all duration-300 active:scale-95'>
                        <FaLinkedinIn className='text-slate-300 group-hover:text-[#0A66C2] transition-colors duration-300' />
                        <span className='transition-colors duration-300'>LinkedIn</span>
                    </a>
                    <a href="" className='group flex items-center gap-2 text-white border border-white/20 rounded-full px-6 py-3 font-semibold hover:border-white hover:bg-white/10 hover:text-white hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 active:scale-95'>
                        <FaGithub className='text-slate-300 group-hover:text-white transition-colors duration-300' />
                        <span className='transition-colors duration-300'>GitHub</span>
                    </a>
                    <a href="" className='group flex items-center gap-2 text-white border border-white/20 rounded-full px-6 py-3 font-semibold hover:border-[#E1306C] hover:bg-[#E1306C]/10 hover:text-[#E1306C] hover:scale-105 hover:shadow-[0_0_15px_rgba(225,48,108,0.3)] transition-all duration-300 active:scale-95'>
                        <FaInstagram className='text-slate-300 group-hover:text-[#E1306C] transition-colors duration-300' />
                        <span className='transition-colors duration-300'>Instagram</span>
                    </a>
                </div>
            </div>
            <div className='flex justify-center p-5'>
                {/* bagian kanan */}
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <div className='text-white'>
                        <span>AVAILABLE FOR NEW PROJECT</span>
                        <h1>Mari Bicara</h1>
                        <p className='text-lg'>
                            Hubungi saya kapan saja untuk mendiskusikan peluang proyek baru tawaran kerja, atau sekedar menyapa
                        </p>
                        <div>
                            <div>
                                <span>ikon</span>
                            </div>
                            <div className='text-white'>
                                <span>Email</span>
                                <span>rifkicahya@gmail.com</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>ikon</span>
                            </div>
                            <div>
                                <span>WhatsApp</span>
                                <span>087811234</span>
                            </div>
                        </div>
                        <div>
                            <span>Jawa tengah</span>
                            <span>Copy Email</span>
                        </div>
                    </div>
                </SpotlightCard>
            </div>
        </div>
    )
}