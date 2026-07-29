"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigationItems = [
  { path: "/", name: "Ana sayfa" },
  { path: "/grafik", name: "Grafik" },
  { path: "/nvidia", name: "NVIDIA" },
  { path: "/ping", name: "PING" },
  { path: "/steam", name: "Steam" },
  { path: "/launch", name: "Launch" },
  { path: "/windows", name: "WINDOWS" },
  { path: "/bios", name: "BIOS" },
  { path: "/ses", name: "Ses" },
  { path: "/practice", name: "PRACTICE" },
  { path: "/crosshair", name: "CROSSHAIR" },
  { path: "/script", name: "SCRIPT" },
  { path: "/cfg", name: "CFG" },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center group flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <Image
                src="/logo.png"
                alt="CStweak Logo"
                width={200}
                height={60}
                className="h-auto w-auto max-w-[140px] sm:max-w-[180px] md:max-w-[200px] object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Menu - İstediğin sıralama ile */}
          <div className="hidden lg:flex lg:items-center lg:gap-1 overflow-x-auto no-scrollbar max-w-[75%]">
            {navigationItems.map((navItem) => (
              <Link
                key={navItem.path}
                href={navItem.path}
                className="px-2.5 py-2 text-[11px] xl:text-xs font-bold uppercase tracking-tighter text-muted-foreground transition-colors hover:text-primary whitespace-nowrap"
              >
                {navItem.name}
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden flex-shrink-0"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border lg:hidden bg-background overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2 px-4 py-6 sm:grid-cols-3">
              {navigationItems.map((navItem, idx) => (
                <motion.div
                  key={navItem.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.02 }}
                >
                  <Link
                    href={navItem.path}
                    onClick={closeMenu}
                    className="flex h-full items-center justify-center rounded-lg border border-border/50 bg-secondary/30 px-3 py-3 text-xs font-bold uppercase tracking-tighter text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {navItem.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}