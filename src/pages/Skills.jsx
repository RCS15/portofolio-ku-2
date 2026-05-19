import { useState } from 'react';
import GlassIcons from '@/components/GlassIcons'
import GithubIcon from "@/components/ui/github-icon";
import BrandReactIcon from "@/components/ui/brand-react-icon";
import { FaLaravel } from "react-icons/fa6";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills(){
    const [activeTab, setActiveTab] = useState('all');

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

    // Get skills based on active tab
    const getFilteredSkills = () => {
        switch(activeTab) {
            case 'frontend':
                return frontend;
            case 'backend':
                return backend;
            case 'tools':
                return tools;
            default:
                return [...frontend, ...backend, ...tools];
        }
    };

    const categories = [
        { id: 'all', label: 'All Tech' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'tools', label: 'Tools & DB' }
    ];

    return (
        <div className="bg-black min-h-screen w-full relative flex items-center justify-center overflow-hidden py-24 px-6 lg:px-16">
            {/* Background Glows for Consistency and Depth */}
            <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-sky-500/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col gap-10">
                {/* Header Section */}
                <div className="flex flex-col gap-2 pl-2">
                    <span className="text-sky-400 text-sm font-semibold tracking-[0.3em] uppercase">
                        SKILLS
                    </span>
                    <h1 className="text-5xl sm:text-7xl font-extrabold text-white leading-none tracking-tight">
                        TECH STACK.
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg max-w-xl mt-4 leading-relaxed">
                        Perangkat teknologi yang saya kuasai dan gunakan untuk membangun sistem backend yang kokoh serta tampilan frontend yang menawan.
                    </p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap gap-3 pl-2 mt-4">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 cursor-pointer ${
                                activeTab === category.id
                                    ? 'border border-sky-500/30 bg-sky-500/10 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                                    : 'border border-white/5 bg-white/[0.02] text-gray-400 hover:text-white hover:border-white/10 hover:bg-white/[0.04]'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Tech Stack Grid */}
                <div className="w-full mt-6 min-h-[220px] flex items-center justify-center rounded-[32px] border border-white/5 bg-white/[0.01] backdrop-blur-xl p-8 sm:p-12 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.02]">
                    <div className="w-full flex justify-center">
                        <GlassIcons key={activeTab} items={getFilteredSkills()} className="w-full gap-[3em] sm:gap-[4em]" />
                    </div>
                </div>
            </div>
        </div>
    );
}