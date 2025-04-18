"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function About() {
  // const highlights = [
  //   "5+ years of web development experience",
  //   "Worked with 20+ clients worldwide",
  //   "Completed 30+ successful projects",
  //   "Strong problem-solving skills",
  // ]

  return (
    <div id="about" className="min-h-screen  pb-24 ">
      <div className="container mx-auto px-5">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary"></div>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Learn more about my background, experience, and what drives me
          </p>
        </div>

        <div className="grid gap-8 sm:gap-16 pt-4 md:gap-8 md:grid-cols-2 md:items-center">
          <div className="relative aspect-square w-full max-w-[300px] md:max-w-[450px] mx-auto md:mx-0 mt-4 sm:mt-24 md:mt-0">
            <div className="absolute -left-3 -top-3 h-16 w-16 rounded-lg border-4 border-background bg-primary/10"></div>
            <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-lg border-4 border-background bg-primary/20"></div>
            <div className="relative h-full w-full overflow-hidden rounded-lg border bg-card shadow-xl">
              <Image
                src="/erasebg-transformed.png"
                alt="Profile picture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Who I Am</h3>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary"></div>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm a passionate web developer with a strong foundation in modern web technologies. I enjoy
                creating responsive, user-friendly websites and applications that solve real-world problems.
              </p>
              <p>
                With expertise in front-end and back-end development, I strive to build seamless digital experiences that
                combine aesthetic design with functional performance.
              </p>
            </div>

            {/* <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <Card key={index} className="border-none bg-primary/5 shadow-none">
                  <CardContent className="flex items-center gap-2 p-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
