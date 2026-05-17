
export default function Home()
{
    return (
        <div className="bg-black min-h-screen w-full relative">
            <div className="flex flex-col pt-5 pl-10 gap-2">
                <h4 className="text-gray-400 pt-10 pl-2 text-2xl font-medium">ABOUT ME</h4>
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-50" >
                    <h1>RIFKI CAHYA</h1>
                    <h1>SEPTIAWAN</h1>
                </div>
                <p className="text-gray-400 w-full pr-5 mb-2 sm:w-1/2 text-justify">
                   Fresh Graduate Tiga Serangkai University lulusan tahun 2028 dengan passion di bidang fullstack developer. Berfokus untuk mencinpatakan website yang menarik dari segi tampilan dan aman dari dalam backend nya. 
                </p>
                <div className="w-11/12 sm:w-3/4 md:w-1/2 bg-gray-600 rounded-full py-2 px-4">
                    <blockquote className="text-gray-200 text-center italic text-xs sm:text-sm md:text-base">"Sempurna di permukaan, perkasa di dalam sistem"</blockquote>
                </div>
                <div className="flex gap-20 p-5 pl-10">
                    <button className="text-black bg-white rounded-full px-5 py-2">Download CV</button>
                    <button className="text-white border border-white rounded-full px-5 py-2">PROJECT</button>
                </div>
            </div>
        </div>  
    )
}