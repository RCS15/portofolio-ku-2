import Particles from "./components/Particles"
import Hero from "./pages/Hero"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Project from "./pages/Project"
import Contact from "./pages/Contact"

function App() {

  return (
    <div className="bg-black min-h-screen w-full relative">
      {/* Global Particle Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#38bdf8", "#8b5cf6"]}
          particleCount={600}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
          pixelRatio="4"
        />
      </div>

      {/* Pages Container */}
      <div className="relative z-10">
        <Hero />
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </div>
  )
}

export default App
