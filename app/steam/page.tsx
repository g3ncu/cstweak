"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Cpu, Info, CheckCircle2 } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { InfoCard } from "@/components/info-card"
import { ImageLightbox } from "@/components/image-lightbox"

const blurData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+Z9PQAJQAN0m90BQwAAAABJRU5ErkJggg=="

const steamImages = [
  { src: "/steam-1.png", title: "Arayüz Ayarları" },
  { src: "/steam-2.png", title: "Kütüphane Optimizasyonu" },
  { src: "/steam-3.png", title: "İndirme Ayarları" },
  { src: "/steam-4.png", title: "Yayın ve Remote Play" },
  { src: "/steam-5.png", title: "Başlatma Seçenekleri" },
]

export default function SteamPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 pb-20 selection:bg-primary/20 selection:text-primary">
      <PageHeader
        icon={Cpu}
        title="Steam Optimizasyonu"
        description="Steam'in arka planda sisteminizi yormasını engelleyin"
      />

      <div className="space-y-12 mt-8">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steamImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group rounded-xl border border-border bg-card overflow-hidden shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300"
              >
                <ImageLightbox src={image.src} alt={image.title} title={image.title}>
                  <div className="relative aspect-video cursor-pointer bg-background/40 overflow-hidden flex items-center justify-center border-b border-border/50">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      placeholder="blur"
                      blurDataURL={blurData}
                      priority={index < 3}
                    />
                  </div>
                </ImageLightbox>
                
                {/* Alt Kısım: Başlık Alanı (CS2 Dim Temasıyla Tam Uyumlu) */}
                <div className="p-4 bg-card min-h-[60px] flex items-center justify-center text-center">
                  <p className="text-xs font-black text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
                    {image.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard icon={Info} title="Neden Bu Ayarlar?" variant="info">
            <p className="text-sm leading-relaxed text-muted-foreground font-medium">
              Steam arka planda ağır bir web tarayıcısı gibi çalışır. Bu ayarlar, işlemci yükünü minimize ederek oyun performansını artırır.
            </p>
          </InfoCard>

          <div className="p-6 rounded-xl border border-border bg-card shadow-md flex flex-col justify-center text-center hover:border-primary/20 transition-all duration-300">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2 justify-center text-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Hatırlatma
            </h3>
            <p className="text-xs text-muted-foreground font-medium leading-relaxed italic">
              Ayarları uyguladıktan sonra Steam'i tamamen kapatıp yeniden başlatmayı unutmayın.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}