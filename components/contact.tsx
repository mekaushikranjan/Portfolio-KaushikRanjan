"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus(null)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message })
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.message || 'Failed to send message. Please try again.' 
        })
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      })
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "mritunjaykaushik1803@gmail.com",
      link: "mailto:mritunjaykaushik1803@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91-9507126389",
      link: "tel:+919507126389",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Muzaffarpur, Bihar(842001)",
      link: null,
    },
  ]

  const socialLinks = [
    {
      title: "GitHub",
      url: "https://github.com/mekaushikranjan",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/mekaushikranjan/",
    },
    {
      title: "Twitter",
      url: "https://x.com/Kaushik_ranjan_",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/_marschel_17/",
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Me</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary"></div>
          <p className="mx-auto max-w-[700px] text-muted-foreground">Get in touch for collaborations or inquiries</p>
        </div>

        <div className="relative">
          {/* Background elements */}
          <div className="absolute -left-4 -top-4 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-[100px]"></div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-[100px]"></div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-border dark:border-border/80 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold">Send a Message</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Your first name"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="rounded-md"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Your last name"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="rounded-md"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleChange}
                          className="rounded-md"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone (Optional)
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="rounded-md"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="rounded-md"
                        required
                      />
                    </div>

                    {submitStatus && (
                      <div className={`p-3 rounded-md ${
                        submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {submitStatus.message}
                      </div>
                    )}

                    <Button type="submit" className="w-full gap-2 rounded-full" disabled={isLoading}>
                      <Send className="h-4 w-4" />
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-border dark:border-border/80 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold">Contact Information</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Feel free to reach out through any of these channels.
                      </p>
                    </div>

                    <div className="space-y-6">
                      {contactInfo.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-medium">{item.title}</h4>
                            {item.link ? (
                              <a
                                href={item.link}
                                className="mt-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-border dark:border-border/80 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Availability</h3>
                    <p className="text-sm text-muted-foreground">
                      I'm currently available for freelance work and full-time positions. My typical response time is
                      within 24 hours.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium">Available for new projects</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
