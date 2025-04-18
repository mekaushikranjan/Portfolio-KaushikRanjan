import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Footer({ className }: { className?: string }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn("w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-bold order-1">
            KAUSHIK RANJAN
          </Link>

          <p className="text-sm text-muted-foreground text-center order-3 md:order-2">
            © {currentYear} Kaushik Ranjan. All rights reserved.
          </p>

          <div className="flex items-center gap-4 order-2 md:order-3">
            <Link
              href="https://github.com/mekaushikranjan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full bg-secondary p-2.5 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mekaushikranjan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full bg-secondary p-2.5 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com/Kaushik_ranjan_
"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="rounded-full bg-secondary p-2.5 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:mritunjaykaushik1803@gmail.com"
              aria-label="Email"
              className="rounded-full bg-secondary p-2.5 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
