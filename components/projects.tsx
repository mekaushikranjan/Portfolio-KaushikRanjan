"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with dark/light mode support.",
      image: "/portfoliowebsite.png?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "frontend/Backend",
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Skyline Estates",
      description: "A luxury real estate platform showcasing premium properties with virtual tours, property management, and investment advisory services.",
      image: "/logo3.png?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS", "SCDN", "TypeScript"],
      category: "frontend/backend",
      demoLink: "https://skyline-estate.vercel.app/",
      repoLink: "#",
    },
    {
      title: "Royal Drive",
      description: "A premium car rental platform featuring luxury vehicles with booking system, virtual tours, and concierge services.",
      image: "/logo4.png?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS", "SCDN", "TypeScript"],
      category: "frontend/backend",
      demoLink: "https://rental-cars-swart.vercel.app/",
      repoLink: "#",
    },
    {
      title: "Luxury Dubai Real Estate",
      description: "A comprehensive real estate platform for Dubai's luxury property market with property listings, market insights, and investment opportunities.",
      image: "/logo2.png?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS", "SCDN", "TypeScript"],
      category: "frontend/backend",
      demoLink: "https://real-state-av29.vercel.app/",
      repoLink: "#",
    },
    {
      title: "Smart City Portal",
      description: "A React-based Complaint portal. Users can report issues, track progress.",
      image: "/logo.png?height=400&width=600",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      category: "frontend/backend",
      demoLink: "https://smartcityportal-production.up.railway.app/",
      repoLink: "#",
    },
    {
      title: "E-commerce Website (Coming Soon)",
      description: "A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Coming Soon"],
      category: "fullstack",
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "API Gateway Service (Coming Soon)",
      description: "A microservice API gateway that handles authentication, rate limiting, and request routing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Node.js", "Express", "Redis", "Docker", "Coming Soon"],
      category: "backend",
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Real-time Chat Application",
      description: "A real-time messaging platform with private chats, group conversations, and media sharing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Socket.io", "Node.js", "MongoDB"],
      category: "fullstack",
      demoLink: "#",
      repoLink: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)
  
  // Duplicate projects for continuous scrolling
  const scrollingProjects = [...filteredProjects, ...filteredProjects]
  
  const categories = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
  ]

  return (
    <div className="container mx-auto px-1 md:px-1 lg:px-2 max-w-9xl space-y-4">
      <ScrollReveal>
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary"></div>
          <p className="mx-auto max-w-[700px] text-muted-foreground">Some of my recent work and personal projects</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category.value)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </ScrollReveal>

      <div className="space-y-6">
        {/* First row - moving left to right */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: { repeat: Infinity, duration: 25, ease: "linear" },
            }}
          >
            {scrollingProjects.map((project, index) => (
              <Card 
                key={`row1-${project.title}-${index}`} 
                className="min-w-[300px] max-w-[300px] overflow-hidden transition-all duration-300 group hover:shadow-lg border-2 border-border dark:border-border/80 hover:border-primary/50"
              >
                <div className="overflow-hidden rounded-lg border shadow-md transition-all duration-300 group-hover:shadow-xl">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="space-y-3 p-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold">{project.title}</h3>
                        <Badge variant="outline" className="capitalize">
                          {project.category}
                        </Badge>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 p-4 pt-0">
                    <Button asChild variant="outline" size="sm" className="gap-1 rounded-full">
                      <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                        <span>Demo</span>
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="gap-1 rounded-full">
                      <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3" />
                        <span>Code</span>
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Second row - moving right to left */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, duration: 25, ease: "linear" },
            }}
          >
            {scrollingProjects.map((project, index) => (
              <Card 
                key={`row2-${project.title}-${index}`} 
                className="min-w-[300px] max-w-[300px] overflow-hidden transition-all duration-300 group hover:shadow-lg border-2 border-border dark:border-border/80 hover:border-primary/50"
              >
                <div className="overflow-hidden rounded-lg border shadow-md transition-all duration-300 group-hover:shadow-xl">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="space-y-3 p-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold">{project.title}</h3>
                        <Badge variant="outline" className="capitalize">
                          {project.category}
                        </Badge>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 p-4 pt-0">
                    <Button asChild variant="outline" size="sm" className="gap-1 rounded-full">
                      <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                        <span>Demo</span>
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="gap-1 rounded-full">
                      <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3" />
                        <span>Code</span>
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
