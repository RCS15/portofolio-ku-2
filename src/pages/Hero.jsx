import Particles from "@/components/Particles";
import SplitText from "@/components/SplitText";

export default function Hero () {

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <section className="relative w-full h-screen overflow-hidden">
            <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '-99' }}>
                <div className="absolute inset-0 z-0">
                    <Particles
                        particleColors={["#ffffff"]}
                        particleCount={800}
                        particleSpread={10}
                        speed={0.2}
                        particleBaseSize={100}
                        moveParticlesOnHover
                        alphaParticles
                        disableRotation={false}
                        pixelRatio="4"
                    />
                </div>
            </div>
            <div className="relative z-10 h-full w-full text-white flex flex-col justify-center items-center gap-2 text-3xl md:text-5xl lg:text-7xl">
                <SplitText
                    text="WELCOME TO MY"
                    className=" font-semibold text-center"
                    delay={150}
                    duration={1.7}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                    showCallback
                />
                <SplitText
                    text="PORTOFOLIO WEBSITE"
                    className="font-semibold text-center"
                    delay={150}
                    duration={1.7}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                    showCallback
                />
            </div>
        </section>
    )
}