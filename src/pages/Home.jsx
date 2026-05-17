
export default function Home()
{
    return (
        <div className="bg-black min-h-screen w-full relative">
            <div className="flex flex-col pt-20 p-5 sm:p-10 gap-2">
                <div className=" text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold" >
                    <h1 className="text-white">FULLSTACK</h1>
                    <h1 className="text-gray-500">DEVELOPER</h1>
                </div>
                <h4 className="text-gray-600 p-3 sm:p-5 pl-6 text-sm sm:text-base">FRESH GRADUATE</h4>
                <p className="text-gray-400 w-full pr-5 sm:w-1/2 text-justify">
                    Membangun solusi digital yang utuh, dari logika backend yang tangguh hingga antar muka yang memukau dan responsif. Menghadirkan performa stabil dengan pengalaman pengguna yang tanpa celah. 
                </p>
                <h4 className="text-gray-400 pt-4 text-xs sm:text-sm md:text-base lg:text-lg">Available For Work</h4>
            </div>
        </div>
        
    )
}