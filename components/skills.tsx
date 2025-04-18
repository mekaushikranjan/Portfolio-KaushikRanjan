"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Layout, Database, Code, Terminal, GitBranch, Layers } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all")

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="h-8 w-8" />,
      skills: [
        { name: "HTML", img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
        { name: "CSS", img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
        { name: "JavaScript", img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
        { name: "React", img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
        { name: "Next.js", img: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
        { name: "Tailwind CSS", img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
      ],
      color: "from-pink-500 to-rose-500",
      category: "frontend",
    },
    {
      title: "Backend",
      icon: <Database className="h-8 w-8" />,
      skills: [
        { name: "Node.js", img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
        { name: "Express", img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
        { name: "MongoDB", img: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' },
        { name: "PostgreSQL", img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
        { name: "REST API", img: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png' },
        { name: "GraphQL", img: 'https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg' },
      ],
      color: "from-violet-500 to-purple-500",
      category: "backend",
    },
    {
      title: "Programming",
      icon: <Code className="h-8 w-8" />,
      skills: [
        { name: "JavaScript", img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
        { name: "TypeScript", img: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg' },
        { name: "Python", img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
        { name: "Java", img: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Java_programming_language_logo.svg' },
        { name: "C++", img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
      ],
      color: "from-cyan-500 to-blue-500",
      category: "programming",
    },
    {
      title: "Tools",
      icon: <Terminal className="h-8 w-8" />,
      skills: [
        { name: "Git", img: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
        { name: "GitHub", img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
        { name: "VS Code", img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
        { name: "Docker", img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
        { name: "AWS", img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
        { name: "Figma", img: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
      ],
      color: "from-emerald-500 to-green-500",
      category: "tools",
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-8 w-8" />,
      skills: [
        { name: "Git", img: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
        { name: "GitHub", img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
        { name: "GitLab", img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/GitLab_Logo.svg' },
        { name: "Bitbucket", img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Bitbucket-blue-logomark-only.svg' },
      ],
      color: "from-amber-500 to-orange-500",
      category: "version-control",
    },
    {
      title: "Architecture",
      icon: <Layers className="h-8 w-8" />,
      skills: [
        { name: "Microservices", img: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Microservices.svg' },
        { name: "MVC", img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/MVC-Process.svg' },
        { name: "REST", img: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png' },
        { name: "Serverless", img: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Serverless_logo.svg' },
        { name: "CI/CD", img: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Circleci-icon-logo.svg' },
      ],
      color: "from-red-500 to-rose-500",
      category: "architecture",
    },
  ]

  const filteredCategories =
    activeTab === "all" ? skillCategories : skillCategories.filter((category) => category.category === activeTab)

  return (
    <div className="container mx-auto px-2 md:px-4 lg:px-8 max-w-9xl space-y-12">
      <ScrollReveal>
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary"></div>
          <p className="mx-auto max-w-[700px] text-muted-foreground">Technologies and tools I work with</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="programming">Programming</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCategories.map((category, index) => (
                <ScrollReveal key={category.title} delay={0.1 * (index % 3)}>
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-border dark:border-border/80 hover:border-primary/50">
                    <div className={`h-2 w-full bg-gradient-to-r ${category.color}`}></div>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} text-white shadow-md`}
                          >
                            {category.icon}
                          </div>
                          <h3 className="text-xl font-semibold">{category.title}</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                          {category.skills.map((skill, skillIndex) => (
                            <div 
                              key={skillIndex} 
                              className="flex flex-col items-center gap-2"
                            >
                              <div className="h-16 w-16 relative p-2.5 rounded-xl border-2 border-border dark:border-border/80 bg-card hover:border-primary/50 transition-colors duration-200 shadow-sm">
                                <Image
                                  src={skill.img}
                                  alt={skill.name}
                                  fill
                                  className="object-contain p-1.5"
                                  sizes="64px"
                                  priority={skillIndex < 4}
                                />
                              </div>
                              <span className="text-sm font-medium text-center">{skill.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </ScrollReveal>
    </div>
  )
}
