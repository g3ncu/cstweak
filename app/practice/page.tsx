"use client"

import { motion } from "framer-motion"
import { Gamepad2, Info, FolderOpen, Terminal, CheckCircle, Download, ListChecks } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { InfoCard } from "@/components/info-card"
import { Button } from "@/components/ui/button"

// Sadeleştirilmiş kurulum adımları
const installSteps = [
  { 
    icon: Download, 
    text: "Aşağıdaki 'PRACTICE CFG İNDİR' butonuna tıklayarak dosyayı bilgisayarınıza indirin." 
  },
  { 
    icon: FolderOpen, 
    text: "İndirdiğiniz practice.cfg dosyasını şu klasöre kopyalayıp yapıştırın: C:\\Program Files (x86)\\Steam\\steamapps\\common\\Counter-Strike Global Offensive\\game\\csgo\\cfg" 
  },
  { 
    icon: Gamepad2, 
    text: "CS2'yi açın ve ayarlardan 'Geliştirici Konsolu'nu aktif ettiğinizden emin olun." 
  },
  { 
    icon: Terminal, 
    text: "Oyun içinde konsolu (~) açıp şu komutu yazın ve Enter'a basın: exec practice" 
  },
]

// CFG içindeki TÜM komutların açıklaması
const fullCommandExplanations = [
  { category: "Bot ve Takım Yönetimi", commands: [
    { cmd: "bot_kick", desc: "Sunucudaki mevcut tüm botları anında oyundan uzaklaştırır." },
    { cmd: "mp_warmup_end", desc: "Isınma süresini hemen bitirerek pratik modunu başlatır." },
    { cmd: "mp_limitteams 0", desc: "Takımlardaki oyuncu sayısı sınırlamasını kaldırır." },
    { cmd: "mp_autoteambalance 0", desc: "Takımlar arasındaki oyuncu sayısı dengesini otomatik sağlamayı kapatır." },
  ]},
  { category: "Ekonomi ve Satın Alma", commands: [
    { cmd: "mp_maxmoney 60000", desc: "Maksimum para limitini 60.000 dolara yükseltir." },
    { cmd: "mp_startmoney 60000", desc: "Başlangıç paranızı 60.000 dolar olarak ayarlar." },
    { cmd: "mp_buytime 9999", desc: "Satın alma süresini sınırsız (9999 saniye) yapar." },
    { cmd: "mp_buy_anywhere 1", desc: "Haritanın her yerinden silah ve ekipman almanızı sağlar." },
  ]},
  { category: "Süre ve Canlanma", commands: [
    { cmd: "mp_freezetime 0", desc: "Round başındaki dondurma süresini tamamen kaldırır." },
    { cmd: "mp_roundtime 60", desc: "Standart round süresini 60 dakikaya çıkarır." },
    { cmd: "mp_roundtime_defuse 60", desc: "Bomba imha modunda round süresini 60 dakika yapar." },
    { cmd: "mp_respawn_on_death_ct 1", desc: "Anti-Teröristlerin ölünce anında yeniden doğmasını sağlar." },
    { cmd: "mp_respawn_on_death_t 1", desc: "Teröristlerin ölünce anında yeniden doğmasını sağlar." },
  ]},
  { category: "Teknik ve Pratik Yardımcıları", commands: [
    { cmd: "sv_cheats 1", desc: "Sunucuda geliştirici komutlarının (noclip vb.) kullanımına izin verir." },
    { cmd: "sv_infinite_ammo 1", desc: "Sınırsız mermi ve el bombası sağlar." },
    { cmd: "sv_showimpacts 1", desc: "Mermilerin vuruş noktalarını renkli kutucuklarla gösterir." },
    { cmd: "sv_showimpacts_time 10", desc: "Mermi izlerinin ekranda 10 saniye kalmasını sağlar." },
    { cmd: "ammo_grenade_limit_total 5", desc: "Aynı anda 5 farklı el bombası taşımanıza imkan tanır." },
    { cmd: "sv_grenade_trajectory_prac_pipreview 1", desc: "Bomba atış çizgisini ve düştüğü yeri küçük bir önizleme ekranında gösterir." },
  ]},
  { category: "Sistem ve Bildirim", commands: [
    { cmd: "mp_restartgame 1", desc: "Tüm bu ayarların aktif olması için oyunu 1 saniye içinde yeniden başlatır." },
    { cmd: "echo \"...\"", desc: "Ayarlar başarıyla yüklendiğinde konsola bilgilendirme mesajı yazdırır." },
  ]},
]

export default function PracticePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 pb-20">
      <PageHeader
        icon={Gamepad2}
        title="Practice CFG"
        description="Antrenman sürecinizi hızlandıracak tüm komutları içeren hazır paket."
      />

      <InfoCard icon={Info} title="Bu CFG Ne İşe Yarar?" variant="info">
        <p>Bu konfigürasyon dosyası, CS2'de kendi başınıza yapacağınız smoke, flash ve spray antrenmanlarını optimize etmek için tasarlanmıştır. Manuel olarak düzinelerce komut yazmak yerine tek bir `exec` komutuyla tüm pratik ortamını hazırlar.</p>
      </InfoCard>

      {/* İndirme Alanı */}
      <section className="mt-8 mb-12">
        <div className="rounded-xl border-2 border-primary/20 bg-card p-10 text-center shadow-lg">
          <h2 className="text-xl font-bold mb-4 uppercase tracking-tighter">Dosyayı Doğrudan İndir</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
            Aşağıdaki butonu kullanarak <b>practice.cfg</b> dosyasını indirin ve CS2 dosyalarınızın arasına atın.
          </p>
          <a href="/downloads/practice.cfg" download="practice.cfg">
            <Button size="lg" className="gap-3 px-10 font-extrabold text-md shadow-md hover:scale-105 transition-transform">
              <Download className="h-6 w-6" />
              PRACTICE CFG İNDİR
            </Button>
          </a>
        </div>
      </section>

      {/* Kurulum Rehberi */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <ListChecks className="text-primary" />
          Hızlı Kurulum Adımları
        </h2>
        <div className="grid gap-4">
          {installSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-5 rounded-xl border border-border bg-card/50 p-5 hover:bg-secondary/10 transition-colors"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
                <step.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-[15px] font-medium leading-snug">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TÜM KOMUTLARIN AÇIKLAMASI */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-8">CFG İçindeki Tüm Komutlar ve İşlevleri</h2>
        <div className="grid gap-8">
          {fullCommandExplanations.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-primary mb-4 border-b border-primary/20 pb-2 uppercase tracking-widest text-xs">
                {category.category}
              </h3>
              <div className="grid gap-3">
                {category.commands.map((command, cIdx) => (
                  <div 
                    key={cIdx} 
                    className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/40 transition-all"
                  >
                    <code className="text-blue-400 font-mono text-sm font-bold bg-blue-500/5 px-2 py-1 rounded w-fit">
                      {command.cmd}
                    </code>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {command.desc}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="mt-12 rounded-xl border border-green-500/30 bg-green-500/5 p-6 flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
          <CheckCircle className="h-6 w-6 text-green-500" />
        </div>
        <div>
          <h4 className="font-bold text-green-500">Her Şey Hazır!</h4>
          <p className="text-sm text-muted-foreground">
            Dosyayı kopyaladıktan sonra oyuna girip tek komutla antrenman dünyanızı oluşturabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  )
}