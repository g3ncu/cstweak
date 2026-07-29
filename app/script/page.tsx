"use client"

import { motion } from "framer-motion"
import { Terminal, Copy, Check, Zap, Shield, Gamepad2, Trash2, Monitor, AlertTriangle } from "lucide-react"
import { useState } from "react"

const features = [
  { icon: Shield, title: "Gizlilik ve Güvenlik", desc: "Telemetriyi keser, takipçileri ve gereksiz uygulama izinlerini devre dışı bırakır." },
  { icon: Zap, title: "AI Optimizasyonu", desc: "Windows Copilot, Recall ve Image Creator gibi kaynak tüketen AI özelliklerini kapatır." },
  { icon: Monitor, title: "Performans", desc: "Sistemi 'Nihai Performans' moduna zorlar ve ağ gecikmesini stabilize eder." },
  { icon: Gamepad2, title: "Oyun Modu", desc: "HAGS'ı aktif eder, GameDVR gibi FPS düşüren arka plan kayıtlarını engeller." },
  { icon: Trash2, title: "Sistem Temizliği", desc: "OneDrive'ı tamamen kaldırır, Temp dosyalarını siler ve gereksiz görevleri durdurur." },
  { icon: Terminal, title: "Servis Yönetimi", desc: "Yüzlerce Windows servisini oyun performansı için optimize eder." },
]

export default function OptimizedScriptPage() {
  const [copied, setCopied] = useState(false)
  const command = "irm https://cstweak.com.tr/win | iex"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 pb-20 selection:bg-primary/20 selection:text-primary">
      <div className="space-y-12 mt-4">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground">
            Windows Tweak <span className="text-primary">Script</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Sisteminizi tek bir komutla en yüksek performans ve gizlilik seviyesine taşıyın.
          </p>
        </motion.div>

        {/* Command Box & Instructions */}
        <motion.section 
          initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="relative group max-w-3xl mx-auto"
        >
          {/* Adım Adım Yönergeler */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6 text-[13px] font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-black">1</span>
              Başlat'a <span className="text-foreground font-bold">PowerShell</span> yazın
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-black">2</span>
              <span className="text-foreground font-bold">Yönetici Olarak</span> çalıştırın
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-black">3</span>
              Komutu yapıştırıp <span className="text-foreground font-bold">Enter</span>'a basın
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl blur opacity-40 group-hover:opacity-70 transition-opacity mt-10"></div>
          <div className="relative bg-card border border-border rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
            <code className="text-primary font-mono text-base md:text-lg bg-background/50 px-4 py-2.5 rounded-lg border border-border/40 select-all w-full md:w-auto text-center md:text-left break-all">
              {command}
            </code>
            <button 
              onClick={copyToClipboard}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 h-12 rounded-lg font-black uppercase text-xs tracking-widest hover:opacity-90 transition-all active:scale-95 shrink-0 w-full md:w-auto justify-center"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Kopyalandı!" : "Komutu Kopyala"}
            </button>
          </div>
        </motion.section>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors shadow-md"
            >
              <f.icon className="text-primary mb-4" size={24} />
              <h3 className="font-bold text-base text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Warning Footer */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="p-5 rounded-xl bg-destructive/5 border border-destructive/20 flex items-start gap-4 shadow-sm"
        >
          <AlertTriangle className="text-destructive shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-black text-sm text-destructive uppercase tracking-tight mb-1">Önemli Uyarı</h4>
            <p className="text-muted-foreground text-xs font-medium leading-relaxed">
              İşlemlerden doğabilecek sorunlardan CStweak sorumlu değildir. Çalıştırmadan önce <b>Sistem Geri Yükleme Noktası</b> oluşturmanız şiddetle önerilir. İşlem sonunda değişikliklerin devreye girmesi için bilgisayarınızı yeniden başlatmayı unutmayın.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}