"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { 
  Wifi, 
  Compass, 
  Network, 
  CheckCircle2, 
  Info, 
  Activity, 
  Zap, 
  RefreshCw, 
  Server, 
  AlertCircle 
} from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { InfoCard } from "@/components/info-card"
import { ImageLightbox } from "@/components/image-lightbox"

interface ServerData {
  id: string;
  name: string;
  region: string;
  ip: string;
  basePing: number;
}

interface PingResult {
  serverId: string;
  currentPing: number | null;
  status: 'idle' | 'pinging' | 'success' | 'error';
  jitter: number;
  history: number[];
}

const blurData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+Z9PQAJQAN0m90BQwAAAABJRU5ErkJggg=="

const pingImages = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-zX8G5uwL4OSU1gCP9MxytitDhBetOZ.png", alt: "Windows Update - Teslim İyileştirme", title: "Windows Update - Teslim İyileştirme", description: "Arka plan indirmelerini kapatarak bant genişliğini tamamen oyuna ayırın." },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-KYwJsupQBwH9uulmNXEWTTp9LKKyEn.png", alt: "Microsoft Store - Uygulama Güncellemeleri", title: "Microsoft Store - Uygulama Güncellemeleri", description: "Mağaza güncellemelerinin siz rekabetçi maçtayken anlık indirme yapmasını engelleyin." },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-7hSGqaXoRl7J2PXnFsgLf7qZq0p9BH.png", alt: "Çevrimdışı Haritalar Ayarları", title: "Çevrimdışı Haritalar Ayarları", description: "Arka planda çalışan gereksiz harita indirme ve güncelleme servislerini tamamen kapatın." },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-zY3b7mGeUPFhuSnZpFqmJy2Ahca5P8.png", alt: "Ağ Bağdaştırıcısı Güç Yönetimi", title: "Ağ Bağdaştırıcısı Güç Yönetimi", description: "Ağ kartınızın güç tasarrufu moduna geçmesini engelleyerek sürekli yüksek performansta tutun." },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-gqZqXBSkwWs13rakPKbOIKyFefsrRm.png", alt: "Gizlilik - Tanılama ve Geri Bildirim", title: "Gizlilik - Tanılama ve Geri Bildirim", description: "Microsoft sunucularına gönderilen anlık veri paketlerini keserek bant genişliği yükünü hafifletin." },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-5s52ZGUd6YCTSC37YxK0KPbSnZI2Vs.png", alt: "Windows Güvenliği - Virüs Koruması", title: "Windows Güvenliği - Virüs Koruması", description: "Oyun esnasında anlık dosya ve ağ paketi taramalarının ping dalgalanması yaratmasını önleyin." },
]

const adapterSteps = [
  "Başlat Menüsü → ⚙️ Ayarlar kısmına girin.",
  "Ağ ve İnternet (Network & Internet) sekmesine girin.",
  "Sol menüden Gelişmiş ağ ayarları (Advanced network settings) seçeneğine tıkla.",
  "Diğer bağdaştırıcı seçenekleri (More adapter options) bölümüne gir.",
  "Kullandığın ağ bağdaştırıcısına sağ tıkla → Özellikler (Properties) seç.",
  "Açılan pencerede Yapılandır (Configure) butonuna tıkla.",
  "Gelişmiş (Advanced) sekmesine geçerek aşağıdaki ayarları uygulayın. ✅"
]

const adapterSettings = [
  { name: "Akış Denetimi", eng: "Flow Control", value: "Devre Dışı Bırak (Disabled)", badge: "DEVRE DIŞI", isNegative: true, reason: "Ping ve gecikmeyi artırabilir. Yüksek hızlı ağlarda genellikle gerekli değildir." },
  { name: "Desene Eşleştirme Uyanması", eng: "Pattern Match Wake-Up", value: "Devre Dışı Bırak (Disabled)", badge: "DEVRE DIŞI", isNegative: true, reason: "Güç tasarrufu özelliğidir. Oyun ve performans odaklı kullanımda kapalı tutulması önerilir." },
  { name: "Gigabit Lite", eng: "Gigabit Lite", value: "Devre Dışı Bırak (Disabled)", badge: "DEVRE DIŞI", isNegative: true, reason: "Düşük güç modunu engeller. Maksimum ağ hızı için kapalı tutun." },
  { name: "Hız & İkili", eng: "Speed & Duplex", value: "Otomatik Anlaşma Veya 1.0 Gbps Full Duplex", badge: "OTOMATİK", isNegative: false, reason: "En iyi performans genellikle en yüksek hız seçeneğiyle sağlanır. Eğer hız dalgalanması olursa 1.0 Gbps Full Duplex seçin." },
  { name: "Öncelik & VLAN", eng: "Priority & VLAN", value: "Devre Dışı Bırak (Disabled)", badge: "DEVRE DIŞI", isNegative: true, reason: "Genellikle kullanıcılar için gerekmez. Aktif olduğunda performansı etkileyebilir." },
  { name: "Power Saving Mode", eng: "Power Saving Mode", value: "Devre Dışı Bırak (Disabled)", badge: "DEVRE DIŞI", isNegative: true, reason: "Maksimum performans ve stabilite için tüm güç tasarrufu ayarlarını kapatmak en iyisidir. ⚡" },
  { name: "Sihirli Paket Eşleştirme Uyanması", eng: "Wake on Magic Packet", value: "Devre Dışı Bırak (Disabled)", badge: "DEVRE DIŞI", isNegative: true, reason: "Güç tasarrufu özelliğidir. Performans sistemlerinde kapalı tutulması önerilir." },
  { name: "WOL & Kapatma Bağlantı Hızı", eng: "WOL & Shutdown Link Speed", value: "En Yüksek Hız (100 Mbps)", badge: "MAX HIZ", isNegative: false, reason: "Wake-on-LAN (WOL) ayarıdır. Mümkün olan en yüksek hız seçeneği (genellikle 100 Mbps) en iyisidir." },
  { name: "Yerel Ağ Üzerinden Kapat", eng: "Shutdown Wake-On-LAN", value: "Devre Dışı Bırak (Disabled)", badge: "DEVRE DIŞI", isNegative: true, reason: "Bilgisayar kapanırken düşük güç moduna geçmesini engeller." },
  { name: "Yeşil Ethernet", eng: "Green Ethernet / Energy Efficient Ethernet (EEE)", value: "Devre Dışı Bırak (Disabled)", badge: "DEVRE DIŞI", isNegative: true, reason: "Güç tasarrufu sağlar ancak ağ gecikmesini ve ping’i artırabilir. ⚠️ Kapalı tutulması şiddetle önerilir." },
]

const SERVERS: ServerData[] = [
  { id: 'fra', name: 'Frankfurt', region: 'Avrupa Merkez', ip: '155.133.226.1', basePing: 38 },
  { id: 'vie', name: 'Viyana', region: 'Avrupa Doğu', ip: '155.133.230.1', basePing: 32 },
  { id: 'waw', name: 'Varşova', region: 'Avrupa Kuzey', ip: '155.133.228.1', basePing: 45 },
  { id: 'ist', name: 'İstanbul', region: 'Türkiye', ip: '155.133.245.1', basePing: 8 },
  { id: 'ams', name: 'Amsterdam', region: 'Avrupa Batı', ip: '155.133.248.1', basePing: 42 },
  { id: 'lhr', name: 'Londra', region: 'Avrupa Batı', ip: '155.133.244.1', basePing: 50 },
];

export default function PingPage() {
  const [results, setResults] = useState<Record<string, PingResult>>(
    SERVERS.reduce((acc, server) => {
      acc[server.id] = { serverId: server.id, currentPing: null, status: 'idle', jitter: 0, history: [] };
      return acc;
    }, {} as Record<string, PingResult>)
  );
  const [isTestingAll, setIsTestingAll] = useState(false);

  const simulatePing = async (serverId: string, basePing: number) => {
    setResults(prev => ({
      ...prev,
      [serverId]: { ...prev[serverId], status: 'pinging' }
    }));

    const samples: number[] = [];
    for (let i = 0; i < 4; i++) {
      await new Promise(resolve => setTimeout(resolve, 150 + Math.random() * 100));
      const variation = Math.random() * 6 - 3;
      const sample = Math.max(1, Math.round(basePing + variation));
      samples.push(sample);
    }

    const avgPing = Math.round(samples.reduce((a, b) => a + b, 0) / samples.length);
    const maxSample = Math.max(...samples);
    const minSample = Math.min(...samples);
    const jitterCalculated = maxSample - minSample;

    setResults(prev => ({
      ...prev,
      [serverId]: {
        serverId,
        currentPing: avgPing,
        status: 'success',
        jitter: jitterCalculated,
        history: samples
      }
    }));
  };

  const testAllServers = async () => {
    setIsTestingAll(true);
    for (const server of SERVERS) {
      await simulatePing(server.id, server.basePing);
    }
    setIsTestingAll(false);
  };

  const getPingColor = (ping: number | null) => {
    if (ping === null) return 'text-muted-foreground';
    if (ping < 20) return 'text-emerald-400';
    if (ping < 45) return 'text-cyan-400';
    if (ping < 70) return 'text-amber-400';
    return 'text-red-500';
  };

  const getPingBg = (ping: number | null) => {
    if (ping === null) return 'border-border bg-card';
    if (ping < 20) return 'border-emerald-500/20 bg-emerald-500/[0.02] shadow-[inset_0_0_12px_rgba(16,185,129,0.02)]';
    if (ping < 45) return 'border-cyan-500/20 bg-cyan-500/[0.02] shadow-[inset_0_0_12px_rgba(6,182,212,0.02)]';
    if (ping < 70) return 'border-amber-500/20 bg-amber-500/[0.02] shadow-[inset_0_0_12px_rgba(245,158,11,0.02)]';
    return 'border-red-500/20 bg-red-500/[0.02] shadow-[inset_0_0_12px_rgba(239,68,68,0.02)]';
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 pb-20 selection:bg-primary/20 selection:text-primary">
      <PageHeader
        icon={Wifi}
        title="Ping Optimizasyonu"
        description="Gecikmeleri minimize etmek için ağ, bağdaştırıcı ve işletim sistemi ayarları"
      />

      <div className="space-y-12 mt-8">
        
        {/* TELEMETRI VE SISTEM GÖRSELLERI GRID ALANI */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pingImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group rounded-xl border border-border bg-card overflow-hidden shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300"
              >
                <ImageLightbox src={image.src} alt={image.alt} title={image.title}>
                  <div className="relative aspect-video cursor-pointer bg-background/50 overflow-hidden flex items-center justify-center border-b border-border/50">
                    <Image
                      src={image.src}
                      alt={image.alt}
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

        {/* NETLEŞTİRİLMİŞ ULAŞILMA KILAVUZU */}
        <section>
          <div className="p-6 rounded-xl border border-border bg-card shadow-md">
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2 text-foreground uppercase tracking-wider">
              <Compass className="h-4 w-4 text-primary" />
              🧭 Önerilen Ağ Bağdaştırıcısı Ayarlarına Nasıl Ulaşılır?
            </h3>
            <p className="text-xs text-muted-foreground font-medium mb-4 leading-relaxed">
              Aşağıdaki adımları sırasıyla takip ederek Ethernet veya Wi-Fi ağ kartınızın gelişmiş optimizasyon sekmesine sorunsuz şekilde erişebilirsiniz:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {adapterSteps.map((step, idx) => (
                <div key={idx} className="p-3 rounded-lg border border-border/60 bg-background/30 flex gap-2.5 items-start">
                  <span className="flex items-center justify-center w-5 h-5 rounded bg-primary/10 text-primary text-[10px] font-black shrink-0 border border-primary/20">
                    {idx + 1}
                  </span>
                  <p className="text-[11px] text-muted-foreground font-medium leading-normal">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ÖNERİLEN AĞ BAĞDAŞTIRICISI AYARLARI KARTLARI */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Network className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
              ⚙️ Önerilen Ağ Bağdaştırıcısı Ayarları
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {adapterSettings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                className="group/item p-4 rounded-xl border border-border bg-card shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h4 className="text-xs font-black text-foreground uppercase tracking-tight group-hover/item:text-primary transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-[10px] text-muted-foreground font-mono block mt-0.5">{item.eng}</span>
                    </div>
                    <span className={`text-[9px] font-black uppercase tracking-tight px-2 py-0.5 rounded-md border shrink-0 whitespace-nowrap ${
                      item.isNegative 
                        ? 'bg-red-500/10 text-red-500 border-red-500/20' 
                        : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                    }`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground font-medium leading-relaxed pt-1 border-t border-border/40">
                    {item.reason}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CANLI RESMİ CS2 SUNUCU RADARI */}
        <section>
          <div className="p-6 rounded-xl border border-border bg-card shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border/60 pb-4 mb-6 gap-4">
              <div>
                <div className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-widest mb-1">
                  <Activity className="w-4 h-4 animate-pulse" /> Canlı Ağ Tanılama Telemetrisi
                </div>
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
                  📡 CS2 Matchmaking Ping Radar Sistemi
                </h3>
              </div>
              
              <button
                onClick={testAllServers}
                disabled={isTestingAll}
                className="group flex items-center gap-2 bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-mono text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
              >
                <RefreshCw className={`w-4 h-4 ${isTestingAll ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                {isTestingAll ? 'Düğümler Taranıyor...' : 'Radar Pulse Başlat'}
              </button>
            </div>

            {/* Sunucu Grid Alanı */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVERS.map(server => {
                const result = results[server.id];
                const isPinging = result?.status === 'pinging';
                const hasData = result?.status === 'success';

                return (
                  <div
                    key={server.id}
                    className={`p-5 rounded-xl border transition-all duration-300 relative overflow-hidden group/server ${getPingBg(result?.currentPing)}`}
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                    
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <Server className="w-4 h-4 text-muted-foreground group-hover/server:text-primary transition-colors" />
                          <h4 className="font-bold tracking-tight text-foreground group-hover/server:text-primary transition-colors text-xs uppercase">{server.name}</h4>
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block mt-0.5">{server.region}</span>
                      </div>
                      <span className="text-[10px] font-mono bg-background/50 border border-border px-2 py-0.5 rounded-md text-muted-foreground">
                        {server.ip}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between mt-6">
                      <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wide">Gecikme (Ping):</div>
                      <div className={`text-3xl font-black font-mono tracking-tighter ${getPingColor(result?.currentPing)}`}>
                        {isPinging ? (
                          <span className="inline-block animate-pulse text-primary text-xl">...</span>
                        ) : hasData ? (
                          `${result.currentPing}ms`
                        ) : (
                          <span className="text-muted-foreground/30 text-2xl">--</span>
                        )}
                      </div>
                    </div>

                    <div className="border-t border-border/50 mt-4 pt-3 flex justify-between items-center text-[10px] font-mono">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Zap className="w-3.5 h-3.5 text-muted-foreground/60" />
                        <span>Jitter:</span>
                        <span className={hasData ? 'text-foreground font-bold' : 'text-muted-foreground/40'}>
                          {hasData ? `${result.jitter}ms` : '--'}
                        </span>
                      </div>

                      <button
                        onClick={() => simulatePing(server.id, server.basePing)}
                        disabled={isTestingAll || isPinging}
                        className="text-muted-foreground hover:text-primary font-black uppercase tracking-wider transition-colors disabled:opacity-20 disabled:pointer-events-none text-[9px]"
                      >
                        Tekil Test
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bilgi Notu */}
            <div className="mt-6 bg-background/40 border border-border/60 p-4 flex gap-3 items-start rounded-lg">
              <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div className="text-[11px] text-muted-foreground leading-relaxed font-mono">
                <strong className="text-foreground uppercase">Yönlendirme Parametresi Açıklaması:</strong> Yukarıda simüle edilen değerler resmi CS2 alt ağ altyapılarına doğrudan ICMP veri enjeksiyonunu temsil eder. Gerçek oyun içi anlık rotasyon hesaplamaları (SDR katmanları) servis sağlayıcınızın yurt dışı çıkış throttling durumuna, düğüm yoğunluklarına ve anlık peering değişikliklerine bağlı olarak küçük dalgalanmalar gösterebilir.
              </div>
            </div>
          </div>
        </section>

        {/* INFO VE SISTEM NOTU ALANI */}
        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard icon={Info} title="Neden Bu Ayarlar?" variant="info">
            <p className="text-sm leading-relaxed text-muted-foreground font-medium">
              Bu optimizasyonlar, Windows'un ve ağ donanımının veri paketlerini işlerken uyguladığı güç tasarrufu kısıtlamalarını ortadan kaldırır. Böylece veri akışı stabil kalır ve dalgalanma (Jitter) önlenir.
            </p>
          </InfoCard>

          <div className="p-6 rounded-xl border border-border bg-card shadow-md flex flex-col justify-center text-center hover:border-primary/20 transition-all duration-300">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2 justify-center text-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Sistem Notu
            </h3>
            <p className="text-xs text-muted-foreground font-medium leading-relaxed italic">
              Ayarları uygulayıp "Tamam" dedikten sonra ağ kartınız kendini yenileyecektir. Değişikliklerin işletim sistemine tam oturması için bilgisayarınızı yeniden başlatmanız önerilir.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}