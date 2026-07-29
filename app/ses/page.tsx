"use client"

import { motion } from "framer-motion"
import { Volume2, Headphones, Target, Info } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { InfoCard } from "@/components/info-card"

const eqSettings = [
  { freq: "32 Hz", gain: "-2 dB", description: "Derin bas (patlama, motor vs.)", detail: "Çok düşük frekanslı sesler, ayak sesleriyle ilgisiz. Bu sesler azaltılarak gereksiz gürültü bastırılıyor.", color: "bg-red-500" },
  { freq: "64 Hz", gain: "-2 dB", description: "Bas (derin gürültü, silah yankısı)", detail: "Silah yankıları ve derin ortam gürültüsü azaltılarak dikkat dağıtıcı unsurlar törpüleniyor.", color: "bg-red-500" },
  { freq: "125 Hz", gain: "+4 dB", description: "Bas-alt orta (ayak sesi başlangıcı)", detail: "Ayak sesleri burada hissedilmeye başlar. Bu frekansın artırılması, adımların daha belirgin duyulmasını sağlar.", color: "bg-green-500" },
  { freq: "250 Hz", gain: "+4 dB", description: "Alt orta frekans", detail: "Ayak sesleri bu bantta daha netleşir. Artırılması, adım frekanslarını daha öne çıkarır.", color: "bg-green-500" },
  { freq: "500 Hz", gain: "+6 dB", description: "Orta frekans", detail: "Bu frekansta ayak sürtünmeleri ve ayak adım tonları netleşir. Artırılması kritik.", color: "bg-green-500" },
  { freq: "1k Hz", gain: "+6 dB", description: "Orta frekans (insan sesine yakın)", detail: "Ayak sesi detaylarının en belirgin olduğu frekanslardan biri. Yüksek artırma, netlik sağlar.", color: "bg-green-500" },
  { freq: "2k Hz", gain: "-2 dB", description: "Üst orta frekans (silah sesleri, vokaller)", detail: "Silah sesi, bağırma gibi gürültüler buradadır. Azaltılarak dikkat ayak seslerine çekilir.", color: "bg-red-500" },
  { freq: "4k Hz", gain: "0 dB", description: "Üst frekans", detail: "Nötr bırakılmış. Bu bant genelde çevresel efektlerde kullanılır. Ne azaltılmış ne artırılmış.", color: "bg-gray-500" },
  { freq: "8k Hz", gain: "+4 dB", description: "Tiz (ayak sesi ayrıntıları, kumaş hışırtısı)", detail: "Ayak seslerinin detayları burada hissedilir. Artırmak, çevresel küçük sesleri öne çıkarır.", color: "bg-green-500" },
  { freq: "16k Hz", gain: "+4 dB", description: "Üst tiz (ambiyans, yaprak hışırtısı)", detail: "Yüksek frekanstaki küçük hareketlerin netleşmesini sağlar.", color: "bg-green-500" },
]

const effects = [
  "Ayak sesleri öne çıkarılır.",
  "Patlama ve silah sesleri geri plana atılır.",
  "Düşük frekanslı gürültüler azaltılır.",
  "Yüksek frekans detayları artırılır, böylece düşman hareketleri, sürtünmeler, ufak çevresel ipuçları daha net duyulur.",
]

const tips = [
  "Bu ayarlar, stereo ya da surround fark etmeksizin, kulaklığınızın frekans cevabına göre farklı etkiler yaratabilir.",
  "En iyi sonuç için oyun içi ses ayarlarını da sade tut (örn. müzik kapalı, çevresel sesler az).",
  "EQ ayarını uyguladıktan sonra test yap: antrenman haritası, botlar, veya ranked maç ile deneyimle.",
]

export default function SesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        icon={Volume2}
        title="Ses Ayarları"
        description="Ayak seslerini daha net duymak için EQ frekans ayarları"
      />

      {/* EQ Graph Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 overflow-hidden rounded-lg border border-border bg-card p-6"
      >
        <h3 className="mb-6 font-semibold">EQ Kazanım Grafiği</h3>
        <div className="flex items-end justify-between gap-2 h-48">
          {eqSettings.map((setting, index) => {
            const gainValue = parseInt(setting.gain)
            const height = ((gainValue + 8) / 14) * 100 // Normalize to 0-100%
            
            return (
              <motion.div
                key={setting.freq}
                initial={{ height: 0 }}
                animate={{ height: `${Math.max(height, 10)}%` }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-1 flex-col items-center"
              >
                <div
                  className={`w-full rounded-t-sm ${setting.color} transition-all`}
                  style={{ height: "100%" }}
                />
                <span className="mt-2 text-xs text-muted-foreground whitespace-nowrap">{setting.freq}</span>
                <span className={`text-xs font-medium ${gainValue > 0 ? 'text-green-500' : gainValue < 0 ? 'text-red-500' : 'text-muted-foreground'}`}>
                  {setting.gain}
                </span>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Frequency Details */}
      <div className="mb-8 space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Volume2 className="h-5 w-5 text-primary" />
          Frekanslar ve Anlamları
        </h3>
        <div className="grid gap-3">
          {eqSettings.map((setting, index) => (
            <motion.div
              key={setting.freq}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className={`h-3 w-3 rounded-full mt-1.5 ${setting.color}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">{setting.freq}</span>
                    <span className={`text-sm font-mono ${parseInt(setting.gain) > 0 ? 'text-green-500' : parseInt(setting.gain) < 0 ? 'text-red-500' : 'text-muted-foreground'}`}>
                      {setting.gain}
                    </span>
                  </div>
                  <p className="text-sm text-primary mb-1">{setting.description}</p>
                  <p className="text-sm text-muted-foreground">{setting.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Effects */}
      <InfoCard icon={Headphones} title="Bu Ayarın Genel Etkisi" variant="success">
        <ul className="space-y-2">
          {effects.map((effect, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              {effect}
            </li>
          ))}
        </ul>
      </InfoCard>

      {/* Tips */}
      <div className="mt-6">
        <InfoCard icon={Target} title="Kullanım Tavsiyesi" variant="info">
          <ul className="space-y-2">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                {tip}
              </li>
            ))}
          </ul>
        </InfoCard>
      </div>
    </div>
  )
}
