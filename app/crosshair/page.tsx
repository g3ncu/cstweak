"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Target, Copy, Check, Info } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { InfoCard } from "@/components/info-card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const crosshairData = [
  { 
    name: "gencuez", 
    fullName: 'Umut "gencuez" Genç', 
    code: "CSGO-3hkQO-bKyjv-wSjUr-KpmSz-rMSFE", 
    image: "/crosshair/gencuez.png",
    desc: "Renk körü olan CStweak kurucusunun performans odaklı kişisel tercihi." 
  },
  { 
    name: "ZywOo", 
    fullName: 'Mathieu "⁠ZywOo⁠" Herbaut', 
    code: "CSGO-FNOLG-fQcPX-V8P7K-VqtAf-ZbJaA", 
    image: "/crosshair/zywoo.png",
    desc: "Dünyanın en iyisinden dengeli ve keskin bir seçim." 
  },
  { 
    name: "donk", 
    fullName: 'Danil "⁠donk⁠" Kryshkovets', 
    code: "CSGO-HqNCm-zmBvH-eAd4P-hr5Dx-UJAfD", 
    image: "/crosshair/donk.png",
    desc: "Yeni nesil agresif oyun tarzı için ultra küçük yeşil." 
  },
  { 
    name: "ropz", 
    fullName: 'Robin "ropz" Kool', 
    code: "CSGO-5UHEt-3RFCY-4Nu8t-4UYGQ-vJN2G", 
    image: "/crosshair/ropz.png",
    desc: "Mükemmel yerleştirme ve net görüş sağlayan profesyonel ayar." 
  },
  { 
    name: "m0NESY", 
    fullName: 'Ilya "⁠m0NESY⁠" Osipov', 
    code: "CSGO-Xu7jD-Q8hte-wC6jj-eYmth-mRFuA", 
    image: "/crosshair/monesy.png",
    desc: "Keskin nişancı refleksi için optimize edilmiş yapı." 
  },
  { 
    name: "XANTARES", 
    fullName: 'Ismailcan "XANTARES" Dörtkardeş', 
    code: "CSGO-xbpe2-E24RJ-YXNuO-pQvt8-ppNAK", 
    image: "/crosshair/xantares.png",
    desc: "Peek canavarı için özel ayarlanmış efsanevi nişangah." 
  },
  { 
    name: "NiKo", 
    fullName: 'Nikola ⁠"NiKo"⁠ Kovač', 
    code: "CSGO-roNHs-zXRHO-uJUkC-9DUU8-euzQN", 
    image: "/crosshair/niko.png",
    desc: "One-tap krallarının tercihi, minimalist ve güvenilir." 
  },
  { 
    name: "s1mple", 
    fullName: 'Oleksandr "s1mple" Kostyliev', 
    code: "CSGO-qn2Ac-Ha9MX-87Kok-rVma5-ZmRBD", 
    image: "/crosshair/s1mple.png",
    desc: "Efsanenin yıllardır vazgeçmediği klasik nişangahı." 
  },
]

export default function CrosshairPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(code)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 pb-20 selection:bg-primary/20 selection:text-primary">
      <PageHeader 
        icon={Target} 
        title="Crosshair Arşivi" 
        description="Profesyonel oyuncuların güncel CS2 crosshair kodlarını tek tıkla kopyalayın." 
      />

      <div className="mb-10 mt-8">
        <InfoCard icon={Info} title="Nasıl Kullanılır?" variant="info">
          <p className="text-sm text-muted-foreground italic leading-relaxed">
            İstediğiniz oyuncunun kodunu kopyalayın ve oyun içinde <span className="text-primary font-bold">Ayarlar {">"} Oyun {'>'} Nişangah</span> sekmesindeki 
            <span className="text-primary font-bold"> "Paylaş veya İçe Aktar"</span> butonuna yapıştırın.
          </p>
        </InfoCard>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {crosshairData.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 duration-300"
          >
            {/* Crosshair Görseli (CS2 Dim Arka Planı) */}
            <div className="relative aspect-video w-full bg-background/40 flex items-center justify-center border-b border-border/50 transition-colors duration-300 group-hover:bg-background/80">
              <Image
                src={item.image}
                alt={`${item.name} crosshair`}
                fill
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
            </div>

            {/* Bilgi Alanı */}
            <div className="p-5 flex flex-col flex-1">
              <div className="mb-3">
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest leading-none">
                  {item.name === "gencuez" ? "FOUNDER" : "PRO PLAYER"}
                </span>
                <h3 className="text-lg font-black uppercase tracking-tighter leading-tight mt-1 text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-[10px] text-muted-foreground font-medium truncate opacity-60 italic">{item.fullName}</p>
              </div>
              
              <p className="text-xs text-muted-foreground flex-1 leading-relaxed">
                {item.desc}
              </p>
              
              <Button 
                variant={copied === item.code ? "secondary" : "default"}
                onClick={() => copyToClipboard(item.code)}
                className="mt-5 w-full gap-2 font-bold uppercase text-[10px] tracking-widest h-11"
              >
                {copied === item.code ? (
                  <>
                    <Check className="h-3 w-3 text-primary" /> KOPYALANDI
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" /> KODU KOPYALA
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}