import SpotlightCard from '@/components/SpotlightCard';
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import BorderGlow from '@/components/BorderGlow';

export default function Contact() {
    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center py-20">
            <div className='flex flex-col w-full max-w-2xl px-10'>
                <p className='font-bold text-2xl text-white text-center mb-8 uppercase tracking-widest'>Tertarik bekerjasama dengan saya?</p>
                

                <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#120F17"
                borderRadius={28}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#ffffff', '#ffffff', '#ffffff']}
                >
                    {/* spotlight */}
                    <SpotlightCard className="min-h-[400px] flex flex-col justify-between" spotlightColor="rgba(255, 255, 255, 0.15)">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl font-extrabold text-gray-400 hover:text-white mb-4 transition-all duration-200">Mari Bicara!</h2>
                            <p className="text-gray-500 hover:text-white mb-4 transition-all duration-200text-lg leading-relaxed">
                                Saya selalu terbuka untuk proyek baru, ide-ide kreatif, atau peluang untuk menjadi bagian dari visi Anda.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                            {/* Email */}
                            <a href="mailto:rifki@example.com" className="flex items-center gap-4 group">
                                <div className="p-3 rounded-xl bg-neutral-800 text-white group-hover:bg-white group-hover:text-red-500 transition-all duration-300">
                                    <MdEmail size={28} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email</p>
                                    <p className="text-white font-medium">rifki@example.com</p>
                                </div>
                            </a>

                            {/* WhatsApp */}
                            <a href="https://wa.me/628123456789" className="flex items-center gap-4 group">
                                <div className="p-3 rounded-xl bg-neutral-800 text-white group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                                    <FaWhatsapp size={28} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">WhatsApp</p>
                                    <p className="text-white font-medium">+62 812-3456-789</p>
                                </div>
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-8 pt-8 border-t border-neutral-800">
                            <a href="#" className="text-gray-400 hover:text-[#0A66C2] transition-colors flex items-center gap-2 text-lg">
                                <FaLinkedinIn /> <span>LinkedIn</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-lg">
                                <FaGithub /> <span>Github</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#DD2A7B] transition-colors flex items-center gap-2 text-lg">
                                <FaInstagram /> <span>Instagram</span>
                            </a>
                        </div>
                    </SpotlightCard>
                </BorderGlow>
                <p className="text-center text-gray-600 mt-10 text-sm">
                    © 2026 Rifki Cahya Septiawan. All rights reserved.
                </p>
            </div>
        </div>
    )
}