import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Palette, Smartphone, Mail, Github, Linkedin, Phone, Briefcase, Calendar, Quote } from 'lucide-react'
import { AIChatbot } from "@/components/ai-chatbot"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl animation-delay-2000" />
        </div>
        
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Wilson Luoneko Mponzi
          </h1>
          <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
            Web Developer
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Crafting modern, responsive, and user-friendly web experiences with cutting-edge technologies
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl">
            What I Do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-muted-foreground">
            Specialized in building modern web applications with a focus on performance and user experience
          </p>
          
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="border-2 transition-colors hover:border-primary">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Frontend Development</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-colors hover:border-primary">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Responsive Design</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  Creating seamless experiences across all devices with mobile-first design principles
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-colors hover:border-primary">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">UI/UX Implementation</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  Translating designs into pixel-perfect, accessible, and performant web applications
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl">
            About Me
          </h2>
          <div className="mt-8 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              I'm Wilson Luoneko Mponzi, a passionate web developer dedicated to creating exceptional digital experiences. 
              With expertise in modern web technologies, I transform ideas into functional, beautiful, and performant websites.
            </p>
            <p>
              My approach combines technical excellence with creative problem-solving, ensuring every project not only 
              meets requirements but exceeds expectations. I stay current with the latest web development trends and 
              best practices to deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl">
            My Journey
          </h2>
          <div className="mt-12 space-y-8">
            <div className="relative border-l-2 border-primary/20 pl-8 pb-8 last:pb-0">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold">Senior Web Developer</h3>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" /> 2023 - Present
                </span>
              </div>
              <p className="mt-2 font-medium text-primary">Freelance</p>
              <p className="mt-2 text-muted-foreground">
                Leading development of complex web applications for international clients. Specializing in Next.js and React ecosystems.
              </p>
            </div>
            <div className="relative border-l-2 border-primary/20 pl-8 pb-8 last:pb-0">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" /> 2021 - 2023
                </span>
              </div>
              <p className="mt-2 font-medium text-primary">Tech Solutions Inc.</p>
              <p className="mt-2 text-muted-foreground">
                Collaborated with design teams to implement responsive user interfaces. Improved site performance by 40%.
              </p>
            </div>
            <div className="relative border-l-2 border-primary/20 pl-8 pb-8 last:pb-0">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold">Junior Web Developer</h3>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" /> 2020 - 2021
                </span>
              </div>
              <p className="mt-2 font-medium text-primary">Digital Agency</p>
              <p className="mt-2 text-muted-foreground">
                Started my career building landing pages and maintaining client websites using HTML, CSS, and JavaScript.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative px-6 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-1/4 h-96 w-96 animate-pulse rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute left-0 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/5 blur-3xl animation-delay-1000" />
        </div>
        
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-muted-foreground">
            A showcase of my recent work across various industries and technologies
          </p>
          
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-orange-500/20 to-red-500/20">
                <img 
                  src="/modern-restaurant-interior-with-elegant-dining.jpg" 
                  alt="Restaurant Project"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">Gourmet Restaurant Website</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  Full-featured restaurant website with online reservations, menu showcase, and gallery
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">React</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Next.js</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Tailwind</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <img 
                  src="/fashion-clothing-brand-luxury-store.jpg" 
                  alt="Clothing Brand Project"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">Fashion Brand E-Commerce</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  Modern e-commerce platform with cart functionality, product filtering, and checkout system
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">TypeScript</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Stripe</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Next.js</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <img 
                  src="/real-estate-property-listings-modern-app.jpg" 
                  alt="Real Estate Project"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">Real Estate Platform</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  Property listing platform with advanced search, filters, and interactive map integration
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">React</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Maps API</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Database</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                <img 
                  src="/fitness-gym-workout-tracking-app-dashboard.jpg" 
                  alt="Fitness App Project"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">Fitness Tracking App</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  Comprehensive fitness app with workout plans, progress tracking, and member management
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">React</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Charts</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Auth</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                <img 
                  src="/corporate-business-portfolio-website-professional.jpg" 
                  alt="Corporate Website Project"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">Corporate Portfolio Site</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  Professional business website with portfolio showcase, team profiles, and contact forms
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Next.js</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">CMS</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">SEO</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                <img 
                  src="/social-media-dashboard-analytics-modern-ui.jpg" 
                  alt="Social Dashboard Project"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">Social Media Dashboard</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  Analytics dashboard with real-time data visualization and social media integration
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">React</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">API</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Charts</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl">
            What Clients Say
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-background">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  "Wilson is an exceptional developer. He transformed our outdated website into a modern, high-performing platform that our customers love."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10" />
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">CEO, Restaurant Group</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  "The e-commerce solution Wilson built for us exceeded our expectations. Sales have increased by 50% since the launch."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10" />
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Founder, Fashion Brand</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  "Professional, responsive, and incredibly skilled. Wilson delivered our project on time and with perfect attention to detail."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10" />
                  <div>
                    <p className="font-semibold">Emily Davis</p>
                    <p className="text-sm text-muted-foreground">Marketing Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Let's Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
          </p>
          <div className="mt-10 space-y-6">
            <div className="flex flex-col items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:wilsonmponzi10@gmail.com" className="hover:text-primary transition-colors">
                  wilsonmponzi10@gmail.com
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+255616145193" className="hover:text-primary transition-colors">
                    +255 616 145 193
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+255749900863" className="hover:text-primary transition-colors">
                    +255 749 900 863
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild className="gap-2">
                <a href="mailto:wilsonmponzi10@gmail.com">
                  <Mail className="h-4 w-4" />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://www.linkedin.com/in/wilson-mponzi" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>© 2025 Wilson Luoneko Mponzi. All rights reserved.</p>
        </div>
      </footer>

      <AIChatbot />
    </div>
  )
}
