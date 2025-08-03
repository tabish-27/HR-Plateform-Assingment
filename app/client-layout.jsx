"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/layout/sidebar"
import Header from "@/components/layout/header"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({ children }) {
  const pathname = usePathname()
  const isAuthPage = pathname === "/login" || pathname === "/signup"
  const isLandingPage = pathname === "/" // Landing page should not have sidebar, but should have header

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {isAuthPage ? (
            // Layout for login/signup pages (no sidebar/header)
            children
          ) : isLandingPage ? (
            // Layout for landing page (header, but no sidebar)
            <div className="flex flex-col min-h-screen w-full">
              <Header />
              <main className="flex-1">{children}</main>
              {/* Footer is part of the LandingPage component itself */}
            </div>
          ) : (
            // Layout for authenticated pages (with sidebar/header)
            <div className="flex min-h-screen w-full">
              <Sidebar />
              <div className="flex flex-col flex-1">
                <Header />
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">{children}</main>
              </div>
            </div>
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}
