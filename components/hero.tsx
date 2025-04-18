"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, FileDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }, [])

  useEffect(() => {
    const element = heroRef.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
      return () => element.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleMouseMove])

  const handleDownloadCV = () => {
    const cvUrl = '/resumekaushikranjan.pdf'
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'YourName-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Only render dynamic content after mounting
  if (!mounted) {
    return null // or a loading placeholder
  }

  return (
    <div ref={heroRef} className="relative w-full overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground mousePosition={mousePosition} />

      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/10 via-background/50 to-background"></div>
      <div className="absolute -top-24 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]"></div>
      <div className="absolute -bottom-24 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]"></div>

      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center py-6 md:py-6 overflow-hidden mt-6 md:mt-6 sm:mt-10"> {/* Added responsive margins */}
        <motion.div
          className="max-w-3xl space-y-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl inline-flex flex-wrap justify-center gap-x-4">
              Hi, I'm
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                KAUSHIK RANJAN
              </span>
            </h1>
            <div className="h-16 text-xl text-muted-foreground md:text-2xl">
              <TypeAnimation
                sequence={[
                  "A Frontend/Backend Developer",
                  1000,
                  "A UI/UX Designer",
                  1000,
                  "A Full Stack Engineer",
                  1000,
                  "A Creative Coder",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </div>
          </div>

          <div className="space-y-12">
            <motion.div
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="group gap-2 rounded-full">
                <span>Contact Me</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" onClick={handleDownloadCV} className="gap-2 rounded-full">
                <span>
                <FileDown size={18} />
                Download CV</span>
                <Download className="h-4 w-4" />
              </Button>

            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="h-px flex-1 bg-border max-w-[100px]"></div>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/mekaushikranjan"
                  className="rounded-full bg-background p-2 shadow-md transition-transform hover:scale-110 hover:shadow-lg"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://x.com/Kaushik_ranjan_"
                  className="rounded-full bg-background p-2 shadow-md transition-transform hover:scale-110 hover:shadow-lg"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mekaushikranjan/"
                  className="rounded-full bg-background p-2 shadow-md transition-transform hover:scale-110 hover:shadow-lg"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/_marschel_17/"
                  className="rounded-full bg-background p-2 shadow-md transition-transform hover:scale-110 hover:shadow-lg"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Particle Background Component
function ParticleBackground({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Particle class
  class Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    color: string

    constructor(x: number, y: number) {
      this.x = x
      this.y = y
      this.size = Math.random() * 3 + 1
      this.speedX = Math.random() * 2 - 1
      this.speedY = Math.random() * 2 - 1
      this.color = `hsla(var(--primary), ${Math.random() * 0.3 + 0.1})`
    }

    update(mouseX: number, mouseY: number) {
      this.x += this.speedX
      this.y += this.speedY

      // Mouse interaction
      const dx = mouseX - this.x
      const dy = mouseY - this.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const maxDistance = 100

      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance
        this.speedX -= (dx / distance) * force * 0.6
        this.speedY -= (dy / distance) * force * 0.6
      }

      // Boundary check
      if (this.x < 0 || this.x > dimensions.width) this.speedX *= -1
      if (this.y < 0 || this.y > dimensions.height) this.speedY *= -1
    }
  }

  // Initialize particles
  useEffect(() => {
    if (!canvasRef.current) return

    const handleResize = () => {
      if (!canvasRef.current) return
      const canvas = canvasRef.current
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      canvas.width = width
      canvas.height = height
      setDimensions({ width, height })

      // Create particles
      const particlesArray: Particle[] = []
      const numberOfParticles = Math.min(Math.floor((width * height) / 9000), 100)

      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        particlesArray.push(new Particle(x, y))
      }

      setParticles(particlesArray)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || particles.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Update and draw particles 
      particles.forEach((particle) => {
        particle.update(mousePosition.x, mousePosition.y)

      })

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [particles, dimensions, mousePosition])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" style={{ width: "100%", height: "100%" }} />
}
