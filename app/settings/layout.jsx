"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function SettingsLayout({ children }) {
  const pathname = usePathname()

  const settingsNavItems = [
    { name: "Profile", href: "/settings/profile" },
    { name: "Notifications", href: "/settings/notifications" },
    { name: "Security", href: "/settings/security" },
    { name: "System", href: "/settings/system" },
  ]

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <aside className="w-full md:w-64 p-4 border rounded-lg bg-white shadow-sm">
        <nav className="grid gap-2 text-sm font-medium">
          {settingsNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                pathname === item.href && "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  )
}
