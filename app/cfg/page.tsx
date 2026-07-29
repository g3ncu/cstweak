"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileCode, Lock, Download, Keyboard, ShoppingCart, MessageSquare, Terminal, AlertTriangle, Bomb, FolderOpen } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { InfoCard } from "@/components/info-card"

// gencucs2.cfg içerisindeki TÜM tuş atamaları güncel verilerle yenilendi
const cfgSections = [
  {
    icon: Keyboard,
    title: "Hareket ve Temel Kontroller",
    items: [
      { key: "W, A, S, D", desc: "Hareket etme (Varsayılan)" },
      { key: "MWHEELDOWN", desc: "Zıplama (+jump)" },
      { key: "MWHEELUP", desc: "Silahı incele (+lookatweapon)" },
      { key: "Q", desc: "Hızlı silah değiştirme (Quickswitch)" },
      { key: "V", desc: "Silahı / Bombayı / Ekipmanı yere atma (Drop)" },
      { key: "C", desc: "C4 Bombasını veya ekipmanı hızlıca ele alma ve yere atma (+uz)" },
      { key: "E", desc: "Kullan / Etkileşim (Varsayılan)" },
      { key: "K", desc: "Botlara 'Burada dur' komutu verir (Holdpos)" },
    ]
  },
  {
    icon: Bomb,
    title: "Ekipman ve Bomba Kısayolları",
    items: [
      { key: "Z", desc: "Sis Bombası seç (Slot 8)" },
      { key: "X", desc: "Flaş Bombası seç (Slot 7)" },
      { key: "ALT", desc: "Molotof / Yanıcı Bomba seç (Slot 10)" },
      { key: "MOUSE3", desc: "Sağlık Aşısı / Taktik Ekipman seç (Slot 12)" },
      { key: "KP_0", desc: "Elindeki bombayı hızlıca yere bırakma (+nadedrop)" },
    ]
  },
  {
    icon: ShoppingCart,
    title: "Satın Alma Bindleri (Buy Binds)",
    items: [
      { key: "F1", desc: "Çelik Yelek + İkincil Silah Satın Al" },
      { key: "F2", desc: "Çelik Yelek + Kask + MP9 / MAC-10" },
      { key: "F3", desc: "Çelik Yelek + Rifle (AK47 / M4)" },
      { key: "F4", desc: "Çelik Yelek + Kask + Rifle (AK47 / M4)" },
      { key: "G", desc: "Çelik Yelek + Kask Satın Al" },
      { key: "J", desc: "Sadece Çelik Yelek Satın Al" },
      { key: "H", desc: "Desert Eagle Satın Al" },
      { key: "KP_MULTIPLY (*)", desc: "Bomba İmha Kiti (Defuser) Satın Al" },
      { key: "KP_6", desc: "Flaş Bombası Satın Al" },
      { key: "KP_3", desc: "Sis Bombası Satın Al" },
      { key: "KP_DEL (.)", desc: "Molotof Satın Al" },
      { key: "KP_9", desc: "El Bombası (HE) Satın Al" },
      { key: "INS", desc: "Bomba İmha Kiti (Defuser) Satın Al" },
      { key: "\\", desc: "Flaş Bombası Satın Al" },
      { key: "DEL", desc: "El Bombası (HE) Satın Al" },
      { key: "HOME", desc: "El Bombası (HE) Satın Al" },
      { key: "PGUP", desc: "Flaş Bombası Satın Al" },
      { key: "PGDN", desc: "Sis Bombası Satın Al" },
      { key: "END", desc: "Molotof / Yanıcı Bomba Satın Al" },
      { key: "RIGHTARROW (→)", desc: "Bomba İmha Kiti (Defuser) Satın Al" },
      { key: "=", desc: "Satın alınan tüm ekipmanları tek tuşla geri sat (Sellall)" },
    ]
  },
  {
    icon: MessageSquare,
    title: "İletişim ve Mesajlaşma",
    items: [
      { key: "CAPSLOCK", desc: "Ping atma / Yer işaretleme (player_ping)" },
      { key: "MOUSE5", desc: "Takıma 'Anlaşıldı' (Roger) komutu verir" },
      { key: "F", desc: "Sesli Sohbet / Bas-Konuş (+voicerecord)" },
      { key: "N", desc: "Takım sohbetine otomatik 'ty' (teşekkürler) yazar" },
      { key: "L", desc: "Genel sohbete otomatik ')' gülücük atar" },
      { key: "6", desc: "Takım sohbetine otomatik 'DROP ME PLS ?' yazar" },
      { key: "7", desc: "Takım sohbetine otomatik 'BOOST ME PLS ?' yazar" },
      { key: "8", desc: "Takım sohbetine otomatik 'DON'T RUSH AND FOCUS GUYS !' yazar" },
    ]
  },
  {
    icon: Terminal,
    title: "Antrenman ve Sistem Komutları",
    items: [
      { key: "UPARROW (↑)", desc: "Oyun sesini performans seviyesine getirir (0.35)" },
      { key: "DOWNARROW (↓)", desc: "Oyun sesini neredeyse tamamen kısar (0.0035)" },
      { key: "LEFTARROW (←)", desc: "Geliştirici hilelerini açar ve Noclip'i aktif eder" },
      { key: ",", desc: "Antrenmanda atılan son bombayı tekrar fırlatır" },
      { key: "MOUSE4", desc: "Haritada aktif duran sis bombalarını siler" },
      { key: "KP_DIVIDE (/)", desc: "Haritada aktif duran sis bombalarını siler" },
      { key: "O", desc: "Oylamalarda Seçenek 1'e (Evet) oy verir" },
      { key: "P", desc: "Oylamalarda Seçenek 2'ye (Hayır) oy verir" },
    ]
  },
]

export default function CFGPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const inputClean = password.trim().toLowerCase()
    if (inputClean === "trabzonspor" || inputClean === "ts") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Yanlış parola!")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="mx-auto max-w-md px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-border bg-card p-8"
        >
          <div className="flex flex-col items-center text-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold">CFG Sayfası</h1>
            <p className="text-sm text-muted-foreground mt-2">Bu sayfaya erişmek için parola gereklidir.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Parola girin..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button type="submit" className="w-full">Giriş Yap</Button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 pb-20">
      <PageHeader
        icon={FileCode}
        title="CFG Klavye Kullanımı"
        description="gencucs2.cfg dosyasındaki tüm tuş atamaları ve kısayollar"
      />

      <div className="grid gap-6 mb-12">
        <InfoCard icon={AlertTriangle} title="Dikkat!" variant="warning">
          <p>CFG'yi uyguladıktan sonra tuş ayarlarınız değişecektir. Sıfırlamak için oyun ayarlarından "SIFIRLA" butonuna basabilirsiniz.</p>
        </InfoCard>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2 uppercase text-primary">
            <FolderOpen className="h-5 w-5" /> Kurulum Adımları
          </h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>1. Aşağıdaki butondan <b>gencucs2.cfg</b> dosyasını indirin.</li>
            <li>
              2. İndirdiğiniz dosyayı kopyalayarak tam olarak şu klasör yolunun içine yapıştırın:
              <div className="mt-2 block w-full overflow-x-auto rounded-lg bg-secondary/60 p-3 font-mono text-xs font-semibold text-foreground border border-border select-all tracking-tight">
                C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo\cfg
              </div>
            </li>
            <li>3. Oyunu başlatın, geliştirici konsolunu açın ve <code className="text-primary font-bold px-1 bg-primary/10 rounded">exec gencucs2</code> yazıp Enter'a basın.</li>
          </ul>
        </div>
      </div>

      <section className="mb-16">
        <div className="rounded-2xl border-2 border-primary/20 bg-card p-10 text-center shadow-xl">
          <h2 className="text-2xl font-black mb-4 uppercase tracking-tighter">CFG'Yİ HAZIR İNDİR</h2>
          <a href="/downloads/gencucs2.cfg" download="gencucs2.cfg">
            <Button size="lg" className="gap-4 px-12 py-7 font-black text-lg shadow-lg hover:scale-105 transition-all">
              <Download className="h-6 w-6" /> GENCUCS2.CFG İNDİR
            </Button>
          </a>
        </div>
      </section>

      <div className="space-y-8">
        {cfgSections.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-4 py-3">
              <section.icon className="h-5 w-5 text-primary" />
              <h2 className="font-semibold">{section.title}</h2>
            </div>
            <div className="divide-y divide-border/50">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center gap-4 px-4 py-3 hover:bg-secondary/30 transition-colors">
                  <code className="inline-flex min-w-[120px] items-center justify-center rounded-md bg-primary/10 px-3 py-1.5 font-mono text-sm font-medium text-primary">
                    {item.key}
                  </code>
                  <span className="text-sm text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}