import GlassIcons from '@/components/GlassIcons'
import GithubIcon from "@/components/ui/github-icon";
import BrandReactIcon from "@/components/ui/brand-react-icon";
import { FaLaravel } from "react-icons/fa6";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills(){

    const items = [
        { icon: <GithubIcon />, color: 'gray', label: 'Git' },
        { icon: <BrandReactIcon />, color: 'blue', label: 'React' },
        { icon: <FaLaravel />, color: 'red', label: 'Laravel' },
        { icon: <FaHtml5 />, color: 'orange', label: 'HTML' },
        { icon: <FaCss3Alt />, color: 'blue', label: 'CSS' },
        { icon: <FaJs />, color: 'orange', label: 'JavaScript' },
        { icon: <RiTailwindCssFill />, color: 'indigo', label: 'Tailwind' },
        { icon: <FaNodeJs />, color: 'green', label: 'Node.js' },
        { icon: <FaDatabase />, color: 'blue', label: 'Database' },
    ];

    return (
        <div className="bg-black min-h-screen w-full relative">
            <div className="p-10 flex flex-col gap-2">
                <h4 className="text-gray-400 pt-10 pl-2 text-2xl font-medium">SKILLS</h4>
                <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-8xl font-extrabold text-gray-50">TECH STACK.</h1>
                <div className='w-full max-w-5xl mx-auto mt-8 px-4 flex'>
                    <GlassIcons items={items} className="custom-class" />
                </div>
            </div>
        </div>
    )
}