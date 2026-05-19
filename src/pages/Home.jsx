import SpotlightCard from '@/components/SpotlightCard';

export default function Home() {
  return (
    <section className="bg-black min-h-screen w-full relative flex items-center justify-center overflow-hidden py-24 px-6 lg:px-16">
      {/* Background Glows for Premium Aesthetics */}
      <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-sky-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN - TEXT CONTENT */}
        <div className="flex flex-col justify-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs md:text-sm font-medium w-fit mb-6 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available For Work
          </div>

          <div className="flex flex-col text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[1.05]" >
            <h1 className="text-white">FULLSTACK</h1>
            <h1 className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">DEVELOPER</h1>
          </div>

          <span className="text-sky-400 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mt-6 pl-1">
            FRESH GRADUATE
          </span>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-6 max-w-xl text-justify pl-1">
            Membangun solusi digital yang utuh, dari logika backend yang tangguh hingga antar muka yang memukau dan responsif. Menghadirkan performa stabil dengan pengalaman pengguna yang tanpa celah.
          </p>
        </div>

        {/* RIGHT COLUMN - CAPABILITIES CARD */}
        <div className="flex justify-center lg:justify-end">
        <SpotlightCard
            className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]"
            spotlightColor="rgba(255,255,255,0.15)"
        >
            <h3 className="text-white font-semibold tracking-wider text-xl border-b border-white/10 pb-4 mb-6">
              System Architecture & Logic
            </h3>

            <div className="flex flex-col gap-6">
              {/* Skill 1: Frontend */}
              <div>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-sky-400">Frontend UI/UX</span>
                  <span className="text-white">90%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden mt-2">
                  <div className="h-full rounded-full bg-gradient-to-r from-sky-500 to-blue-600 w-[90%] shadow-[0_0_10px_rgba(56,189,248,0.3)]" />
                </div>
              </div>

              {/* Skill 2: Backend */}
              <div>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-red-400">Backend System</span>
                  <span className="text-white">85%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden mt-2">
                  <div className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-600 w-[85%] shadow-[0_0_10px_rgba(239,68,68,0.3)]" />
                </div>
              </div>

              {/* Skill 3: Database & Tools */}
              <div>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-violet-400">Database & DevOps</span>
                  <span className="text-white">80%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden mt-2">
                  <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 w-[80%] shadow-[0_0_10px_rgba(139,92,246,0.3)]" />
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5 flex justify-between items-center text-xs text-gray-500">
              <span>Performance Focused</span>
              <span>Clean Code Compliant</span>
            </div>
        </SpotlightCard>
        </div>

      </div>
    </section>
  );
}