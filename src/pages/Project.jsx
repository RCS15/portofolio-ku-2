import SpotlightCard from '@/components/SpotlightCard';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Project () {

    const projects = [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            category: "Fullstack Web App",
            description: "Platform e-commerce dengan analitik real-time, manajemen inventaris, dan integrasi payment gateway yang aman.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
            tech: ["React", "Node.js", "Tailwind", "PostgreSQL"],
            color: "rgba(56, 189, 248, 0.2)", // Sky blue
        },
        {
            id: 2,
            title: "Financial Analytics",
            category: "Frontend Application",
            description: "Dashboard analitik interaktif yang menyajikan data finansial secara visual menggunakan chart dinamis.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
            tech: ["React", "Tailwind", "Chart.js"],
            color: "rgba(139, 92, 246, 0.2)", // Violet
        },
        {
            id: 3,
            title: "Creative Agency Profile",
            category: "UI/UX & Frontend",
            description: "Landing page modern untuk agensi kreatif dengan animasi scroll yang mulus dan desain glassmorphism.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
            tech: ["HTML5", "CSS3", "JavaScript"],
            color: "rgba(239, 68, 68, 0.2)", // Red
        },
        {
            id: 4,
            title: "Social Media API",
            category: "Backend Development",
            description: "Arsitektur backend scalable untuk aplikasi sosial dengan fitur autentikasi JWT dan database relasional.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
            tech: ["Node.js", "Express", "MongoDB"],
            color: "rgba(34, 197, 94, 0.2)", // Green
        }
    ];

    return (
        <section id="projects" className="bg-transparent min-h-screen w-full relative flex flex-col py-24 px-6 lg:px-16 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-7xl w-full mx-auto">
                {/* Header */}
                <div className="flex flex-col gap-2 pl-2 mb-12">
                    <span className="text-sky-400 text-sm font-semibold tracking-[0.3em] uppercase">
                        PORTFOLIO
                    </span>
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white leading-none tracking-tight">
                        SELECTED <span className="bg-gradient-to-r from-gray-200 to-gray-600 bg-clip-text text-transparent">WORKS.</span>
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
                        Kumpulan proyek terbaik yang pernah saya buat. Fokus pada performa yang cepat, kode yang bersih, dan pengalaman visual yang memukau.
                    </p>
                </div>

                {/* Grid Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {projects.map((project) => (
                        <SpotlightCard 
                            key={project.id}
                            spotlightColor={project.color}
                            className="group flex flex-col !rounded-[32px] border border-white/10 !bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                        >
                            {/* Image Container with Inner Padding approach */}
                            <div className="w-full h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden mb-8 relative border border-white/5">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                {/* Overlay gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                                    <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300">
                                        <FaGithub size={20} />
                                    </button>
                                    <button className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-400 transition-colors duration-300 shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                                        <FaExternalLinkAlt size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow">
                                <span className="text-sky-400 text-xs font-semibold tracking-wider uppercase mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
                                    {project.tech.map((tech, i) => (
                                        <span 
                                            key={i} 
                                            className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/[0.03] text-gray-300 transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/[0.05]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>

            </div>
        </section>
    )
}