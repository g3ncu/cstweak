"use client"

import { motion } from "framer-motion"
import { 
  Cpu, ShieldCheck, Zap, Server, CheckCircle, Shield, 
  Activity, Power, Settings, Download
} from "lucide-react"
import { PageHeader } from "@/components/page-header"

const performanceSettings = [
  {
    title: "AI Overclock Tuner",
    value: "EXPO I",
    icon: Zap,
    colorClass: "text-blue-500",
    bgClass: "bg-blue-500/10",
    borderHover: "hover:border-blue-500/50",
    glowClass: "bg-blue-500/5",
    glowHover: "group-hover:bg-blue-500/15",
    description: "RAM frekanslarını fabrikasyon stabilite olan 6000 MT/s seviyesine sabitler."
  },
  {
    title: "Memory Context Restore",
    value: "Disabled",
    icon: Power,
    colorClass: "text-blue-500",
    bgClass: "bg-blue-500/10",
    borderHover: "hover:border-blue-500/50",
    glowClass: "bg-blue-500/5",
    glowHover: "group-hover:bg-blue-500/15",
    description: "Bellek eğitimini her açılışta zorunlu kılarak donanımsal reset sorununu önler."
  },
  {
    title: "Power Down Enable",
    value: "Disabled",
    icon: Activity,
    colorClass: "text-blue-500",
    bgClass: "bg-blue-500/10",
    borderHover: "hover:border-blue-500/50",
    glowClass: "bg-blue-500/5",
    glowHover: "group-hover:bg-blue-500/15",
    description: "RAM uyku modunu tamamen kapatarak ani mavi ekran riskini ortadan kaldırır."
  }
]

const systemSettings = [
  {
    title: "Global C-state Control",
    value: "Disabled",
    icon: Cpu,
    colorClass: "text-orange-500",
    bgClass: "bg-orange-500/10",
    borderHover: "hover:border-orange-500/50",
    glowClass: "bg-orange-500/5",
    glowHover: "group-hover:bg-orange-500/15",
    description: "İşlemcinin boştayken voltaj düşürüp sistemin çakılmasını engeller."
  },
  {
    title: "ErP Ready",
    value: "Enabled",
    icon: Settings,
    colorClass: "text-orange-500",
    bgClass: "bg-orange-500/10",
    borderHover: "hover:border-orange-500/50",
    glowClass: "bg-orange-500/5",
    glowHover: "group-hover:bg-orange-500/15",
    description: "Sistem kapalıyken USB ve anakart üzerindeki gereksiz güç akışını keser."
  },
  {
    title: "Armoury Crate",
    value: "Disabled",
    icon: Download,
    colorClass: "text-orange-500",
    bgClass: "bg-orange-500/10",
    borderHover: "hover:border-orange-500/50",
    glowClass: "bg-orange-500/5",
    glowHover: "group-hover:bg-orange-500/15",
    description: "Sistem kaynaklarını tüketen gereksiz anakart yazılımını bloklar."
  }
]

const securitySettings = [
  {
    title: "OS Type",
    value: "Windows UEFI mode",
    icon: Server,
    colorClass: "text-green-500",
    bgClass: "bg-green-500/10",
    borderHover: "hover:border-green-500/50",
    glowClass: "bg-green-500/5",
    glowHover: "group-hover:bg-green-500/15",
    description: "Faceit AC ve modern işletim sistemleri için zorunlu mimari yapı."
  },
  {
    title: "Secure Boot Mode",
    value: "Standard",
    icon: Shield,
    colorClass: "text-green-500",
    bgClass: "bg-green-500/10",
    borderHover: "hover:border-green-500/50",
    glowClass: "bg-green-500/5",
    glowHover: "group-hover:bg-green-500/15",
    description: "Windows 11 ve Anti-Cheat sistemleriyle %100 donanım uyumu sağlar."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export default function BiosPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 pb-24 selection:bg-primary/30">
      <PageHeader
        icon={Cpu}
        title="Sıfır Risk: 8 Kritik Ayar"
        description="Donanımsal stabiliteyi merkeze alan ve Faceit uyumluluğu sunan kusursuz BIOS profili."
      />

      <div className="space-y-16 mt-12">
        
        {/* BÖLÜM 1: Bellek ve Performans */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 shadow-inner">
              <Zap className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-black tracking-tight text-foreground">Performans & Bellek</h2>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-5 md:grid-cols-3"
          >
            {performanceSettings.map((setting, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative p-6 rounded-3xl border border-border/40 bg-card/40 backdrop-blur-xl shadow-sm transition-all duration-500 ${setting.borderHover} overflow-hidden flex flex-col justify-between`}
              >
                <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl transition-all duration-700 ${setting.glowClass} ${setting.glowHover} -z-10`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${setting.bgClass} ${setting.colorClass} ring-1 ring-inset ring-foreground/5 group-hover:scale-110 transition-transform duration-300`}>
                      <setting.icon className="h-4 w-4" />
                    </div>
                    <p className="text-[13px] font-bold text-muted-foreground uppercase tracking-wider">{setting.title}</p>
                  </div>
                  <p className="text-2xl font-black text-foreground tracking-tight mb-3 group-hover:translate-x-1 transition-transform duration-300">{setting.value}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">{setting.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* BÖLÜM 2: Güç ve Sistem */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20 shadow-inner">
              <Power className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-black tracking-tight text-foreground">Güç Yönetimi & Sistem</h2>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-5 md:grid-cols-3"
          >
            {systemSettings.map((setting, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative p-6 rounded-3xl border border-border/40 bg-card/40 backdrop-blur-xl shadow-sm transition-all duration-500 ${setting.borderHover} overflow-hidden flex flex-col justify-between`}
              >
                <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl transition-all duration-700 ${setting.glowClass} ${setting.glowHover} -z-10`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${setting.bgClass} ${setting.colorClass} ring-1 ring-inset ring-foreground/5 group-hover:scale-110 transition-transform duration-300`}>
                      <setting.icon className="h-4 w-4" />
                    </div>
                    <p className="text-[13px] font-bold text-muted-foreground uppercase tracking-wider">{setting.title}</p>
                  </div>
                  <p className="text-2xl font-black text-foreground tracking-tight mb-3 group-hover:translate-x-1 transition-transform duration-300">{setting.value}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">{setting.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* BÖLÜM 3: Faceit ve Güvenlik */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-green-500/10 text-green-500 border border-green-500/20 shadow-inner">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-black tracking-tight text-foreground">Güvenlik & Anti-Cheat</h2>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-5 md:grid-cols-2"
          >
            {securitySettings.map((setting, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative p-8 rounded-3xl border border-border/40 bg-card/40 backdrop-blur-xl shadow-sm transition-all duration-500 ${setting.borderHover} overflow-hidden flex flex-col justify-between`}
              >
                <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl transition-all duration-700 ${setting.glowClass} ${setting.glowHover} -z-10`} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-xl ${setting.bgClass} ${setting.colorClass} ring-1 ring-inset ring-foreground/5 group-hover:scale-110 transition-transform duration-300`}>
                      <setting.icon className="h-6 w-6" />
                    </div>
                    <span className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-green-500 border border-green-500/20 shadow-sm">
                      Zorunlu
                    </span>
                  </div>
                  <p className="text-sm font-bold text-muted-foreground mb-2">{setting.title}</p>
                  <p className="text-3xl font-black text-foreground tracking-tight mb-4 group-hover:translate-x-1 transition-transform duration-300">{setting.value}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">{setting.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* F10 UYARISI */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 p-8 rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent shadow-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-primary/40 transition-colors"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-700" />
          
          <div className="relative z-10 bg-background/50 p-4 rounded-full mb-4 ring-1 ring-primary/20 backdrop-blur-md">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-black mb-3 tracking-tight text-foreground relative z-10">
            Değişiklikleri Kaydedin
          </h3>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-xl mx-auto relative z-10">
            Sistemin stabil çalışması için tüm ayarları eksiksiz yaptığınızdan emin olun. Sonrasında klavyenizden <code className="bg-foreground/10 px-3 py-1 rounded-lg font-mono font-black text-primary border border-primary/20 mx-1">F10</code> tuşuna basarak kaydedip çıkış yapabilirsiniz.
          </p>
        </motion.div>

      </div>
    </div>
  )
}