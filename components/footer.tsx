"use client"

import { Calendar } from "lucide-react"
import Link from "next/link"

const lastUpdateDate = new Date().toLocaleDateString("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric"
})

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <p>© 2025 CStweak.com.tr</p>
            <Link href="/kimim" className="hover:text-primary transition-colors">gencuez</Link>
            <Link href="/gizlilik-politikasi" className="hover:text-primary transition-colors">Gizlilik Politikası</Link>
            <Link href="/cerez-politikasi" className="hover:text-primary transition-colors">Çerez Politikası</Link>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest">
              Sık kullanılanlara ekle: <kbd className="rounded bg-secondary px-1.5 py-0.5 font-mono">Ctrl+D</kbd>
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
              <Calendar className="h-3 w-3" />
              <span>Son Güncelleme: {lastUpdateDate}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}