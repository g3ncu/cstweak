"use client"

import { motion } from "framer-motion"
import { HelpCircle, Lock, Target, Gpu } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    icon: Lock,
    question: "CFG neden şifreli?",
    answer: "Çünkü bu CFG rastgele yazılmış birkaç komuttan ibaret değil; yılların emeği ve deneyimi var içinde. Bu yüzden sadece destek olanlarla paylaşıyorum.\n\nBağışınızı donate.bynogame.com/gencuez üzerinden yaptıktan sonra, iletişim sayfasından bana ulaştığınızda şifre sizinle paylaşılacaktır."
  },
  {
    icon: Target,
    question: "Headshot attığım oyuncu neden ölmüyor?",
    answer: "Oyun ayarlarında Hasar Tahmini adında bir seçenek bulunuyor. Bu özellik, sunucudan onay beklemeden, hasar verdiğinizde ses/görsel efektlerin anında oynatılmasını sağlar. Temel amacı, ateş etmeyi daha tepkisel ve akıcı hissettirmektir; ancak bu sadece bir tahmin olduğundan, bazen yanlış olabilir.\n\nŞu anda üç seçenek mevcut ve Valve bu teknolojiyi hâlâ geliştirdiği için aşağıdaki ayarları kullanmanızı öneriyoruz:\n\n• Gövdeye Gelen Vuruş Efektlerini Tahmin Et: Hayır\n• Kafaya Gelen Vuruş Efektlerini Tahmin Et: Hayır\n• Ölümü Tahmin Et: Hayır"
  },
  {
    icon: Gpu,
    question: "AMD ekran kartı ayarları neden yok?",
    answer: "Şahsen AMD ekran kartıyla hiç CS2 oynamadım, dolayısıyla test etme ve optimize etme şansım olmadı. Deneyimlemediğim ayarları sizlerle paylaşmak istemedim.\n\nCS2 topluluğunun genel tercihi de bu yönde olduğu için, ben de NVIDIA ekran kartı kullanmanızı tavsiye ederim. AMD ise işlemci tarafında gayet iyi bir tercih olabilir."
  },
]

export default function SSSPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        icon={HelpCircle}
        title="Sık Sorulan Sorular"
        description="En çok merak edilen soruların cevapları"
      />

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <AccordionItem
              value={`item-${index}`}
              className="rounded-lg border border-border bg-card px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <faq.icon className="h-5 w-5" />
                  </div>
                  <span className="text-left font-medium">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                <div className="pl-13 text-muted-foreground whitespace-pre-line leading-relaxed">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  )
}
