import GlassIcons from '@/components/GlassIcons'
import SpotlightCard from '@/components/SpotlightCard';
import GithubIcon from "@/components/ui/github-icon";
import BrandReactIcon from "@/components/ui/brand-react-icon";
import { FaLaravel } from "react-icons/fa6";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills(){

    const frontend = [
        { icon: <BrandReactIcon />, color: 'blue', label: 'React' },
        { icon: <FaHtml5 />, color: 'orange', label: 'HTML' },
        { icon: <FaCss3Alt />, color: 'blue', label: 'CSS' },
        { icon: <RiTailwindCssFill />, color: 'indigo', label: 'Tailwind' },
    ];
    
    const backend = [
        { icon: <FaJs />, color: 'orange', label: 'JavaScript' },
        { icon: <FaLaravel />, color: 'red', label: 'Laravel' },
        { icon: <FaNodeJs />, color: 'green', label: 'Node.js' },
    ];
    
    const tools = [
        { icon: <FaDatabase />, color: 'blue', label: 'Database' },
        { icon: <GithubIcon />, color: 'gray', label: 'Git' },
    ];

    return (
        <section id="skills" className="bg-transparent min-h-screen w-full relative flex items-center justify-center overflow-hidden py-24 px-6 lg:px-16">
            {/* Background Depth Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col gap-12">
                
                {/* Header Section */}
                <div className="flex flex-col items-center text-center gap-3">
                    <span className="text-sky-400 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
                        Tech Arsenal
                    </span>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight">
                        SKILLS & <span className="bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">TOOLS</span>
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mt-2 leading-relaxed">
                        Koleksi teknologi modern yang saya gunakan untuk merancang dan membangun ekosistem digital yang tangguh, responsif, dan elegan.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 items-stretch">
                    
                    {/* FRONTEND CARD */}
                    <div className="flex">
                        <SpotlightCard 
                            className="w-full flex flex-col justify-between !rounded-[32px] border border-white/10 !bg-white/[0.02] backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/30 hover:shadow-[0_15px_30px_rgba(56,189,248,0.08)]"
                            spotlightColor="rgba(56, 189, 248, 0.2)"
                        >
                            <div className="relative z-10">
                                <h3 className="text-sky-400 font-semibold tracking-wider text-xl border-b border-white/10 pb-4 mb-6">
                                    Frontend Development
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Membangun antarmuka pengguna yang interaktif, responsif, dan dinamis menggunakan framework & styling modern.
                                </p>
                            </div>
                            <div className="flex justify-center mt-auto relative z-10">
                                <GlassIcons 
                                    items={frontend} 
                                    className="!grid-cols-2 !gap-x-[3em] !gap-y-[4em] sm:!grid-cols-2 lg:!grid-cols-2 xl:!grid-cols-2 !py-4" 
                                />
                            </div>
                        </SpotlightCard>
                    </div>

                    {/* BACKEND CARD */}
                    <div className="flex">
                        <SpotlightCard 
                            className="w-full flex flex-col justify-between !rounded-[32px] border border-white/10 !bg-white/[0.02] backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/30 hover:shadow-[0_15px_30px_rgba(239,68,68,0.08)]"
                            spotlightColor="rgba(239, 68, 68, 0.2)"
                        >
                            <div className="relative z-10">
                                <h3 className="text-red-400 font-semibold tracking-wider text-xl border-b border-white/10 pb-4 mb-6">
                                    Backend Development
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Merancang arsitektur server-side yang andal, aman, dan berkinerja tinggi serta mengelola data dan API.
                                </p>
                            </div>
                            <div className="flex justify-center mt-auto relative z-10">
                                <GlassIcons 
                                    items={backend} 
                                    className="!grid-cols-2 !gap-x-[3em] !gap-y-[4em] sm:!grid-cols-2 lg:!grid-cols-2 xl:!grid-cols-2 !py-4" 
                                />
                            </div>
                        </SpotlightCard>
                    </div>

                    {/* TOOLS CARD */}
                    <div className="flex">
                        <SpotlightCard 
                            className="w-full flex flex-col justify-between !rounded-[32px] border border-white/10 !bg-white/[0.02] backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:shadow-[0_15px_30px_rgba(139,92,246,0.08)]"
                            spotlightColor="rgba(139, 92, 246, 0.2)"
                        >
                            <div className="relative z-10">
                                <h3 className="text-violet-400 font-semibold tracking-wider text-xl border-b border-white/10 pb-4 mb-6">
                                    Tools & Database
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Mengelola database yang efisien serta menggunakan sistem kontrol versi untuk kolaborasi tim yang lancar.
                                </p>
                            </div>
                            <div className="flex justify-center mt-auto relative z-10">
                                <GlassIcons 
                                    items={tools} 
                                    className="!grid-cols-2 !gap-x-[3em] !gap-y-[4em] sm:!grid-cols-2 lg:!grid-cols-2 xl:!grid-cols-2 !py-4" 
                                />
                            </div>
                        </SpotlightCard>
                    </div>

                </div>
            </div>
        </section>
    )
}