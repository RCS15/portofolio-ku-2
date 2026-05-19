import SplitText from "@/components/SplitText";

export default function Hero () {

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <section className="relative w-full h-screen overflow-hidden bg-transparent flex items-center justify-center">

            {/* Glowing Depth Orbs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center px-6 mt-10">
                
                {/* Modern Status Badge */}
                <div className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 cursor-default">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </span>
                    <span className="text-gray-300 text-xs sm:text-sm font-medium tracking-widest uppercase">
                        Welcome to my digital workspace
                    </span>
                </div>

                {/* Animated Typography */}
                <div className="flex flex-col items-center gap-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl w-full">
                    <SplitText
                        text="WELCOME TO MY"
                        className="font-extrabold text-white text-center tracking-tight"
                        delay={80}
                        duration={1.5}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40, scale: 0.9 }}
                        to={{ opacity: 1, y: 0, scale: 1 }}
                        threshold={0.1}
                        rootMargin="-50px"
                        textAlign="center"
                    />
                    <SplitText
                        text="PORTOFOLIO WEBSITE"
                        className="font-extrabold text-sky-400 text-center tracking-tight drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                        delay={80}
                        duration={1.5}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40, scale: 0.9 }}
                        to={{ opacity: 1, y: 0, scale: 1 }}
                        threshold={0.1}
                        rootMargin="-50px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </div>

                {/* Subtitle */}
                <p className="mt-8 text-gray-400 text-base md:text-lg max-w-2xl text-center font-medium leading-relaxed px-4">
                    Mewujudkan ide-ide kreatif menjadi barisan kode yang elegan, tangguh, dan menghadirkan pengalaman pengguna yang luar biasa.
                </p>

                {/* Action Buttons */}
                <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
                    <button className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95">
                        Explore Work
                    </button>
                    <button className="px-8 py-3.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95">
                        Contact Me
                    </button>
                </div>

            </div>

        </section>
    )
}