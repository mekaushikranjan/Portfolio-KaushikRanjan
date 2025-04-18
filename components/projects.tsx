"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
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
      title: "Smart City Portal",
      description:
        "A React-based Complaint portal. Users can report issues, track progress.",
      image: "/logo.png?height=400&width=600",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      category: "frontend/backend",
      demoLink: "https://smartcityportal-production.up.railway.app/",
      repoLink: "#",
    },
    // {
    //   title: "E-commerce Website",
    //   description: "A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["React", "Node.js", "MongoDB", "Stripe"],
    //   category: "fullstack",
    //   demoLink: "#",
    //   repoLink: "#",
    // },
    // {
    //   title: "API Gateway Service",
    //   description: "A microservice API gateway that handles authentication, rate limiting, and request routing.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["Node.js", "Express", "Redis", "Docker"],
    //   category: "backend",
    //   demoLink: "#",
    //   repoLink: "#",
    // },
    {
      title: "Real-time Chat Application",
      description: "A real-time messaging platform with private chats, group conversations, and media sharing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Socket.io", "Node.js", "MongoDB"],
      category: "fullstack",
      demoLink: "#",
      repoLink: "#",
    },
    // {
    //   title: "Data Visualization Dashboard",
    //   description: "An interactive dashboard for visualizing complex datasets with customizable charts and filters.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["React", "D3.js", "TypeScript", "REST API"],
    //   category: "frontend",
    //   demoLink: "#",
    //   repoLink: "#",
    // },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
  ]

  return (
    <div className="container mx-auto px-2 md:px-2 lg:px-4 max-w-9xl space-y-6">
      <ScrollReveal>
        <div className="space-y-4 text-center">
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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ScrollReveal key={project.title} delay={0.1 * (index % 3)}>
            <Card className="overflow-hidden transition-all duration-300 group hover:shadow-lg border-2 border-border dark:border-border/80 hover:border-primary/50">
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
                <CardContent className="space-y-4 p-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <Badge variant="outline" className="capitalize">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3 p-6 pt-0">
                  <Button asChild variant="outline" size="sm" className="gap-1.5 rounded-full">
                    <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Demo</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-1.5 rounded-full">
                    <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5" />
                      <span>Code</span>
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="flex justify-center">
          <Button variant="outline" className="group gap-2 rounded-full">
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </ScrollReveal>
    </div>
  )
}
