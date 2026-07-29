"use client"

import { motion } from "framer-motion"
import { PageHeader } from "@/components/page-header"
import { Youtube, Instagram, Gamepad2, Send, Twitch } from "lucide-react"
import Link from "next/link"

function SteamIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 259" fill="currentColor">
      <path d="M127.779 0C60.684 0 5.412 52.012 0 118.469l68.619 28.356c5.818-3.958 12.834-6.296 20.408-6.296.673 0 1.337.036 2.006.063l30.539-44.206v-.627c0-26.628 21.661-48.283 48.295-48.283 26.625 0 48.283 21.69 48.283 48.338 0 26.628-21.658 48.284-48.283 48.284h-1.12l-43.505 31.042c0 .554.044 1.118.044 1.692 0 20.009-16.178 36.257-36.168 36.257-17.434 0-32.201-12.51-35.538-29.096L.883 163.066C18.821 218.815 70.078 259 130.504 259c70.675 0 127.944-57.285 127.944-127.941C258.44 57.265 198.463 0 127.778 0zM80.453 197.377l-14.723-6.089c2.62 5.44 7.14 10.008 13.206 12.527 13.115 5.442 28.21-.76 33.652-13.874 2.636-6.348 2.654-13.315.055-19.7-2.6-6.377-7.55-11.297-13.897-13.933-6.306-2.61-12.96-2.504-18.912-.31l15.22 6.295c9.656 3.999 14.239 15.13 10.232 24.79-3.998 9.664-15.14 14.252-24.833 10.294zm128.612-79.139c0-17.755-14.453-32.18-32.2-32.18-17.773 0-32.199 14.434-32.199 32.198 0 17.773 14.426 32.198 32.2 32.198 17.755-.009 32.199-14.425 32.199-32.216zm-56.305-.069c0-13.394 10.83-24.24 24.2-24.24 13.378 0 24.207 10.846 24.207 24.24 0 13.377-10.83 24.199-24.206 24.199-13.371 0-24.201-10.83-24.201-24.199z"/>
    </svg>
  )
}

function KickIcon({ className }: { className?: string }) {
  return (
    <span className={`${className} font-black text-xl leading-none`}>K</span>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  )
}

export default function IletisimPage() {
  const contactMethods = [
    {
      icon: Youtube,
      title: "YouTube",
      value: "@gencuez",
      href: "https://youtube.com/@gencuez",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@umutgencu",
      href: "https://instagram.com/umutgencu",
    },
    {
      icon: SteamIcon,
      title: "Steam",
      value: "/id/gencuez",
      href: "https://steamcommunity.com/id/gencuez",
    },
    {
      icon: KickIcon,
      title: "Kick",
      value: "@gencuez",
      href: "https://kick.com/gencuez",
    },
    {
      icon: TikTokIcon,
      title: "TikTok",
      value: "@gencuez",
      href: "https://tiktok.com/@gencuez",
    },
    {
      icon: Twitch,
      title: "Twitch",
      value: "@gencuez",
      href: "https://www.twitch.tv/gencuez",
    },
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 pb-20 selection:bg-primary/20 selection:text-primary">
      <PageHeader 
        title="İletişim" 
        description="Benimle iletişime geçin"
      />

      <div className="space-y-8 mt-8">
        {/* Sosyal Medya Kartları */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {contactMethods.map((method, index) => (
            <Link
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/5 rounded-xl border border-border/50 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                  <method.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-bold group-hover:text-primary transition-colors">{method.title}</h3>
                  <p className="text-muted-foreground text-xs font-medium mt-0.5">{method.value}</p>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Mesaj Gönderim Formu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-card border border-border rounded-xl p-6 shadow-md"
        >
          <h2 className="text-lg font-black uppercase tracking-tight text-foreground mb-6 flex items-center gap-2 border-b border-border/50 pb-3">
            <Send className="w-4 h-4 text-primary" />
            Mesaj Gönder
          </h2>
          <form className="space-y-5" action="https://formsubmit.co/umutgenctr@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="CStweak.com İletişim Formu" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                  Adınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-background/50 border border-border rounded-lg px-4 h-11 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:bg-background transition-all"
                  placeholder="Adınızı girin"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-background/50 border border-border rounded-lg px-4 h-11 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:bg-background transition-all"
                  placeholder="E-posta adresiniz"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Konu
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full bg-background/50 border border-border rounded-lg px-4 h-11 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:bg-background transition-all"
                placeholder="Mesaj konusu"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-background/50 border border-border rounded-lg p-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:bg-background transition-all resize-none"
                placeholder="Mesajınızı yazın..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary hover:opacity-90 text-primary-foreground font-black uppercase text-xs tracking-widest h-12 rounded-lg transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              Gönder
            </button>
          </form>
        </motion.div>

        {/* Alt Bilgi Kutusu */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-card/40 border border-border/60 rounded-xl p-5 text-center shadow-sm"
        >
          <p className="text-muted-foreground text-xs font-medium leading-relaxed italic">
            Sorularınız, önerileriniz veya geri bildirimleriniz için her zaman ulaşabilirsiniz. Genellikle 24 saat içinde yanıt veriyorum.
          </p>
        </motion.div>
      </div>
    </div>
  )
}