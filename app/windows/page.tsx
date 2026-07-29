"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Layout, Info, CheckCircle } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { InfoCard } from "@/components/info-card"
import { ImageLightbox } from "@/components/image-lightbox"

const blurData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+Z9PQAJQAN0m90BQwAAAABJRU5ErkJggg=="

const windowsImages = [
  { src: "/win-1.png", title: "Performans Ayarları" },
  { src: "/win-2.png", title: "Nihai Performans" },
  { src: "/win-3.png", title: "GPU Zamanlaması" },
  { src: "/win-4.png", title: "Oyun Modu" },
  { src: "/win-5.png", title: "Grafik Ayarları" },
  { src: "/win-6.png", title: "Bildirim Ayarları" },
  { src: "/win-7.png", title: "Başlangıç Uygulamaları" },
  { src: "/win-8.png", title: "Depolama Temizliği" },
  { src: "/win-9.png", title: "Tarayıcı Gizlilik Ayarları" },
  { src: "/win-10.png", title: "Disk Önbelleği & Arabellek Ayarları" },
]

export default function WindowsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 pb-20">
      <PageHeader
        icon={Layout}
        title="Windows 11 Optimizasyonu"
        description="Gereksiz servisleri kapatın ve işletim sistemini tamamen oyun odaklı hale getirin"
      />

      <div className="space-y-12">
        {/* Görseller Grid Alanı */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {windowsImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              {/* alt={image.title} eklenerek TypeScript hatası çözüldü */}
              <ImageLightbox src={image.src} title={image.title} alt={image.title}>
                <div className="relative aspect-video w-full overflow-hidden bg-muted cursor-zoom-in">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-contain bg-black/90 group-hover:scale-[1.02] transition-transform duration-500"
                    placeholder="blur" 
                    blurDataURL={blurData}
                    priority={index < 3 || index === 9}
                  />
                </div>
              </ImageLightbox>
              
              {/* Alt Kısım: Başlık Alanı */}
              <div className="p-4 bg-card min-h-[60px] flex items-center justify-center text-center">
                <p className="text-xs font-black text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Bilgilendirme ve Not Kartları Alanı */}
        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard icon={Info} title="Neden Bu Ayarlar?" variant="info">
            <p className="text-sm leading-relaxed text-muted-foreground font-medium">
              Windows varsayılan ayarları sistem kaynaklarını arka plan servislerine bölebilir. Bu adımlar CPU ve RAM odağını tamamen oyuna çevirir.
            </p>
          </InfoCard>

          <div className="p-6 rounded-xl border border-border bg-card shadow-md flex flex-col justify-center text-center hover:border-primary/20 transition-all duration-300">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2 justify-center text-foreground">
              <CheckCircle className="h-4 w-4 text-primary" />
              Sistem Notu
            </h3>
            <p className="text-xs text-muted-foreground font-medium leading-relaxed italic">
              Değişikliklerin kararlı bir şekilde kaydedilmesi ve aktif olması için ayarları uyguladıktan sonra sistemi yeniden başlatın.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}