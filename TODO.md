# Yapılacaklar

Son güncelleme: 2026-11-17

Bu liste, GitHub `main` kodunun mevcut durumunu ve tamamlanan manuel kontrolleri esas alır.

Öncelikler:

- **P1:** Sıradaki ana geliştirme.
- **P2:** Teknik borç ve iyileştirmeler.
- **P3:** İsteğe bağlı, uzun vadeli fikirler.

---

## 1. P1 — Kalan geliştirme

### Sayaçları test bazında göster

Worker zaten `byTest` alanında SNS ve ESS sayaçlarını ayrı ayrı döndürüyor. Eksik olan, bu verilerin frontend'de gösterilmesi.

- [ ] `index.html`: Mevcut görüntülenme ve toplam test sayısı alanlarını görüntülenme, SNS ve ESS sayaçları olarak düzenle.
- [ ] `stats.js`: `counts.byTest.sns` ve `counts.byTest.ess` değerlerini kullan.
- [ ] Sayı animasyonlarını üç sayaçla uyumlu hâle getir.
- [ ] Türkçe ve İngilizce sayaç başlıklarını locale dosyalarına ekle.
- [ ] Sayaç kutusunun gizlenme ve sıfır değer davranışını yeni yapıya göre düzenle.

**Not:** Worker API'sinde değişiklik gerekmiyor. `tests` toplamı API'de kalabilir; arayüzde ayrı SNS ve ESS sayıları gösterilecek.

---

## 2. P2 — Teknik borç ve sağlamlık

### Sayaç ve Worker

- [ ] `worker/schema.sql`: Artık kullanılmayan eski `tests` toplam satırını kaldır. Worker toplamı `test_sns` ve `test_ess` kayıtlarından hesaplıyor.
- [ ] `stats.js`: Worker yanıtının beklenen veri yapısını (`views`, `tests`, `byTest`) doğrula. Hatalı veya eksik yanıtta arayüzün bozulmasını önle.

### Skorlama ve yapılandırma

- [ ] `js/scoring.test.js`: Testlerde elle kopyalanan SNS ve ESS ayarlarını kaldır; `config.js` içindeki `TESTS` yapılandırmasını doğrudan kullan.
- [ ] SNS ve ESS yapılandırmaları için tutarlılık testleri ekle:
  - `questionCount` ve soru sayısı eşleşmesi.
  - `scaleSize` ve seçenek sayısı eşleşmesi.
  - `weights` uzunluğunun soru sayısıyla eşleşmesi.
  - Türkçe ve İngilizce soru, seçenek ve sonuç mesajı anahtarlarının eksiksiz olması.
- [ ] Test kimliklerinin `config.js > TESTS` ve `worker/src/index.js > TEST_IDS` içinde ayrı ayrı tanımlanması sorununu değerlendir. Tek kaynaktan yönetmek mümkün mü araştır.

### Arayüz ve tarayıcı

- [ ] Favicon ekle.
- [ ] Açık/koyu temaya uygun `theme-color` meta etiketlerini ekle veya tema değişiminde güncelle.
- [ ] `localStorage` anahtarlarını projeye özel bir önekle değiştir (`lang`, `theme`, `skipgc`). `index.html` içindeki erken tema scriptini de birlikte güncelle.
- [ ] Tema seçeneğine sistem temasını izleme seçeneği eklemeyi değerlendir.
- [ ] `index.html` içindeki progressbar başlangıç `aria-valuemax` değerini daha genel hâle getir.
- [ ] `noscript` mesajının dil davranışını düzenle.
- [ ] `base.css` içindeki koyu tema değişkenlerinin tekrarını azalt.
- [ ] `result.js` içindeki eski PDF/yazdırma yorumlarını ve kullanılmayan parametreleri temizle veya özelliği ayrıca planla.

### İleri seviye doğrulama

- [ ] Klavye ve ekran okuyucu erişilebilirliğini gerçek yardımcı teknolojilerle değerlendir.
- [ ] Otomatik tarayıcı testleri ve CI entegrasyonunu değerlendir.

---

## 3. P3 — İsteğe bağlı geliştirmeler

- [ ] Test ilerlemesini `sessionStorage` ile korumayı değerlendir. Gizlilik metniyle uyumlu olmalı.
- [ ] Üçüncü dil desteği eklemeyi değerlendir. RTL diller için `dir` ve CSS mantıksal özellikleri dikkate alınmalı.
- [ ] Çevrimdışı kullanım için Service Worker / PWA desteği eklemeyi değerlendir.
- [ ] Belirti kartlarına görsel ekle. `symptoms.js` görsel yüklemeyi destekliyor.
- [ ] Worker'ı özel alan adına bağlamayı değerlendir. Bazı reklam ve gizlilik engelleyiciler `workers.dev` isteklerini engelleyebilir.
- [ ] GoatCounter kullanımını yeniden değerlendir. Şu an sayaçların gösterimi Worker üzerinden yapılıyor; GoatCounter yalnızca isteğe bağlı arka plan sayımı için mevcut.
- [ ] Arka plan katmanı (`#bg`, `background.css`) için shader/canvas uygulamasını değerlendir. Hareket azaltma, mobil performans ve WebGL desteği dikkate alınmalı.

---

## 4. Tamamlananlar

### Site ve içerik

- [x] Site GitHub Pages üzerinde yayınlandı.
- [x] Türkçe ve İngilizce arayüz tamamlandı.
- [x] SNS ve ESS testleri entegre edildi.
- [x] Site metinleri ve çeviriler kontrol edildi; kaynaklar eklendi.
- [x] Butonlar, metinler ve kullanıcı tarafındaki temel etkileşimler test edildi.
- [x] WhatsApp paylaşım önizlemesi kontrol edildi.
- [x] Açık/koyu tema ve dil değiştirme işlevleri uygulandı.
- [x] README güncellendi; SNS, ESS, teknolojiler ve ESS lisansı açıklanıyor.

### Skorlama ve test sistemi

- [x] SNS ve ESS skorlama ayarları `config.js` içinde tanımlandı.
- [x] SNS ve ESS için Node.js birim testleri oluşturuldu.
- [x] Test geçişi ve test bazlı yapılandırma sistemi oluşturuldu.
- [x] Sonuç ekranındaki tanımsız `renderSummary()` çağrısı kaldırıldı.
- [x] `initSymptoms()` ana akışa entegre edildi.

### Worker ve sayaç altyapısı

- [x] Cloudflare Worker ve D1 veritabanı kuruldu.
- [x] Worker API test başına sayaç modeline geçirildi.
- [x] `GET /tally` yanıtına `byTest` alanı eklendi.
- [x] `POST /tally/test/<id>` rotası oluşturuldu.
- [x] Origin kontrolü ve CORS yapılandırıldı.
- [x] Worker rate limiting eklendi.
- [x] Worker istek ve yanıt işlemleri düzenlendi.
- [x] Worker canlı ortamda test edildi (2026-11-16).
- [x] `.gitignore` içinde `.wrangler/` ve `.dev.vars` dışlandı.

---

## 5. Mimari notlar

- Metinler `js/locales/en.js` ve `js/locales/tr.js` içinde tutulur.
- Test yapılandırmaları `js/config.js > TESTS` içindedir.
- Test kimlikleri Worker tarafında `worker/src/index.js > TEST_IDS` ile eşleşmelidir.
- Sayaç verileri Cloudflare Worker ve D1 üzerinden sağlanır.
- Worker yalnızca görüntülenme ve test tamamlanma sayılarını saklar; cevaplar ve skorlar gönderilmez.
- ESS yönerge, madde, seçenek ve telif metinleri lisans kapsamındadır; izin olmadan değiştirilmemelidir.
- Sayı tuşları (`1..n`) yalnızca test paneli odaktayken çalışır.
- Yeni modül, HTML kancası veya Worker API değişikliği olduğunda `ARCHITECTURE.md` güncellenmelidir.