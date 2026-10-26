import Header from "./components/Header"
import Hero from "./components/Hero"
import Experiences from "./components/Experiences"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {

  return (
    <div className="relative overflow-x-hidden">
      {/* Gradient Image */}
      <img className="absolute top-0 right-0 opacity-60 -z-15" 
      src="/gradient.png" alt="Gradient-img" />

      {/* Blur Effect */}
      <div className="h-0 w-[40rem] absolute 
      top-[10rem] right-[-5%] shadow-[0_0_900px_17px_#e99b63] 
      -rotate-[30deg] -z-10" ></div>

      <Header/>
      <Hero />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
  
}