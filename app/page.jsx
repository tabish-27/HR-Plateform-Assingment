import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mountain, Users, Briefcase, BarChart, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="#" className="flex items-center justify-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold text-primary">HR SaaS Platform</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-gray-700">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-gray-700">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-gray-700">
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-gray-700">
            Contact
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-primary">
            Login
          </Link>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="#">Sign Up</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-gray-900">
                  Streamline Your HR Operations
                </h1>
                <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
                  Empower your team with an intuitive HR platform designed for efficiency, growth, and seamless
                  management.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  asChild
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  <Link href="#">Get Started</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  <Link href="#">Learn More</Link>
                </Button>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=800"
                width="800"
                height="400"
                alt="HR Dashboard Screenshot"
                className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover shadow-lg mt-12"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Features Designed for Modern HR
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a comprehensive suite of tools to manage your workforce efficiently.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md border border-gray-100">
                  <Users className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold text-gray-900">Employee Management</h3>
                  <p className="text-gray-500 text-center">
                    Centralize employee data, manage profiles, and track performance with ease.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md border border-gray-100">
                  <Briefcase className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold text-gray-900">Task & Project Tracking</h3>
                  <p className="text-gray-500 text-center">
                    Assign tasks, monitor progress, and ensure project deadlines are met efficiently.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md border border-gray-100">
                  <BarChart className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold text-gray-900">Performance Analytics</h3>
                  <p className="text-gray-500 text-center">
                    Gain insights into team performance with detailed reports and analytics.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md border border-gray-100">
                  <Settings className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold text-gray-900">Customizable Settings</h3>
                  <p className="text-gray-500 text-center">
                    Tailor the platform to your organization's unique needs with flexible settings.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md border border-gray-100">
                  <Users className="h-10 w-10 text-primary" /> {/* Reusing icon for placeholder */}
                  <h3 className="text-xl font-bold text-gray-900">Onboarding & Offboarding</h3>
                  <p className="text-gray-500 text-center">
                    Streamline the entire employee lifecycle from hiring to departure.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md border border-gray-100">
                  <Briefcase className="h-10 w-10 text-primary" /> {/* Reusing icon for placeholder */}
                  <h3 className="text-xl font-bold text-gray-900">Payroll Integration</h3>
                  <p className="text-gray-500 text-center">
                    Seamlessly integrate with popular payroll systems for accurate compensation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
                Ready to Transform Your HR?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join hundreds of businesses already simplifying their HR with our platform.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
                  Sign Up Now
                </Button>
              </form>
              <p className="text-xs text-gray-500">
                By signing up, you agree to our{" "}
                <Link href="#" className="underline underline-offset-2 text-primary">
                  Terms & Conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} HR SaaS Platform. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
