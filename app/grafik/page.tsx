"use client"

import { Monitor } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SettingsTable } from "@/components/settings-table"

const displaySettings = [
  { name: "Görüntü Modu", value: "Tam Ekran", highlight: true },
  { name: "Görüntü Oranı", value: "Normal 4:3" },
  { name: "Çözünürlük", value: "1440x1080", highlight: true },
  { name: "Yenileme Hızı", value: "Max. Hz" },
  { name: "Parlaklık", value: "93%" },
]

const advancedDisplaySettings = [
  { name: "Oyuncu Kontrastını Artır", value: "Etkin", highlight: true },
  { name: "Dikey Eşitleme", value: "Devre Dışı" },
  { name: "NVIDIA G-Sync", value: "Devre Dışı" },
  { name: "NVIDIA Reflex Düşük Gecikme", value: "Enabled + Boost", highlight: true },
  { name: "Oyun İçi Maksimum FPS", value: "0", highlight: true },
  { name: "Menülerde Maksimum FPS", value: "200" },
]

const qualitySettings = [
  { name: "Mevcut Ön Ayar", value: "Özel" },
  { name: "Keskinliği Yumuşatma", value: "2x MSAA", highlight: true },
  { name: "Evrensel Gölge Kalitesi", value: "Düşük" },
  { name: "Dinamik Gölgeler", value: "Tümü" },
  { name: "Model / Doku Detayı", value: "Düşük" },
  { name: "Doku Filtreleme", value: "Eşyönsüz Süzme 16X", highlight: true },
  { name: "Shader Detayı", value: "Düşük" },
  { name: "Parçacık Detayı", value: "Düşük" },
  { name: "Çevre Emilimi", value: "Devre Dışı" },
  { name: "Yüksek Dinamik Aralık (HDR)", value: "Kaliteli" },
  { name: "FidelityFX Super Resolution", value: "Devre Dışı (En Yüksek Kalite)" },
]

export default function GrafikPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        icon={Monitor}
        title="Grafik Ayarları"
        description="Yüksek görüntü kalitesi, fps ve oyun performansı için optimize ayarlar"
      />

      <div className="space-y-6">
        <SettingsTable title="Görüntü Ayarları" settings={displaySettings} />
        <SettingsTable title="Gelişmiş Görüntü" settings={advancedDisplaySettings} />
        <SettingsTable title="Görüntü Kalitesi Ayarları" settings={qualitySettings} />
      </div>
    </div>
  )
}
