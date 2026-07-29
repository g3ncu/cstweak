"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { 
  Monitor, Cpu, MemoryStick, HardDrive, Gamepad2, Clock, 
  Layers, Wind, Box, Keyboard, MousePointer2, Disc, Headphones, 
  Video, Sun, Maximize2, Target, Zap, Sliders
} from "lucide-react"

// Görsel yüklenene kadar görünecek bulanık taslak
const blurData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+Z9PQAJQAN0m90BQwAAAABJRU5ErkJggg=="

export default function KimimPage() {
  // 🎮 CS2 Oyun İçi Video Ayarları
  const videoSettings = [
    { icon: Sun, label: "Parlaklık", value: "%93" },
    { icon: Maximize2, label: "Ölçeklendirme", value: "Stretched (Uzatılmış)" },
    { icon: Sliders, label: "Görüntü Oranı", value: "4:3" },
    { icon: Monitor, label: "Çözünürlük", value: "1440x1080" },
    { icon: Monitor, label: "Görüntü Modu", value: "Tam Ekran" },
    { icon: Zap, label: "Yenileme Hızı", value: "310 Hz" },
  ]

  // 🖱️ Fare & Hassasiyet Ayarları
  const mouseSettings = [
    { icon: MousePointer2, label: "DPI", value: "800" },
    { icon: Sliders, label: "Fare Hassasiyeti (Sens)", value: "1.15" },
    { icon: Target, label: "Zoom Hassasiyeti", value: "1.0" },
    { icon: Zap, label: "Polling Rate", value: "1000 Hz" },
  ]

  // 🖥️ Sistem Bileşenleri
  const systemSpecs = [
    { icon: Layers, label: "Anakart", value: "Asus Prime B650M-R" },
    { icon: Cpu, label: "İşlemci", value: "AMD Ryzen 5 7500F" },
    { icon: MemoryStick, label: "RAM", value: "Patriot Viper Venom 16GB DDR5 (6000MHz CL30)" },
    { icon: HardDrive, label: "Ekran Kartı", value: "Gigabyte GeForce RTX 2060 OC 6GB" },
    { icon: Disc, label: "Depolama (SSD)", value: "James Donkey JD512 512GB NVMe M.2" },
    { icon: Wind, label: "İşlemci Soğutucu", value: "Enermax ETS-T50A-BK-ARGB" },
    { icon: Box, label: "Kasa", value: "FSP CMT 318" },
  ]

  // 🎧 Ekipman & Çevre Birimleri
  const peripherals = [
    { icon: Monitor, label: "Monitör", value: "Asus VG259QMR" },
    { icon: Keyboard, label: "Klavye", value: "Leobog A80 RT (Rapid Trigger)" },
    { icon: MousePointer2, label: "Fare (Mouse)", value: "Ajazz AJ179 Pro" },
    { icon: Layers, label: "Mousepad", value: "SteelSeries QcK+ Limited CS:GO Howl Edition" },
    { icon: Headphones, label: "Kulaklık", value: "Corsair Void RGB Elite" },
    { icon: Video, label: "Webcam", value: "Everest SC-HD03" },
  ]

  const stats = [
    { icon: Gamepad2, label: "CS Deneyimi", value: "10+ Yıl" },
    { icon: Clock, label: "Oynama Süresi", value: "11000+ Saat" },
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 pb-24 selection:bg-primary/20 selection:text-primary">
      <PageHeader 
        title="Kimim?" 
        description="CStweak.com'un arkasındaki kişi"
      />

      <div className="space-y-14 mt-8">
        {/* PROFİL KARTI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-border rounded-xl p-6 md:p-8 relative overflow-hidden group shadow-lg"
        >
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500"></div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-8">
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-xl overflow-hidden border-2 border-border group-hover:border-primary/40 transition-colors duration-300 shadow-md shrink-0">
              <Image
                src="/profil.png" 
                alt="Umut 'gencuez' Genç"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority 
                quality={85} 
                placeholder="blur" 
                blurDataURL={blurData}
                sizes="(max-width: 144px) 100vw, 144px"
              />
            </div>
            <div className="text-center md:text-left pt-2">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-widest uppercase">
                FOUNDER & DEVELOPER
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-foreground mt-3 mb-1 tracking-tight uppercase">
                Umut <span className="text-primary">&quot;gencuez&quot;</span> Genç
              </h2>
              <p className="text-xs text-muted-foreground font-mono opacity-70">94 / Trabzon</p>
            </div>
          </div>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed text-xs md:text-sm border-t border-border/50 pt-6 font-medium">
            <p>
              2016 yılında CS:GO ile başlayan bu macera, bugün <strong className="text-foreground font-bold">11.000 saatin üzerine çıkan</strong> ciddi bir oyun tecrübesine dönüştü. CS2&apos;nin çıkışıyla birlikte oyunu sadece oynamakla kalmayıp, arka plan mimarisine, gecikme (input lag) optimizasyonlarına ve donanım limitlerini zorlamaya odaklandım.
            </p>
            <p>
              Source 2 motorunun getirdiği yeni nesil gereksinimler doğrultusunda; emektar B450M S2H mimarisinden bugünkü güncel AM5/DDR5 kurulumuma kadar uzanan süreçte, en kusursuz ve kararlı değerleri yakalamak adına derin araştırmalar yaptım. Çevremdeki rekabetçi oyunculardan gelen yoğun ayar talepleri, bu bilgileri profesyonel bir rehber altında toplama fikrini doğurdu — işte <strong className="text-primary font-bold">CStweak.com</strong> bu şekilde hayata geçti.
            </p>
          </div>
        </motion.div>

        {/* REKABETÇİ İSTATİSTİKLER */}
        <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-all duration-300 shadow-sm"
            >
              <stat.icon className="w-7 h-7 text-primary mx-auto mb-2 opacity-90" />
              <p className="text-2xl md:text-3xl font-black text-foreground tracking-tight">{stat.value}</p>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* 🎮 CS2 CONFIG & SENSITIVITY BÖLÜMÜ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-px bg-gradient-to-r from-transparent to-border flex-1"></div>
            <h3 className="text-xs font-black text-primary tracking-widest uppercase flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20">
              <Gamepad2 className="w-3.5 h-3.5" /> CS2 OYUN İÇİ AYARLAR & SENS
            </h3>
            <div className="h-px bg-gradient-to-l from-transparent to-border flex-1"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Görüntü Ayarları Kartı */}
            <div className="p-5 rounded-xl border border-border bg-card shadow-sm space-y-4">
              <h4 className="text-[11px] font-black tracking-widest uppercase text-muted-foreground border-b border-border/50 pb-2 flex items-center gap-2">
                <Monitor className="w-3.5 h-3.5 text-primary" /> GÖRÜNTÜ (VIDEO) AYARLARI
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {videoSettings.map((set, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-background/40 border border-border/50 flex items-center gap-3 group hover:border-primary/20 transition-all">
                    <set.icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    <div>
                      <p className="text-[9px] uppercase text-muted-foreground font-bold tracking-wide leading-none mb-1">{set.label}</p>
                      <p className="text-xs font-black text-foreground tracking-wide">{set.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fare Ayarları Kartı */}
            <div className="p-5 rounded-xl border border-border bg-card shadow-sm space-y-4">
              <h4 className="text-[11px] font-black tracking-widest uppercase text-muted-foreground border-b border-border/50 pb-2 flex items-center gap-2">
                <MousePointer2 className="w-3.5 h-3.5 text-primary" /> FARE & HASSASİYET (SENS)
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {mouseSettings.map((set, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-background/40 border border-border/50 flex items-center gap-3 group hover:border-primary/20 transition-all">
                    <set.icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    <div>
                      <p className="text-[9px] uppercase text-muted-foreground font-bold tracking-wide leading-none mb-1">{set.label}</p>
                      <p className="text-xs font-black text-foreground tracking-wide">{set.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🖥️ SİSTEM BİLEŞENLERİ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px bg-gradient-to-r from-transparent to-border flex-1"></div>
            <h3 className="text-xs font-black text-foreground tracking-widest uppercase flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border shadow-sm">
              <Cpu className="w-3.5 h-3.5 text-primary" /> SİSTEM BİLEŞENLERİ
            </h3>
            <div className="h-px bg-gradient-to-l from-transparent to-border flex-1"></div>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemSpecs.map((spec, index) => (
              <div 
                key={index} 
                className="group flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 shadow-sm"
              >
                <div className="p-2.5 rounded-lg bg-background border border-border/50 text-muted-foreground group-hover:text-primary group-hover:border-primary/20 transition-colors shrink-0">
                  <spec.icon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">{spec.label}</p>
                  <p className="text-xs text-foreground font-black leading-snug tracking-wide">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 🎧 EKİPMAN & ÇEVRE BİRİMLERİ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px bg-gradient-to-r from-transparent to-border flex-1"></div>
            <h3 className="text-xs font-black text-foreground tracking-widest uppercase flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border shadow-sm">
              <Keyboard className="w-3.5 h-3.5 text-primary" /> EKİPMAN & ÇEVRE BİRİMLERİ
            </h3>
            <div className="h-px bg-gradient-to-l from-transparent to-border flex-1"></div>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {peripherals.map((spec, index) => (
              <div 
                key={index} 
                className="group flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 shadow-sm"
              >
                <div className="p-2.5 rounded-lg bg-background border border-border/50 text-muted-foreground group-hover:text-primary group-hover:border-primary/20 transition-colors shrink-0">
                  <spec.icon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">{spec.label}</p>
                  <p className="text-xs text-foreground font-black leading-snug tracking-wide">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* MOTİVASYON SÖZÜ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-5 shadow-inner"
        >
          <p className="text-center text-muted-foreground text-xs md:text-sm font-medium italic tracking-wide">
            &ldquo;Her frame altın değerinde, her milisaniye kritik. Donanımınızın potansiyelini sonuna kadar açığa çıkarın.&rdquo;
          </p>
          <p className="text-center text-primary text-[10px] font-black tracking-widest uppercase mt-3">- gencuez</p>
        </motion.div>
      </div>
    </div>
  )
}