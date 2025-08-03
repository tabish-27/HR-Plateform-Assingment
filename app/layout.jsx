import "./globals.css"

export const metadata = {
  title: "HR SaaS Platform",
  description: "Streamline your HR operations with our intuitive platform.",
    generator: 'v0.dev'
}

import ClientLayout from "./client-layout"

export default function RootLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>
}
