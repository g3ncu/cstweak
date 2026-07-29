"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Cpu, 
  HelpCircle, 
  User, 
  Mail,
  Zap,
  Timer
} from "lucide-react"

const featureItems = [
  { path: "/cpu0", icon: Cpu, title: "CPU0", description: "Çekirdek izolasyonu" },
  { path: "/sss", icon: HelpCircle, title: "SSS", description: "Sık sorulanlar" },
  { path: "/kimim", icon: User, title: "Kimim?", description: "Hakkımda" },
  { path: "/iletisim", icon: Mail, title: "İletişim", description: "Bana ulaşın" },
]

const statisticsData = [
  { icon: Zap, value: "60+", label: "FPS Artışı" },
  { icon: Timer, value: "<10ms", label: "Gecikme" },
]

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section - min-h-screen eklenerek tam ekran yapıldı */}
      <section className="relative overflow-hidden min-h-screen flex flex-col justify-center py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Web adresimiz cstweak.com.tr olarak güncellenmiştir.
            </div>

            <h1 className="text-4xl font-black tracking-tighter sm:text-6xl lg:text-8xl uppercase">
              Milisaniyelerle <br />
              <span className="text-primary italic">Avantajı Yakala</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              CS2 performansını zirveye taşıyacak profesyonel ayarlar, CFG'ler ve rehberler. Peek'lemeye hazır mısın?
            </p>

            <div className="mt-12 grid grid-cols-2 gap-4 max-w-sm mx-auto">
              {statisticsData.map((stat, idx) => (
                <div key={idx} className="rounded-2xl border border-border bg-card/50 p-4 backdrop-blur-sm">
                  <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Kullanıcıya aşağı kaydırması gerektiğini hatırlatan küçük bir ikon (isteğe bağlı) */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-16 text-muted-foreground opacity-50 flex justify-center"
            >
              <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-muted-foreground rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Alt Kutucuklar Section - Sadece aşağı kaydırınca görünür */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {featureItems.map((item, idx) => (
              <Link key={idx} href={item.path}>
                <motion.div
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold uppercase tracking-tight">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}