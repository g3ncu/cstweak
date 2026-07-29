"use client"

import { useState, useEffect, useMemo } from "react"
import { Lightbulb } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

// Sabit ipuçları
const staticTips = [
  "Eğer işlemcin eskiyse, mouse polling rate değerini 1000Hz üzerine çıkarma, FPS düşürebilir.",
  "Rekabetçi oyunlarda Wi-Fi yerine her zaman CAT6 veya üzeri bir Ethernet kablosu kullan.",
  "Monitörünün 'Overdrive' ayarını en yükseğe alma, ghosting (gölgelenme) yapabilir.",
  "Radar ölçeğini (cl_radar_scale) küçülterek haritanın tamamını görebilirsin.",
  "DPI değerini artırıp oyun içi hassasiyeti (sensitivity) düşürmek, daha pürüzsüz bir 'pixel skipping'siz deneyim sağlar.",
  "Windows'un 'İşaretçi Hassasiyetini Artır' (Mouse Acceleration) ayarını mutlaka kapat, kas hafızanı bozar!",
  "Monitörünün gerçekten en yüksek Hz değerinde çalıştığından emin ol.",
  "NVIDIA kullanıcıları için: Digital Vibrance ayarını %70-80 civarına çekmek rakipleri ayırt etmeyi kolaylaştırır.",
  "Monitöründe varsa 'Black Equalizer' ayarı karanlık bölgelerdeki rakipleri görmeni kolaylaştırır.",
]

// Daktilo Efekti Bileşeni
function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    setDisplayedText("")
    setIsTyping(true)
    let index = 0
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(typeInterval)
      }
    }, 25)

    return () => clearInterval(typeInterval)
  }, [text])

  return (
    <span className="font-mono">
      {displayedText}
      {isTyping && (
        <span className="animate-pulse text-primary ml-0.5">|</span>
      )}
    </span>
  )
}

// Çarşamba sabah 05:00 hedefini doğru hesaplayan fonksiyon
function getNextDropTime(): Date {
  const now = new Date()
  const target = new Date(now)
  
  const currentDay = now.getDay() // 0: Pazar, 3: Çarşamba
  let daysUntilWednesday = (3 - currentDay + 7) % 7
  
  target.setHours(5, 0, 0, 0)

  // Bugün Çarşambaysa ve saat 05:00'i geçtiyse 7 gün ekle
  if (daysUntilWednesday === 0 && now.getTime() >= target.getTime()) {
    daysUntilWednesday = 7
  }

  target.setDate(now.getDate() + daysUntilWednesday)
  return target
}

// Süreyi Gün, Saat ve Dakika formatına çeviren fonksiyon
function formatTimeLeft(ms: number): string {
  if (ms <= 0) return "0 gün 0 saat 0 dakika"
  
  const totalMinutes = Math.floor(ms / (1000 * 60))
  const minutes = totalMinutes % 60
  const totalHours = Math.floor(totalMinutes / 60)
  const hours = totalHours % 24
  const days = Math.floor(totalHours / 24)
  
  return `${days} gün ${hours} saat ${minutes} dakika`
}

export function QuickTip() {
  const [currentTipIndex, setCurrentTipIndex] = useState(0)
  const [timeLeftStr, setTimeLeftStr] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const nextDrop = getNextDropTime()
      const diff = nextDrop.getTime() - now.getTime()
      setTimeLeftStr(formatTimeLeft(diff))
    }

    update()
    const timer = setInterval(update, 60000) 
    return () => clearInterval(timer)
  }, [])

  const allTips = useMemo(() => {
    const dropText = `Haftalık görevden drop almak için kalan süre: ${timeLeftStr}`
    return [dropText, ...staticTips]
  }, [timeLeftStr])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % allTips.length)
    }, 15000)
    return () => clearInterval(interval)
  }, [allTips.length])

  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <Lightbulb className="h-4 w-4 text-yellow-500" />
          </div>
          <div className="relative overflow-hidden flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTipIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xs text-muted-foreground"
              >
                <TypewriterText text={allTips[currentTipIndex]} />
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}