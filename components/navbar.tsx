"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [resolvedTheme, setTheme])

  if (!mounted) {
    return null
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace('#', ''));
    
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      closeMenu();
    }
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4"> {/* Changed back to h-20 */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 overflow-hidden group-hover:bg-primary/20 transition-colors border-2 border-primary/50">
            <Image
              src="/logo1.jpg"
              alt="Logo"
              width={48}
              height={48}
              className="w-full h-full object-cover rounded-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60 rounded-full"></div>
          </div>
          <span className="text-2xl font-bold hover:text-primary transition-colors">
            Kaushik Ranjan
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full transition-all duration-300 hover:scale-110 relative"
            aria-label="Toggle theme"
          >
            <Sun className={`h-5 w-5 transition-all ${resolvedTheme === 'dark' ? 'scale-0' : 'scale-100'}`} />
            <Moon className={`h-5 w-5 transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${resolvedTheme === 'dark' ? 'scale-100' : 'scale-0'}`} />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full transition-all duration-300 hover:scale-110 relative"
            aria-label="Toggle theme"
          >
            <Sun className={`h-5 w-5 transition-all ${resolvedTheme === 'dark' ? 'scale-0' : 'scale-100'}`} />
            <Moon className={`h-5 w-5 transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${resolvedTheme === 'dark' ? 'scale-100' : 'scale-0'}`} />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
