"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Zap, Info, CheckCircle2 } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { InfoCard } from "@/components/info-card"
import { ImageLightbox } from "@/components/image-lightbox"

const blurData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+Z9PQAJQAN0m90BQwAAAABJRU5ErkJggg=="

const nvidiaImages = [
  { src: "/nv-1.png", title: "Görüntü Ayarlarını Önayarla", description: "Gelişmiş 3D görüntü ayarlarını kullan seçeneğini işaretleyin." },
  { src: "/nv-2.png", title: "Doku Süzme - Kalite", description: "Maksimum FPS için bu ayarı 'Yüksek Performans' yapın." },
  { src: "/nv-3.png", title: "Güç ve Gecikme Modu", description: "Güç yönetimini 'Maksimum Performans', Düşük Gecikme'yi 'Açık' yapın." },
  { src: "/nv-4.png", title: "OpenGL Oluşturma GPU'su", description: "Bu kısımdan kendi ekran kartınızı manuel seçin." },
  { src: "/nv-5.png", title: "PhysX Yapılandırması", description: "İşlemci seçimini 'Otomatik' yerine ekran kartınız olarak ayarlayın." },
  { src: "/nv-6.png", title: "Çözünürlük & Dinamik Aralık", description: "NVIDIA renk ayarlarını seçip Çıkış Dinamik Aralığını 'Tam' yapın." },
  { src: "/nv-7.png", title: "Masaüstü Renk Ayarları", description: "Digital Vibrance değerini %70 yaparak düşmanları daha net görün." },
  { src: "/nv-8.png", title: "Ölçeklendirme Modu", description: "'Tam Ekran' seçip 'Oyunlar tarafından belirlenen modu geçersiz kıl'ı işaretleyin." },
  { src: "/nv-9.png", title: "G-SYNC Ayarları", description: "Input lag oluşmaması için G-SYNC özelliğini tamamen kapatın." },
  { src: "/nv-10.png", title: "Video Renk Ayarları", description: "Video içeriğinin renklerini canlandırır. Bu ayar oyun performansını etkilemez, sadece daha iyi medya deneyimi içindir." },
]

export default function NvidiaPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 pb-20 selection:bg-primary/20 selection:text-primary">
      <PageHeader
        icon={Zap}
        title="NVIDIA Denetim Masası"
        description="Maksimum performans için ekran kartı ayarlarını optimize edin"
      />

      <div className="space-y-12 mt-8">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nvidiaImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group rounded-xl border border-border bg-card overflow-hidden shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300"
              >
                <ImageLightbox src={image.src} alt={image.title} title={image.title}>
                  <div className="relative aspect-video cursor-pointer bg-background/50 overflow-hidden flex items-center justify-center border-b border-border/50">
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
                
                <div className="p-4 bg-card min-h-[85px] flex flex-col justify-center">
                  <p className="text-xs font-black text-foreground uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">
                    {image.title}
                  </p>
                  <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard icon={Info} title="Neden Bu Ayarlar?" variant="info">
            <p className="text-sm leading-relaxed text-muted-foreground font-medium">
              Bu ayarlar, ekran kartının işlem gücünü oyunun gecikme süresine ve kare hızına odaklamasını sağlar. "Video Renk Ayarları" (nv-10) medya deneyimini iyileştirmek için eklenmiş olup oyun performansına doğrudan bir etkisi yoktur.
            </p>
          </InfoCard>

          <div className="p-6 rounded-xl border border-border bg-card shadow-md flex flex-col justify-center text-center hover:border-primary/20 transition-all duration-300">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2 justify-center text-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Sistem Notu
            </h3>
            <p className="text-xs text-muted-foreground font-medium leading-relaxed italic">
              Değişikliklerin etkili olması için "Uygula" dedikten sonra bilgisayarınızı yeniden başlatmanız önerilir.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}