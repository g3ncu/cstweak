"use client"

import { motion } from "framer-motion"
import { Rocket, Info } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { CodeBlock } from "@/components/code-block"
import { CopyableCommand } from "@/components/copyable-command"

const launchOptions = [
  {
    option: "+exec gencucs2.cfg",
    description: "Oyun açılırken özel ayarlarımı içeren gencucs2.cfg dosyasını otomatik olarak çalıştırır. Böylece tüm kişisel ayarlarım hemen uygulanır.",
  },
  {
    option: "-allow_third_party_software",
    description: "Bazı üçüncü parti yazılımların (örneğin OBS, donanım RGB kontrol programları) oyunda sorunsuz çalışmasını sağlar.",
  },
  {
    option: "-nojoy",
    description: "Joystick/gamepad PC'ye bağlı olduğunda, aiminiz anlamsız hareket edebilir. Bu seçenek joystick/gamepad desteğini kapatır. Ayrıca sistem kaynaklarından tasarruf sağlar.",
  },
]

const fullLaunchOptions = "+exec gencucs2.cfg -allow_third_party_software -nojoy"

export default function LaunchPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        icon={Rocket}
        title="Başlatma Seçenekleri"
        description="CS2 başlatma seçeneklerini optimize edin"
      />

      {/* Full Launch Options */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Tüm Başlatma Seçenekleri</h2>
        <CodeBlock 
          code={fullLaunchOptions} 
          title="Steam Başlatma Seçenekleri" 
          language=" " // Buraya boş bir string vererek varsayılan "bash" değerini ezdik
        />
        <p className="mt-2 text-sm text-muted-foreground">
          <Info className="inline h-4 w-4 mr-1" />
          {"Kütüphane → Counter-Strike 2 → Sağ tık → Özellikler → Genel sekmesinde \"Başlatma Seçenekleri\" kutusuna yapıştırın."}
        </p>
      </section>

      {/* Option Explanations */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Seçenek Açıklamaları</h2>
        <div className="space-y-4">
          {launchOptions.map((item, index) => (
            <motion.div
              key={item.option}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-lg border border-border bg-card p-4"
            >
              <CopyableCommand command={item.option} className="mb-2" />
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}