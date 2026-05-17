import ProfileCard from '@/components/ProfileCard'

export default function About()
{
    return (
        <section className="bg-black min-h-screen w-full relative flex items-center justify-center overflow-hidden py-16 lg:py-24">
            {/* Background Glows for Depth */}
            <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-sky-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-12 md:px-16 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                {/* Profile Card Block */}
                <div className="flex items-center justify-center lg:w-[40%] w-full max-w-[360px] sm:max-w-[400px] lg:max-w-none mx-auto">
                    <ProfileCard
                        name="Rifki Cahya Septiawan"
                        title="Fullstack Developer"
                        handle="rifkicahya"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl="/img/profil-saya2.png"
                        showUserInfo
                        enableTilt={true}
                        enableMobileTilt={false}
                        onContactClick={() => console.log('Contact clicked')}
                        behindGlowColor="rgba(56, 189, 248, 0.4)"
                        behindGlowEnabled
                        innerGradient="linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)"
                    />
                </div>

                                {/* Text Content Block */}
                <div className="flex flex-col gap-6 lg:w-[55%] w-full text-left">
                    <div className="flex flex-col gap-2">
                        <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase">ABOUT ME</span>
                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white">
                            <h1>RIFKI CAHYA</h1>
                            <h1 className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent">SEPTIAWAN</h1>
                        </div>
                    </div>

                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed text-justify max-w-xl">
                        Fresh Graduate dari Universitas Tiga Serangkai lulusan tahun 2028 dengan passion mendalam di bidang <span className="text-white font-medium">Fullstack Development</span>. Berfokus pada penciptaan website yang interaktif dan memukau dari segi tampilan visual (frontend) sekaligus aman, tangguh, dan efisien di sisi sistem belakang (backend).
                    </p>

                    {/* Glassmorphism Quote Card */}
                    <div className="relative border-l-4 border-sky-400 bg-white/5 backdrop-blur-md rounded-r-2xl py-4 px-6 max-w-xl shadow-lg shadow-black/30 border border-white/5">
                        <blockquote className="text-gray-300 italic text-sm sm:text-base leading-relaxed">
                            "Sempurna di permukaan, perkasa di dalam sistem"
                        </blockquote>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        <button className="text-black bg-white rounded-full px-6 py-3 font-semibold hover:bg-sky-400 hover:text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 active:scale-95">
                            Download CV
                        </button>
                        <button className="text-white border border-white/20 rounded-full px-6 py-3 font-semibold hover:border-white hover:bg-white/10 hover:scale-105 transition-all duration-300 active:scale-95">
                            PROJECT
                        </button>
                    </div>
                </div>

            </div>
        </section>  
    )
}