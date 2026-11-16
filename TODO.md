# Yapılacaklar

Son güncelleme: 2026-11-16 (TODO.md + TODO.updated.md birleştirildi; çakışmalarda `TODO.updated.md` esas alındı)

Öncelikler:

- **P0:** Yayından önce şart.
- **P1:** Yakın vadede yapılmalı.
- **P2:** İyileştirme veya isteğe bağlı geliştirme.

Durumlar GitHub `main` koduna göre işaretlidir. Dosya yolları ve anahtar adları `ARCHITECTURE.md` ile uyumlu olmalı. Metinler `js/locales/en.js` ve `js/locales/tr.js` içinde; ESS'in yönerge, madde, seçenek ve telif metinleri lisanslıdır, düzenlenmez (`ARCHITECTURE.md` bölüm 3).

İşaret: *(eski listeden)* = `TODO.updated.md`'de yoktu, eski listeden taşındı; hâlâ geçerli sayıldı, gözden geçir.

---

## 1. P0 — Yayın öncesi

- [ ] **HTML meta description yer tutucusunu kaldır** (`index.html`). Şu an `content="........"`. `locales/en.js > meta.description` ve `locales/tr.js` karşılığıyla tutarlı, gerçek bir statik yedek metin yaz. JS kapalıyken ve crawler'larda da anlamlı olmalı. Açıklama SNS ve ESS'nin ikisini de doğru tanımlamalı (eskiden yalnızca "Swiss Narcolepsy Scale" geçiyordu).
- [ ] **Open Graph ve Twitter URL'lerini doğrula/güncelle** (`index.html`). `og:url`, `og:image`, `twitter:image` hâlâ `https://rengincelik.github.io/NT_1/...` adresini kullanıyor. Güncel Pages URL'sini veya özel domaini doğrulayıp tüm metadata'yı aynı kök adresle eşleştir. `og:image:alt` ve `twitter:image` aynı dosyayı gösterdiği için birlikte düzelir.
- [ ] **OG başlık/açıklama tutarlılığı** (`index.html`). Statik OG metni Türkçe, `<title>` / description ise i18n ile sonradan değişiyor. Crawler JS çalıştırmadığı için paylaşım dili bilinçli seçilmeli (tek dil mi, `?lang=` için ayrı sayfa mı).
- [ ] **Canlı paylaşım önizlemesini doğrula (WhatsApp).** `assets/og-image.png` repoda mevcut, ama metadata eski `NT_1` yolunu gösteriyor. Güncel URL'de görselin açıldığını doğrula. Kontrol listesi:
  - 1200×630, dosya küçük (~300 KB altı güvenli, 600 KB üstü çoğu zaman gösterilmez).
  - Mutlak `https://` adres, dosya adı büyük/küçük harf uyumlu (Pages duyarlı).
  - WhatsApp önizlemeyi önbelleğe alır: yeni dosya adı veya `?v=2` kullan, linki parametreli dene, Facebook Sharing Debugger ile önbelleği yenile.
- [ ] **SNS/ESS sonuç mesajlarını son kez gözden geçir** (`tests.sns.messages.suspect`, `unlikely`; ESS karşılıkları). Sonuç tanı veya kesin dışlama gibi anlaşılmamalı: SNS'de `unlikely` "narkolepsi yok" demek değildir, ESS tek başına narkolepsi taraması değildir. Geçici `neutral` mesajı varsa kaldır veya hata durumuna çevir (`threshold` doluyken kullanılmaz).
- [ ] **Yayın URL'si ve Worker origin ayarını birlikte doğrula.** `worker/wrangler.toml > ALLOWED_ORIGINS` şu an yalnızca `https://rengincelik.github.io`. Özel domain kullanılırsa eklenmeli.
- [ ] **Favicon ve `theme-color`** *(eski listeden)*. Açık/koyu tema için `media` özellikli iki etiket ya da `theme.js`'ten güncelleme.
- [ ] **QR kartı** *(eski listeden)*. Link kesinleşince kısa ve `?lang=tr` içeren sürümle QR üret, basılacak kartı tasarla.
- [ ] **Yer tutucu metin taraması** *(eski listeden)*. `config.js`, `footer.role`, `home.tagline`, `tests.*.messages.neutral` içinde yer tutucu kalmadığını doğrula.

## 2. P1 — Teknik doğruluk ve sağlamlık

- [ ] **Scratch Card resize durumunu düzelt** (`js/scratch.js`). `touched` bayrağı kısmen kazınmış kapağı korumak için var, ama `resize` dinleyicisi bunu kontrol etmiyor. Kısmen kazınmış kart pencere boyutu değişince yeniden boyanmamalı veya silinen alan korunmalı.
- [ ] **Worker D1 şemasını güncel modele hizala** (`worker/schema.sql`). Şema hâlâ eski `tests` toplam satırını ekliyor; Worker toplamı `test_<id>` satırlarından hesaplıyor. Eski satırı kaldır veya neden tutulduğunu belgele.
- [ ] **Worker README yerel origin örneklerini düzelt** (`worker/README.md`, `worker/wrangler.toml`). README `http://localhost:8000`'in varsayılan izinli olduğunu söylüyor, `ALLOWED_ORIGINS`'te yok. Listeye ekle ya da README'yi gerçek ayarla eşleştir.
- [ ] **Skorlama testlerini gerçek config'e bağla** (`js/scoring.test.js`). SNS/ESS konfigürasyonları test dosyasında elle kopyalanmış; `config.js > TESTS` doğrudan import edilsin. Sınır değerleri (eşiğin tam üstü/altı, tüm 0, tüm maksimum, `bands` sınırları ve en düşük bandın altı) kapsanıyor mu kontrol et.
- [ ] **SNS/ESS konfigürasyon tutarlılık testi ekle.** `questionCount`, `scaleSize`, `weights.length`, her dilde soru/seçenek uzunlukları ve sonuç mesajı anahtarları kontrol edilsin.
- [ ] **Tarayıcı otomasyon testleri (Playwright veya eşdeğeri, CI'da):**
  - İlk açılış, varsayılan dil/tema (tarayıcı `locale` ve `colorScheme` emülasyonu)
  - `?lang=` ve kayıtlı tercihin tarayıcı dilini ezmesi; butonla tema seçiminin kalıcı olması
  - Dil değişince aktif quiz ve sonuç metinlerinin yenilenmesi
  - SNS ↔ ESS geçişinde cevapların/ilerlemenin korunması
  - Testi bitirme, sonucu tekrar açma, düzenleme, baştan başlama
  - Scratch Card açma ve sonuç eylemleri
  - Mobil viewport ve klavye gezinmesi
- [ ] **Erişilebilirlik geçişi (gerçek ekran okuyucuyla).** `radiogroup`, `aria-live`, `progressbar`, tema düğmesi (`aria-pressed` + etiket), dil düğmeleri, odak sırası; test değişince soru ekranları yeniden kurulduğu için odak/duyuru davranışı; kontrast (`--muted` açık ve koyu temada); `prefers-reduced-motion` altında kazı-kazan.
- [ ] **Gerçek cihaz testleri.** iOS Safari ve Android Chrome: dil/tema otomatik gelmesi, test akışı, kazı-kazan dokunma/kaydırma, header iki satır düzeni (bayraklar + tema butonu).
- [ ] **Reklam engelleyici testi** *(eski listeden)*. Worker yayındayken uBlock Origin / AdGuard / Brave kalkanı açıkken `workers.dev` isteği engelleniyor mu bak. Engelleniyorsa çözüm: Worker'ı nötr bir alt alan adıyla kendi domainine bağlamak (bkz. P2).

## 3. P2 — İyileştirmeler

- [ ] **localStorage anahtarlarını projeye özel yap.** `lang`, `theme`, `skipgc` çok genel; GitHub Pages'te `rengincelik.github.io` altındaki diğer projelerle aynı origin paylaşıldığı için çakışma riski gerçek. Önek eklenirse `index.html` içindeki erken tema scripti de birlikte güncellenmeli.
- [ ] **Temada "sistemi izle" seçeneği.** Şu an düğmeye basılınca tercih kalıcı, geri dönmenin yolu yok (yalnızca `localStorage["theme"]` silmek). Üçüncü durum (sistem/açık/koyu) ya da uzun basma eklenebilir.
- [ ] **Sayaçları test bazında gösterme (isteğe bağlı).** Worker `byTest` döndürüyor; arayüz yalnızca toplamı gösteriyor.
- [ ] **Worker için kötüye kullanım sınırı.** `Origin` kontrolü kimlik doğrulama değil, taklit edilebilir. Cloudflare ücretsiz hız sınırlama kuralı veya Worker içinde basit sınır düşün.
- [ ] **Worker'ı özel alan adına bağlama.** Bazı reklam/gizlilik engelleyiciler `workers.dev`'i engelleyebilir.
- [ ] **GoatCounter'ın geleceği** *(eski listeden)*. Şu an yalnızca arka planda sayım yapıyor, sayılar Worker'dan geliyor. Panel verisi (referrer, cihaz) istenirse GoatCounter'ın `count.js` scriptine geçmek gerekir (şu an üçüncü taraf script yok), bu `footer.statsNote`'u etkiler. İstenmezse `goatcounterCode`'u boşaltmak yeter.
- [ ] **Test ilerlemesini saklama** *(eski listeden)*. Sayfa yenilenince cevaplar kaybolur. `sessionStorage` mümkün ama gizlilik cümlesiyle çelişmemeli (cihazdan çıkmıyor, sekme kapanınca silinir).
- [ ] **Üçüncü dil.** Kural `ARCHITECTURE.md` bölüm 8'de. RTL dil eklenirse `dir` ve CSS mantıksal özellikleri gerekir.
- [ ] **Çevrimdışı kullanım.** Service Worker/PWA; sayfa tamamen statik olduğu için kolay.
- [ ] **Belirti kartı görsellerini ekle.** `symptoms.js` görsel yüklemeyi destekliyor; dil verisinde görsel yolu yoksa yer tutucu gösteriliyor.
- [ ] **Arka plan katmanı (`#bg`, `background.css`) shader/canvas.** Gündeme gelirse: `prefers-reduced-motion` altında statik yedek, sekme gizliyken durdurma, mobil performans sınırı, WebGL yoksa düz renk, iki temaya uyum.
- [ ] **README'yi güncelle.** Hâlâ yalnızca SNS'den söz ediyor ve "Geliştirme aşamasında" yazıyor. SNS + ESS, iki dil, statik site/Worker ayrımı ve tanı aracı olmadığı anlatılmalı.

## 4. Dokümantasyon ve bilinen teknik borç

- [ ] **`ARCHITECTURE.md` ile kodu senkron tut** (yeni modül, HTML kancası, test tanımı, Worker API değişiklikleri).
- [ ] **Test kimliği iki yerde:** `config.js > TESTS` ve `worker/src/index.js > TEST_IDS` elle senkron; eşleşmezse o testin sayımı 404 alır (sayfa bozulmaz). Tek yerde tanımlamayı düşün.
- [ ] **Koyu tema değişkenleri iki yerde** (`base.css`): media query bloğu ve `:root[data-theme="dark"]` aynı değerleri tekrar eder. Tekilleştir; o zamana kadar renk değişince ikisini birlikte güncelle.
- [ ] **Sonuç ekranındaki eski PDF/yazdırma izlerini temizle veya özelliği planla.** `result.js` yorumları ve `summary`/`printBtn` parametreleri PDF özeti varmış izlenimi veriyor; HTML'de etkin bir özellik yok. (`window.print()` testi de buna bağlı.)
- [ ] **`index.html` progressbar yedek değeri.** `aria-valuemax="5"` statik; `quiz.js` çalışınca güncelleniyor. JS yüklenmeden önce için daha genel bir başlangıç değeri düşünülebilir.
- [ ] **`noscript` metni.** Şu an yalnızca İngilizce; JS kapalıyken i18n çalışmaz. İki dilli tek mesaj ya da bilinçli tek dil.
- [ ] **Not (bilerek böyle):** Sayı tuşları (`1..n`) yalnızca test paneli odaktayken çalışır (`keydown` `#quiz-panel` üzerinde).

## 5. Tamamlananlar

- [x] Genel metin gözden geçirmesi (2026-11-12): footer notu, sayaç notu, site adı, İngilizce metinler, meta açıklaması, test alt başlıkları, yerelleştirme.
- [x] SNS ve ESS skorlama ayarları `config.js` içinde.
- [x] SNS ve ESS için Node.js birim testleri mevcut.
- [x] Worker API test başına sayaç modeline geçti: `POST /tally/test/<id>`.
- [x] `worker/README.md` yeni rotaları ve `sns`/`ess` sayaçlarını açıklıyor.
- [x] `.gitignore`: `.wrangler/` ve `.dev.vars` dışlanıyor, `.dev.vars` kuralı düzeltildi.
- [x] `result.js` içindeki tanımsız `renderSummary()` çağrısı kaldırıldı (dil değişimi hatası kapandı).
- [x] `main.js` içinde `initSymptoms()` entegre edildi.

---

## 6. Yayın kontrol listesi

- [ ] HTML description ve Open Graph metadata gerçek yayın URL'siyle tutarlı
- [ ] WhatsApp paylaşım önizlemesi gerçek URL'de kontrol edildi
- [ ] SNS ve ESS sonuç metinleri tıbbi açıdan dikkatli ve iki dilde tutarlı; yer tutucu metin kalmadı
- [ ] `node --test js/scoring.test.js` başarılı; katsayılar/eşik kaynağıyla doğrulandı
- [ ] `config.js > TESTS` ile Worker `TEST_IDS` eşleşiyor, Worker yeniden yayınlandı
- [ ] Worker `ALLOWED_ORIGINS` canlı yayın origin'ini içeriyor
- [ ] Sayaç okuma ve artırma istekleri canlı ortamda doğrulandı (reklam engelleyiciyle de)
- [ ] Favicon ve `theme-color` eklendi
- [ ] Türkçe ve İngilizce baştan sona manuel test edildi
- [ ] Açık/koyu tema ve sistem teması kontrol edildi
- [ ] Gerçek telefonda (iOS + Android) test akışı ve Scratch Card kontrol edildi
- [ ] Klavye ve ekran okuyucu akışı kontrol edildi
- [ ] Repo README'si güncel proje yapısını anlatıyor
- [ ] Alan adı ve HTTPS çalışıyor
