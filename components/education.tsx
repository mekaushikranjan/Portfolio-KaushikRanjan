import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Education() {
  const educationData = [
    {
      degree: "Intermediate in Science",
      institution: "Nitishwar Mahavidalya, Muzaffarpur",
      location: "Muzaffarpur, Bihar",
      duration: "2020 - 2022",
      achievements: ["Marks: 61.4%"],
    },
   
    {
      degree: "Bachelor in Computer Application",
      institution: "B.R. Ambedkar Bihar University",
      location: "Muzaffarpur, Bihar",
      duration: "2022 - 2025",
      description: "Pursuing a degree in Computer Applications with a focus on software development and programming.",
      achievements: ["CGPA: 7 ", ],
    },
  ]

  return (
    <div className="space-y-12 container mx-auto px-4">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>
        <div className="mx-auto h-1 w-20 rounded-full bg-primary"></div>
        <p className="mx-auto max-w-[700px] text-muted-foreground">My academic background and qualifications</p>
      </div>

      <div className="relative space-y-6 md:space-y-8 before:hidden md:before:block before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border">
        {educationData.map((item, index) => (
          <div key={index} className="relative flex flex-col gap-4 md:gap-6 md:flex-row">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md mx-auto md:mx-0">
              <GraduationCap className="h-5 w-5" />
            </div>

            <Card className="flex-1 md:w-[calc(100%-40px)] border-2 border-border dark:border-border/80 hover:border-primary/50 transition-colors duration-200">
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold">{item.degree}</h3>
                      <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary self-start sm:self-center">
                        {item.duration}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 shrink-0" />
                        <span>{item.institution}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {item.description && (
                    <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                  )}

                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Key Achievements:</h4>
                    <ul className="mt-2 grid gap-1 text-sm text-muted-foreground">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
