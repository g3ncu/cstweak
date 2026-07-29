export default function CookiePolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-muted-foreground leading-relaxed">
      <h1 className="text-3xl font-bold text-foreground mb-8">Çerez Politikası</h1>
      <p className="mb-6">CStweak.com.tr, kullanıcı deneyimini optimize etmek ve site trafiğini analiz etmek amacıyla "çerezler" (cookies) kullanmaktadır. Sitemizi kullanarak çerez kullanımını kabul etmiş sayılırsınız.</p>

      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Çerez Nedir?</h2>
      <p className="mb-4">Çerezler, bir web sitesini ziyaret ettiğinizde cihazınıza (bilgisayar, telefon, tablet) kaydedilen küçük metin dosyalarıdır. Bu dosyalar, siteyi bir sonraki ziyaretinizde tercihlerinizi hatırlamamıza yardımcı olur.</p>

      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Hangi Çerezleri Kullanıyoruz?</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Zorunlu Çerezler:</strong> Sitenin temel işlevlerini yerine getirmesi için gereklidir.</li>
        <li><strong>Analitik Çerezler:</strong> Google Analytics gibi araçlarla ziyaretçi sayısını ve sayfaların kullanım oranlarını ölçer.</li>
        <li><strong>Reklam Çerezleri:</strong> İlgi alanlarınıza göre size özelleştirilmiş reklamlar göstermek için Google AdSense tarafından kullanılır.</li>
      </ul>

      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Çerezleri Nasıl Kontrol Edersiniz?</h2>
      <p className="mb-4">Tarayıcınızın ayarlarını değiştirerek çerezleri reddedebilir veya silebilirsiniz. Ancak çerezleri devre dışı bırakmanız, sitemizdeki bazı özelliklerin (örneğin config ayarları veya tema tercihleri) düzgün çalışmamasına neden olabilir.</p>
    </div>
  )
}