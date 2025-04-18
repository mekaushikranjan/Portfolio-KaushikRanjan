import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section id="home" className="min-h-screen scroll-mt-20">
          <Hero />
        </section>

        <section id="about" className="min-h-screen scroll-mt-20">
          <About />
        </section>

        <section id="education" className="min-h-screen scroll-mt-20">
          <Education />
        </section>

        <section id="skills" className="min-h-screen scroll-mt-20">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen scroll-mt-20">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen scroll-mt-20">
          <Contact />
        </section>
      </main>
      <Footer className="h-20 border-t" /> {/* Match navbar height */}
    </div>
  )
}
