# Teknik Altyapı

Derleme adımı ve harici JavaScript bağımlılığı olmayan statik site. Vanilla HTML, CSS ve ES modules kullanır.

Çalıştırma: ES modules ve `main.js` içindeki top-level `await` nedeniyle `file://` ile açılmaz. Yerel sunucu gerekir (`python -m http.server`). GitHub Pages üzerinde doğrudan çalışır.

Şu an iki tarama testi bulunur:

- **SNS:** Swiss Narcolepsy Scale — Tip 1 narkolepsi / katapleksi ön taraması.
- **ESS:** Epworth Sleepiness Scale — genel gündüz uykululuğunun değerlendirilmesi.

Site tanı aracı değildir. Test cevapları ve skorları sunucuya gönderilmez.

Skorlama birim testleri:
`node --test js/scoring.test.js`

---

## 1. Klasör yapısı

```text
index.html
assets/
  flags/
    en.svg
    tr.svg
  symptoms/
    ...
css/
  base.css
  layout.css
  components.css
js/
  main.js
  config.js
  i18n.js
  languages.js
  langswitch.js
  theme.js
  testswitch.js
  site.js
  share.js
  stats.js
  richtext.js
  references.js
  symptoms.js
  quiz.js
  result.js
  scratch.js
  scoring.js
  scoring.test.js
  locales/
    en.js
    tr.js
worker/
  src/
    index.js
  schema.sql
  wrangler.toml
  README.md
README.md
ARCHITECTURE.md
TODO.md
.gitignore
```

### CSS dosyaları

| Dosya | Sorumluluk |
|---|---|
| `base.css` | Reset, tipografi, renk değişkenleri, açık/koyu tema |
| `layout.css` | Header, navigasyon, bölümler, Home sayaç kartları, footer, responsive header |
| `components.css` | Butonlar, test arayüzü, ilerleme çubuğu, metin kutuları, kaynaklar, sonuç kartı, belirti akışı |

CSS yükleme sırası: `base.css` → `layout.css` → `components.css`.

### JavaScript modülleri

| Dosya | Sorumluluk |
|---|---|
| `main.js` | Giriş noktası; modülleri başlatır ve birbirine bağlar |
| `config.js` | Dilden bağımsız ayarlar: `AUTHOR`, `TESTS`, `DEFAULT_TEST`, `STATS` |
| `i18n.js` | Çeviri motoru |
| `languages.js` | Dil kaydı ve varsayılan dil |
| `langswitch.js` | Header dil butonları |
| `theme.js` | Tema seçimi ve tema butonu |
| `testswitch.js` | Test seçici |
| `site.js` | Footer oluşturma |
| `share.js` | WhatsApp paylaşım bağlantısı |
| `stats.js` | Worker sayaç bağlantısı ve isteğe bağlı GoatCounter |
| `richtext.js` | Kaynak numaralı metinleri ve kaynak listelerini oluşturma |
| `references.js` | Kaynak kayıtları |
| `symptoms.js` | Narkolepsi belirti akışını oluşturma |
| `quiz.js` | Birden fazla testi destekleyen soru arayüzü |
| `result.js` | Sonuç doğrulama, sınıflandırma ve gösterim |
| `scratch.js` | Kazı-kazan canvas davranışı |
| `scoring.js` | DOM'dan bağımsız skor hesaplama ve sınıflandırma |
| `scoring.test.js` | Skorlama birim testleri |

`worker/` klasörü siteden bağımsız yayınlanan Cloudflare Worker + D1 sayaç altyapısını içerir.

---

## 2. Modül bağımlılıkları

```text
main.js
 ├─ config.js
 │   ├─ AUTHOR
 │   ├─ TESTS
 │   ├─ DEFAULT_TEST
 │   └─ STATS
 │
 ├─ i18n.js
 │   └─ languages.js
 │       └─ dynamic import → locales/*.js
 │
 ├─ langswitch.js
 │   └─ languages.js, i18n.js
 │
 ├─ theme.js
 │   └─ i18n.js
 │
 ├─ testswitch.js
 │   └─ i18n.js
 │
 ├─ site.js
 │   ├─ config.js (AUTHOR)
 │   ├─ i18n.js
 │   └─ stats.js (statsEnabled)
 │
 ├─ share.js
 │   └─ i18n.js
 │
 ├─ stats.js
 │   ├─ config.js (STATS)
 │   └─ i18n.js
 │
 ├─ richtext.js
 │   ├─ references.js
 │   └─ i18n.js
 │
 ├─ symptoms.js
 │   └─ i18n.js
 │
 ├─ quiz.js
 │   └─ i18n.js
 │       Test konfigürasyonu main.js üzerinden parametre olarak gelir.
 │
 └─ result.js
     ├─ config.js (TESTS)
     ├─ scoring.js
     ├─ i18n.js
     └─ scratch.js
```

### Başlatma sırası

`main.js` önce `initI18n()` çağrısını bekler. Diğer modüller dil sözlüğü yüklendikten sonra başlatılır.

Sıra:

1. `await initI18n()`
2. `initLangSwitch()`
3. `initTheme()`
4. `initSite()`
5. `initShare()`
6. `initRichText()`
7. `initSymptoms()`
8. `initStats()` — beklenmez; sayaç verisi geldiğinde kutu güncellenir.
9. `createResult({...})`
10. `createQuiz({...})`
11. `initTestSwitch({...})`
12. `renderTestMeta()`

`createResult()` içindeki `onEdit` ve `onRestart` callback'leri `quiz` değişkenine; `createQuiz()` içindeki `onFinish` ise `result` değişkenine referans verir. Callback'ler çağrıldığında ilgili değişkenler tanımlanmıştır.

### Test bitirme sırası

`quiz.js` son soruda `onFinish(answers, id)` çağırır.

`main.js`:

1. `result.show(answers, id)` ile cevapların geçerliliğini kontrol eder ve sonucu gösterir.
2. Sonuç geçersizse test tamamlanmış sayılmaz.
3. Sonuç başarılıysa `finished` Map'ine cevapları kaydeder.
4. `trackTestCompleted(id)` ile tamamlanma sayacını artırır.
5. Soru panelini gizler.

Cevaplar yalnızca sayfa belleğinde tutulur. Sayaç isteğine cevaplar değil, yalnızca testin tamamlandığı bilgisi gönderilir.

---

## 3. Dil sistemi (i18n)

### Dosyalar

- `languages.js`: `DEFAULT_LANG`, `LANGUAGES = [{ code, name, flag, load }]`.
- `locales/<kod>.js`: `export default { ... }` biçiminde dil sözlüğü.
- `i18n.js`: dil yükleme, anahtar çözümleme ve değişiklik dinleyicileri.

`i18n.js` dışa aktarır:

```js
initI18n()
setLang(code, { persist })
t(path, vars)
get(path)
getLang()
onLangChange(fn)
```

### Dil seçim önceliği

1. URL'deki `?lang=`.
2. `localStorage["lang"]`.
3. Tarayıcı dili (`navigator.languages`).
4. `DEFAULT_LANG`.

Tarayıcı dilinde bölge kodu kaldırılarak eşleşme aranır (`tr-TR` → `tr`).

Açılışta otomatik olarak tercih kaydedilmez. Kullanıcı dil butonuna tıklarsa seçim `localStorage` içine yazılır.

### Çalışma şekli

- Seçili dil sözlüğü `dict`, varsayılan dil sözlüğü `fallback` olarak tutulur.
- `get(path)` önce seçili dile, anahtar bulunamazsa varsayılan dile bakar.
- `t(path, vars)` metni döndürür ve `{n}` biçimindeki yer tutucuları doldurur.
- Anahtar bulunamazsa anahtarın kendisi döndürülür.
- `setLang()` içinde sıra sayacı bulunur; arka arkaya seçimlerde son yüklenen dil uygulanır.
- Dil yükleme hatasında mevcut dil korunur.

Dil uygulandığında:
1. `<html lang>` güncellenir.
2. `document.title` ve meta description güncellenir.
3. `[data-i18n]` ve `[data-i18n-aria-label]` elemanları güncellenir.
4. `onLangChange` dinleyicileri çalıştırılır.

### Dil değişikliği dinleyicileri

| Modül | Fonksiyon | Görevi |
|---|---|---|
| `langswitch.js` | `mark` | Aktif dil butonunu günceller |
| `theme.js` | `label` | Tema butonunun başlığını günceller |
| `site.js` | `renderFooter` | Footer'ı yeniden oluşturur |
| `share.js` | `update` | WhatsApp bağlantısını günceller |
| `richtext.js` | `renderAll` | Metinleri, kaynak numaralarını ve kaynak listelerini yeniden oluşturur |
| `symptoms.js` | `render` | Belirti kartlarını yeniden oluşturur |
| `stats.js` | `render` | Sayaçları yeni dilin sayı biçimiyle gösterir |
| `result.js` | `render` | Açık sonuç panelinin metnini günceller |
| `quiz.js` | `refreshText` | Soru, seçenek ve ilerleme metinlerini günceller |
| `testswitch.js` | `paint` | Test seçici etiketlerini günceller |
| `main.js` | `renderTestMeta` | Test alt başlığı, yönerge ve telif metnini günceller |

### Dil anahtar ağacı

```text
meta         title, description, dateLocale
site         name
nav          aria, home, about, narcolepsy, test
lang         label
theme        toggle
refs         title, cite({n})

home         title, subtitle, start, views, tests

about        lead, big, p1...pN

narcolepsy   title, intro[], symptoms, body[], tocLabel
               intro[]    → kutusuz tanım paragrafları
               symptoms   → { title, [lead], items[], [note] }
               body[]     → kaydırmalı kutudaki paragraflar

test         title, switchLabel, progress({n},{total}),
             prev, next, finish, tip({min},{max})

tests.<id>   name, subtitle, [intro[]], questions[],
             scale[], messages, [copyright]

result       cover, hint, skip, edit, restart, score({score},{max})

share        button

footer       role, note, statsNote
```

`about` ve `narcolepsy` metinleri `richtext.js` tarafından çizilir. `narcolepsy.symptoms` verisi `symptoms.js` tarafından işlenir.

Testlere ait soru, seçenek ve sonuç metinleri `tests.<id>` altında tutulur.

### HTML ve JavaScript ile bağlanan metinler

HTML'de `data-i18n` ile bağlanan başlıca metinler:

- Site adı
- Menü etiketleri
- Home başlık ve alt başlık
- Narkolepsi başlığı
- Test başlığı ve test seçici etiketi
- Tema butonunun erişilebilir etiketi
- Test önceki soru butonu
- Sonuç ekranındaki sabit buton metinleri
- Paylaşım butonu

JavaScript ile oluşturulan veya güncellenen metinler:

- Hakkımda ve narkolepsi metinleri
- Kaynak listeleri
- Belirti kartları
- Test isimleri, soruları ve seçenekleri
- Test yönergeleri ve telif metinleri
- Test ilerlemesi ve ipucu
- Sonuç mesajları ve skor satırı
- Footer
- Sayaçlar
- WhatsApp bağlantısı

### Tutarlılık kuralları

- Her test için `questionCount`, tüm dil dosyalarındaki `questions.length` ile aynı olmalıdır.
- `scaleSize`, tüm dil dosyalarındaki `scale.length` ile aynı olmalıdır.
- `scoring.weights.length`, `questionCount` ile aynı olmalıdır.
- `scoring.bands` kullanılıyorsa her `key` için `tests.<id>.messages.<key>` bulunmalıdır.
- ESS gibi lisanslı testlerin soru, seçenek ve yönerge metinleri lisanslı kaynaktan alınır; izinsiz değiştirilmez.
- HTML'de `data-i18n` ile bağlanan metinlerin İngilizce yedeği bulunur.
- `#test-subtitle`, `#test-intro` ve `#test-copyright` JavaScript tarafından doldurulur.

---

## 4. HTML kancaları (`index.html`)

JavaScript'in bağlandığı başlıca seçiciler:

| Seçici | Kullanan | Görev |
|---|---|---|
| `#lang-list` | `langswitch.js` | Dil butonları |
| `#theme-btn` | `theme.js` | Tema butonu |
| `#footer` | `site.js` | Footer |
| `[data-share-whatsapp]` | `share.js` | WhatsApp bağlantısı |
| `#stats` | `stats.js` | Sayaç kutusu |
| `#stat-views` | `stats.js` | Görüntülenme sayısı |
| `#stat-tests` | `stats.js` | Toplam tamamlanan test sayısı |
| `[data-rich-block]` | `richtext.js` | Metin blokları |
| `[data-i18n-rich]` | `richtext.js` | Tekil metin |
| `[data-i18n-rich-list]` | `richtext.js` | Paragraf listeleri |
| `[data-refs]` | `richtext.js` | Kaynak listesi |
| `#symptoms` | `symptoms.js` | Belirti akışı |
| `#test-title` | `main.js` | Test bölümüne kaydırma |
| `#test-switch` | `testswitch.js` | Test seçici |
| `#test-subtitle` | `main.js` | Test alt başlığı |
| `#test-intro` | `main.js` | Test yönergesi |
| `#test-copyright` | `main.js` | Test telif/lisans metni |
| `#quiz-panel` | `quiz.js` | Soru paneli |
| `#quiz-viewport` | `quiz.js` | Kaydırma alanı |
| `#quiz-track` | `quiz.js` | Soru kaydırma şeridi |
| `#prev-btn` | `quiz.js` | Önceki soru |
| `#next-btn` | `quiz.js` | Sonraki soru |
| `#quiz-tip` | `quiz.js` | Klavye ipucu |
| `#progress-text` | `quiz.js` | İlerleme metni |
| `#progress-fill` | `quiz.js` | İlerleme dolumu |
| `#progress-bar` | `quiz.js` | İlerleme çubuğu |
| `#result-panel` | `result.js` | Sonuç paneli |
| `#result-content` | `result.js` | Sonuç metni |
| `#scratch` | `result.js` / `scratch.js` | Kazı-kazan canvas |
| `#scratch-hint` | `result.js` | Kazıma ipucu |
| `#skip-scratch` | `result.js` | Kazımayı atlama |
| `#result-actions` | `result.js` | Sonuç butonları |
| `#edit-btn` | `result.js` | Cevapları düzenleme |
| `#restart-btn` | `result.js` | Testi yeniden başlatma |

### Header

Header'ın sağ tarafı `.header-tools` içindedir:

- `#lang-list`
- `#theme-btn`

Mobilde `layout.css` içindeki `36rem` breakpoint'i header'ı iki satırlı grid düzenine geçirir.

### Sayfa bölümleri

Bölüm ID'leri:

- `home`
- `about`
- `narcolepsy`
- `test`

Menü bağlantıları bu ID'lere gider. `.brand` bağlantısı `#home` hedefine gider.

Sayfada tek bir `<h1>` bulunur; diğer bölüm başlıkları `<h2>` düzeyindedir.

### Tema açılış script'i

`<head>` içinde, CSS yüklenmeden önce çalışan küçük bir satır içi script vardır.

`localStorage["theme"]` değeri `dark` veya `light` ise `<html data-theme>` özelliğini CSS yüklenmeden önce ayarlar. Böylece tema çakması azaltılır.

Bu anahtar `theme.js` içindeki anahtarla aynı olmalıdır. İki yerde elle senkron tutulur.

### Dekoratif alan

`#bg` boş bir dekoratif arka plan katmanıdır. Şu an ayrı bir arka plan JavaScript modülü veya `.bg` sınıfına bağlı özel bir CSS davranışı yoktur.

### CSS davranışı hakkında not

Home alanında `.hero` ve `.hero-subtitle` sınıfları HTML'de bulunur; ancak mevcut CSS dosyalarında bu sınıflara ait özel bir stil kuralı yoktur.

Bu nedenle eski mimari belgede yazan tam ekran yüksekliğinde dikey ortalanmış `.hero` düzeni mevcut CSS tarafından uygulanmıyor. Home'un mevcut yerleşimi `.section`, `.section-first`, `.container` ve diğer genel kurallara dayanır.

---

## 5. Test sistemi

### Test verilerinin bulunduğu yerler

| Veri | Kaynak |
|---|---|
| Test ID'si ve konfigürasyonu | `config.js > TESTS[id]` |
| Soru ve seçenek metinleri | `locales/*.js > tests.<id>` |
| Cevaplar ve soru konumu | `quiz.js` içindeki `store` |
| Bitirilmiş testler | `main.js` içindeki `finished` Map |
| Skor hesaplama | `scoring.js` |
| Test tamamlanma sayısı | Worker D1 `test_<id>` satırı |

Cevaplar ve bitirilmiş test cevapları yalnızca sayfa belleğinde tutulur. Sayfa yenilendiğinde sıfırlanır.

### `config.js > TESTS`

Her test kendi soru sayısına, seçenek sayısına ve skorlamasına sahiptir.

Şu an:

| Özellik | SNS | ESS |
|---|---:|---:|
| Soru sayısı | 5 | 8 |
| Seçenek sayısı | 5 | 4 |
| Seçenek numaraları | 1–5 | 0–3 |
| Skor gösterimi | Hayır | Evet |
| Test ID | `sns` | `ess` |

`DEFAULT_TEST` ilk açılışta seçilecek testi belirler. Şu an `sns`.

### `testswitch.js`

`initTestSwitch({ container, ids, current, onSelect })` fonksiyonunu dışa aktarır.

- `ids`, `Object.keys(TESTS)` üzerinden gelir.
- Her test için buton oluşturur.
- Aktif butonda `aria-pressed="true"` kullanılır.
- Tek test varsa seçici gizlenir.
- `set(id)` ile aktif test güncellenir.

### `quiz.js`

`createQuiz({...})` parametreleri:

`root, track, viewport, prevBtn, nextBtn, progressText, progressFill, progressBar, tipEl, tests, initialTest, onFinish`.

Döndürdüğü arayüz:

```js
{
  setTest(id),
  goTo(n),
  reset(),
  lastIndex,
  testId,
  answersOf(id)
}
```

- Her testin cevapları ve kalınan sorusu ayrı tutulur.
- Test değiştirildiğinde ilgili testin önceki cevapları geri yüklenir.
- Bilinmeyen test ID'si hata oluşturur.
- Her soru `.slide` olarak oluşturulur.
- Aktif olmayan slaytlarda `inert` ve `aria-hidden` kullanılır.
- Seçenekler gizli radio input ve label üzerinden oluşturulur.
- Test metinleri dil dosyalarından gelir.

#### Seçenek tuşları

`keyBase` varsayılan olarak `1` değerindedir.

- SNS: `1–5`
- ESS: `0–3`

Testte bulunmayan seçenek numarası yok sayılır.

#### Otomatik ilerleme

Fare, dokunma veya sayı tuşuyla seçim yapıldığında 260 ms sonra sonraki soruya geçilir.

Klavye okları ve boşluk tuşuyla yapılan seçim otomatik ilerlemeyi tetiklemez.

Yukarı/aşağı ok tuşları otomatik ilerlemeyi kapatır.

#### Dokunmatik kaydırma

- Yatay hareket `50px` üzerinde olmalıdır.
- Yatay hareket dikey hareketin 1,5 katından fazla olmalıdır.
- Fare ile sürükleme desteklenmez.

Son soruda `onFinish(answers.slice(), id)` çağrılır.

### `result.js`

`createResult({...})` sonuç panelini oluşturur.

Güncel parametreler:

`panel, content, canvas, hint, skipBtn, actions, editBtn, restartBtn, onEdit, onRestart`.

Döndürdüğü arayüz:

```js
{
  show(answers, testId, opts),
  hide()
}
```

`show()`:

1. `TESTS[testId].scoring` ile cevapların geçerliliğini kontrol eder.
2. Geçersiz cevapta sonucu açmaz ve `false` döndürür.
3. `computeScore()` ve `classify()` ile sonucu belirler.
4. Sonuç metnini `tests.<id>.messages.<key>` üzerinden alır.
5. `showScore` açıksa skor satırını gösterir.
6. Sonuç panelini açar ve kazı-kazan alanını sıfırlar.
7. `opts.revealed` verilmişse kazı-kazanı doğrudan açar.

Kazı-kazan açıldığında ipucu ve atlama butonu gizlenir, sonuç aksiyonları görünür.

### `scratch.js`

`createScratch({ canvas, onReveal, getLabel, threshold, brush })` fonksiyonunu dışa aktarır.

- Canvas üzerine kazınabilir kapak çizer.
- Renkleri CSS değişkenlerinden alır.
- Pointer Events ve `setPointerCapture` kullanır.
- Silinen alanın oranını örnekleyerek eşik aşıldığında sonucu açar.
- Dil ve tema değişikliklerinde henüz kazınmamış kapak yeniden etiketlenebilir.
- Pencere boyutu değiştiğinde henüz açılmamış kapak yeniden çizilebilir.

**Bilinen davranış:** Pencere boyutu değişirken kısmen kazınmış kapak sıfırlanabilir. Yeniden boyutlandırma dinleyicisi `touched` durumunu kontrol etmez.

### `scoring.js`

DOM'dan bağımsız skor hesaplama modülüdür.

Dışa aktardığı temel fonksiyonlar:

- `isValid(answers, scoring, scaleSize)`
- `minScore(scoring, scaleSize)`
- `maxScore(scoring, scaleSize)`
- `computeScore(answers, scoring)`
- `classify(score, scoring)`

Skor formülü:

`Σ (cevap + answerOffset) × ağırlık + constant`

`answerOffset` ve `constant` varsayılan olarak `0` kabul edilir.

Negatif ağırlıklar desteklenir. Skor yukarı yuvarlanır.

#### SNS

- Ağırlıklar: `[6, 9, -5, -11, -13]`
- Sabit: `20`
- `answerOffset: 1`
- Eşik: `0`
- `suspectBelow: true`
- Skor `< 0` olduğunda şüpheli sınıflandırması yapılır.
- Ham skor kullanıcıya gösterilmez.

#### ESS

- 8 madde.
- Her madde 0–3 puan.
- Toplam skor 0–24.
- Ağırlıklar: sekiz adet `1`.
- `showScore: true`.

Sınıflandırma bantları:

| Skor | Anahtar |
|---|---|
| 0–5 | `lowerNormal` |
| 6–10 | `higherNormal` |
| 11–12 | `mild` |
| 13–15 | `moderate` |
| 16–24 | `severe` |

ESS puanlama bilgisi Mapi Research Trust tarafından yayımlanan ESS Scaling and Scoring v2.0 (Ağustos 2017) belgesine dayanır.

### Birim testleri

`js/scoring.test.js`, Node'un yerleşik `node:test` ve `node:assert/strict` modüllerini kullanır.

Çalıştırma:

```bash
node --test js/scoring.test.js
```

Testler SNS ve ESS skor formüllerini, uç değerleri, sınıflandırma sınırlarını ve cevap geçerliliğini kontrol eder.

**Teknik borç:** Test dosyasında SNS ve ESS konfigürasyonları `config.js` içinden kullanılmak yerine elle kopyalanmıştır. İleride iki dosya birbirinden ayrışabilir.

---

## 6. Diğer modüller

### `site.js`

Footer içeriğini oluşturur.

- Rol metni: `footer.role`
- Bağlantılar: `AUTHOR.links`
- Not: `footer.note`
- Sayaç açıksa ek not: `footer.statsNote`

Dış bağlantılarda `target="_blank"` ve `rel="noopener"` kullanılır.

**Not:** `config.js` içinde `AUTHOR.name` tanımlı olmasına rağmen güncel `site.js` bu alanı footer'a eklemez. `.author-name` CSS sınıfı da şu an kullanılmıyor.

### `share.js`

WhatsApp paylaşım bağlantısını oluşturur.

- Mevcut URL'nin hash ve query bölümlerini kaldırır.
- Aktif dili `?lang=` parametresiyle ekler.
- `https://wa.me/?text=` adresine yalnızca site bağlantısını gönderir.
- Ayrı bir paylaşım metni göndermez.
- WhatsApp önizleme başlık, açıklama ve görseli `index.html` içindeki Open Graph etiketlerinden alır.
- Dil değişince bağlantı güncellenir.

Cevaplar ve skorlar paylaşım bağlantısına eklenmez.

### `langswitch.js`

`LANGUAGES` üzerinden dil butonlarını oluşturur.

- Bayrak görselleri `assets/flags/` altındadır.
- Butonların erişilebilir etiketi dilin kendi adıdır.
- Aktif dil `aria-pressed="true"` ile belirtilir.

### `theme.js`

Dışa aktarır:

```js
initTheme()
getTheme()
onThemeChange(fn)
```

Tema önceliği:

1. Kullanıcının kaydettiği tercih.
2. Sistem tercihi (`prefers-color-scheme`).

Kullanıcı tercihi `localStorage["theme"]` içinde `dark` veya `light` olarak tutulur.

Kullanıcı tercihi yoksa CSS medya sorgusu sistem temasını belirler. Sistem teması değişirse sayfa da güncellenir.

Tema butonunun `aria-pressed` değeri mevcut temayı belirtir. İkon, bir sonraki geçişi gösterir.

### `richtext.js` ve `references.js`

`richtext.js`, kaynak numaralı metinleri ve kaynak listelerini oluşturur.

Kaynak kayıtları `references.js > REFERENCES` içinde tutulur.

Metinlerdeki `[@anahtar]` biçimi üst simge kaynak numarasına dönüşür.

- Kaynak numaraları her metin bloğunda ayrı hesaplanır.
- Aynı kaynak aynı blokta tekrar kullanılırsa aynı numara korunur.
- Kaynak listesinde yalnızca kullanılan kaynaklar görünür.
- `url` alanı varsa yalnızca `http(s)` bağlantıları tıklanabilir olur.
- Bilinmeyen kaynak anahtarı metinde olduğu gibi kalır ve konsola uyarı yazılır.
- Dil değişince metinler ve kaynak listeleri yeniden oluşturulur.

`data-i18n-rich-list` ile tanımlanan dizilerde `## ` ile başlayan satırlar başlık olarak işlenir.

Bu başlıklardan ayrıca kutu içi gezinme şeridi oluşturulur.

Metinler DOM'a `textContent` ve `append` ile eklenir; kullanıcı girdisi kaynaklı HTML çalıştırılmaz.

### `symptoms.js`

Narkolepsi belirti akışını oluşturur.

Veri yapısı:

```js
narcolepsy.symptoms = {
  title,
  lead,
  items: [],
  note
}
```

Her belirti öğesi:

```js
{
  image,
  alt,
  when,
  title,
  body
}
```

- Belirti verileri dil dosyalarında tutulur.
- Görseller `assets/symptoms/` altından yüklenir.
- Görsel yoksa veya yüklenemezse yer tutucu gösterilir.
- Görsel oranı 4:3'tür.
- Belirti metinleri `textContent` ile eklenir.
- Belirti dizisi boşsa bölüm gizlenir.
- Mobilde dikey, `64rem` ve üzerindeki ekranlarda beş sütunlu yatay akış kullanılır.

Renk geçişi CSS'teki `--flow-start` ve `--flow-end` değişkenleriyle yönetilir.

---

## 7. Sayaç sistemi

### `stats.js`

Dışa aktarır:

```js
statsEnabled
initStats()
trackTestCompleted(testId)
```

Ayarlar `config.js > STATS` içindedir:

```js
STATS = {
  workerUrl,
  goatcounterCode,
  paths: {
    view,
    testDone
  }
}
```

### İki ayrı sayaç sistemi

| Sistem | Görev |
|---|---|
| Cloudflare Worker + D1 | Home'da gösterilen sayıların kaynağı ve asıl sayım |
| GoatCounter | İsteğe bağlı arka plan sayımı; sayılar buradan okunmaz |

Şu an `goatcounterCode` kapalıdır. Home'daki sayıların kaynağı Worker'dır.

`statsEnabled`, Worker veya GoatCounter ayarlarından en az biri doluysa `true` olur. Footer'daki sayaç bilgilendirmesi buna göre gösterilir.

### Sayılmayan ziyaretler

`shouldTrack()` şu durumlarda artırma yapmaz:

- `localhost`, `127.0.0.1`, `[::1]`
- `navigator.doNotTrack === "1"`
- `navigator.globalPrivacyControl`
- `localStorage.skipgc` doluysa

Kendi ziyaretini saymamak için:

```js
localStorage.setItem("skipgc", "t");
```

Sayılmayan ziyaretçi yine de mevcut sayaçları okuyabilir.

### İstekler

Sayfa açılışında:

- Sayılan ziyaretçi: `POST /tally/view`
- Sayılmayan ziyaretçi: `GET /tally`

Test tamamlandığında:

- `POST /tally/test/<id>`

Her test, aynı sayfa yüklemesi içinde en fazla bir kez sayılır. Aynı testin cevaplarını düzenleyip yeniden tamamlamak ikinci bir sayım oluşturmaz. Farklı testler ayrı ayrı sayılabilir.

### Mevcut Home arayüzü

Şu an Home'da iki sayı alanı bulunur:

- `#stat-views`
- `#stat-tests`

`stat-tests`, bütün testlerin toplam tamamlanma sayısını gösterir.

Worker yanıtında test başına sayılar da bulunur (`byTest.sns`, `byTest.ess`), ancak `stats.js` bunları henüz ayrı kartlarda göstermez.

**Planlanan geliştirme:** Toplam test sayacı yerine SNS ve ESS tamamlanma sayılarını ayrı göstermek. Worker API'sinde bu veriler zaten mevcuttur; değişiklik esas olarak `index.html`, `stats.js` ve ilgili çeviri anahtarlarını kapsar.

### Gönderilen veri

Worker'a yalnızca şu olaylar bildirilir:

- Sayfa görüntülendi.
- Belirli bir test tamamlandı.

Test cevapları, skor, dil ve tema gönderilmez.

Worker IP adresini veritabanına kaydetmez. Ancak hız sınırı uygulamak için isteğin Cloudflare tarafından sağlanan `CF-Connecting-IP` başlığı kullanılır.

### Hata davranışı

Worker isteği başarısız olursa veya yanıt alınamazsa konsola uyarı yazılır. Sayaç kutusu gizli kalır; sitenin diğer işlevleri çalışmaya devam eder.

Sayaçların ikisi de sıfırsa kutu gösterilmez.

Sayılar `Intl.NumberFormat` ile aktif dilin sayı biçimine göre yazılır. Dil değişince tekrar biçimlendirilir.

---

## 8. Worker ve D1

Cloudflare Worker, siteden bağımsız yayınlanır.

Dosyalar:

- `worker/src/index.js`
- `worker/schema.sql`
- `worker/wrangler.toml`
- `worker/README.md`

### API

| İstek | Görev |
|---|---|
| `GET /tally` | Tüm sayaçları okur |
| `POST /tally/view` | Görüntülenme sayısını artırır |
| `POST /tally/test/sns` | SNS tamamlanma sayısını artırır |
| `POST /tally/test/ess` | ESS tamamlanma sayısını artırır |

GET yanıtı:

```json
{
  "views": 100,
  "tests": 50,
  "byTest": {
    "sns": 30,
    "ess": 20
  }
}
```

`tests`, `byTest` içindeki test sayaçlarının toplamıdır.

### Test ID kontrolü

`worker/src/index.js` içindeki `TEST_IDS` listesi şu an:

```js
["sns", "ess"]
```

Yalnızca bu listedeki testler için sayaç artırılabilir. Bilinmeyen test ID'si `404` döndürür.

Yeni test eklendiğinde `TEST_IDS` listesi ve `config.js > TESTS` birlikte güncellenmelidir. Ardından Worker yeniden yayınlanmalıdır.

### D1 veri modeli

Tablo:

```sql
CREATE TABLE IF NOT EXISTS counters (
  name TEXT PRIMARY KEY,
  n INTEGER NOT NULL DEFAULT 0
);
```

Kullanılan sayaç isimleri:

- `views`
- `test_sns`
- `test_ess`

Sayaçlar ilk artırma sırasında `INSERT ... ON CONFLICT DO UPDATE` ile oluşturulur veya artırılır.

`schema.sql` içinde hâlâ `views` ve `tests` başlangıç satırları eklenmektedir. Worker `tests` satırını okumaz; toplam test sayısını `test_<id>` satırlarından hesaplar.

Bu nedenle `tests` satırı eski veri modelinden kalan, kullanılmayan bir kayıttır. Şema temizliği yapılabilir; mevcut çalışan sayaçların sıfırlanmaması için değişiklik dikkatli uygulanmalıdır.

### CORS ve Origin kontrolü

`wrangler.toml > ALLOWED_ORIGINS` izinli origin listesini belirler.

- POST isteklerinde `Origin` kontrol edilir.
- İzinli olmayan origin için `403` döndürülür.
- OPTIONS preflight istekleri desteklenir.
- GET `/tally` origin kontrolü olmadan okunabilir.

Origin kontrolü tek başına güvenlik sınırı değildir; taklit edilebilir. Temel amacı başka sitelerden gelen sıradan artırmaları engellemektir.

### Hız sınırı

`wrangler.toml` içinde Cloudflare Rate Limiting binding tanımlıdır:

- Namespace: `2026111701`
- Limit: IP başına 60 saniyede 30 istek.

`worker/src/index.js`, POST isteklerinde `env.TALLY_LIMITER.limit()` çağırır.

Limit aşılırsa `429` ve `Retry-After` yanıtı döndürülür.

### Veri gizliliği

D1 veritabanında IP adresi, ziyaretçi kimliği, test cevapları veya skor saklanmaz.

IP yalnızca hız sınırı anahtarı olarak kullanılır.

### Yayınlama

Worker ayarları `worker/wrangler.toml` içindedir.

`ALLOWED_ORIGINS` veya `TEST_IDS` değiştiğinde Worker yeniden yayınlanmalıdır.

Worker'ın yayınlama ve yerel test adımları `worker/README.md` içindedir.

---

## 9. CSS yapısı

### `base.css`

Genel reset, tipografi ve renk değişkenlerini içerir.

Açık tema `:root` üzerinde tanımlanır.

Koyu tema iki yoldan uygulanır:

1. `prefers-color-scheme: dark` medya sorgusu — kullanıcı tercihi yoksa.
2. `:root[data-theme="dark"]` — kullanıcı koyu temayı seçtiyse.

İki koyu tema tanımı aynı renk değişkenlerini içermelidir.

Temel değişkenler:

```text
--bg
--surface
--text
--muted
--accent
--accent-strong
--accent-soft
--on-accent
--border
--warm
--danger
--scratch-a
--scratch-b
--scratch-ink
--radius
--maxw
--header-h
--font
--font-serif
```

`--header-h` varsayılan olarak `3.5rem`; `36rem` altındaki ekranlarda `5.4rem` olur.

`[hidden] { display: none !important }` kuralı globaldir.

Yumuşak kaydırma, hareket azaltma tercihi kapalı olduğunda etkinleşir.

### `layout.css`

Başlıca bileşenler:

- `.container`
- `.site-header`
- `.header-inner`
- `.brand`
- `.site-nav`
- `.header-tools`
- `.lang-list`
- `.lang-btn`
- `.theme-btn`
- `.section`
- `.section-first`
- `.lead`
- `.big`
- `.row`
- `.stats`
- `.stat`
- `.stat-num`
- `.stat-label`
- `.stat-icon`
- `.site-footer`
- `.author-role`
- `.author-links`
- `.footer-note`

Responsive davranış:

- `36rem` altında header iki satırlı grid olur.
- `30rem` altında yazı ve boşluklar küçülür.

Home sayaç kartlarının görünümü bu dosyada tanımlıdır.

### `components.css`

Başlıca bileşenler:

- Butonlar: `.btn`, `.btn-ghost`
- Test ilerlemesi: `.progress`, `.progress-text`, `.progress-bar`
- Test kaydırma: `.viewport`, `.track`, `.slide`
- Soru ve seçenekler: `.question-text`, `.options`, `.option`, `.opt-key`
- Metin kutusu: `.scroll-box`
- Metin içi kaynaklar: `.cite`, `.refs`, `.refs-title`
- İçindekiler şeridi: `.toc`, `.toc-btn`
- Sonuç: `.scratch-card`, `.scratch-content`, `.result-actions`
- Narkolepsi tanımı: `.rich-intro`
- Belirti akışı: `.symptoms`, `.symptom-flow`, `.symptom`, `.symptom-media`, `.symptom-when`, `.symptom-title`, `.symptom-body`, `.symptoms-note`

Test seçeneklerinin seçili durumu `input:checked + label` üzerinden belirlenir.

`prefers-reduced-motion: reduce` altında ilgili geçişler kapatılır.

### Bilinen CSS–HTML farkı

HTML'de `.hero` ve `.hero-subtitle` sınıfları bulunur. Mevcut CSS dosyalarında bunlara ait özel kural yoktur.

Bu nedenle `.hero` için eski belgede belirtilen `min-height: 100svh` ve dikey ortalanmış flex davranışı mevcut değildir. Bu tasarım isteniyorsa CSS tarafında ayrıca uygulanmalıdır.

---

## 10. Değişiklik rehberi

| Yapılacak | Değişecek yer |
|---|---|
| Yeni dil ekleme | `js/locales/<kod>.js`, `assets/flags/<kod>.svg`, `languages.js` |
| Tarayıcı dili eşlemesi | `i18n.js` |
| Footer rolü ve notu | `locales/*.js > footer` |
| Footer bağlantıları | `config.js > AUTHOR.links` |
| Soru metni düzenleme | `locales/*.js > tests.<id>.questions` |
| Soru ekleme/çıkarma | Dil dosyaları + `config.js > TESTS[id]` + skorlama |
| Seçenek sayısını değiştirme | Dil dosyaları + `TESTS[id].scaleSize` |
| Skor katsayıları ve eşikler | `config.js > TESTS[id].scoring` |
| Sonuç mesajları | `locales/*.js > tests.<id>.messages` |
| Skor hesaplama mantığı | `scoring.js` |
| Skorlama birim testleri | `scoring.test.js` |
| Varsayılan test | `config.js > DEFAULT_TEST` |
| Test yönergesi ve telif | `locales/*.js > tests.<id>.intro / copyright` |
| Sonuçta skor gösterimi | `config.js > TESTS[id].showScore` |
| Seçenek tuşlarının başlangıcı | `config.js > TESTS[id].keyBase` |
| Yeni test ekleme | `config.js`, tüm dil dosyaları, `worker/src/index.js > TEST_IDS` |
| Test seçici davranışı | `testswitch.js` |
| Test soru akışı | `quiz.js` |
| Sonuç gösterimi | `result.js` |
| Kazı-kazan davranışı | `scratch.js` |
| Kazı-kazan renkleri | `base.css > --scratch-*` |
| Tema renkleri | `base.css` |
| Tema butonu | `index.html > #theme-btn`, `theme.js`, `layout.css` |
| Tema metinleri | `locales/*.js > theme.toggle` |
| Tema saklama anahtarı | `theme.js` ve `index.html` içindeki satır içi script |
| Tema değişiminde işlem | `theme.js > onThemeChange(fn)` |
| Yeni bölüm | `index.html`, menü bağlantıları, `locales/*.js > nav` |
| Yeni yerelleştirilen HTML metni | `data-i18n` + tüm dil dosyaları |
| Header düzeni | `layout.css` |
| Home sayaç kartları | `index.html`, `stats.js`, `layout.css`, dil dosyaları |
| Sayaç API'si | `worker/src/index.js` |
| Worker izinli siteler | `worker/wrangler.toml > ALLOWED_ORIGINS` |
| Worker hız sınırı | `worker/wrangler.toml > ratelimits` |
| Yeni sayaç türü | Worker API + D1 veri modeli + `stats.js` |
| GoatCounter açma/kapama | `config.js > STATS.goatcounterCode` |
| Kaynak ekleme | `references.js > REFERENCES` |
| Narkolepsi metni | `locales/*.js > narcolepsy.intro / body` |
| Belirti ekleme/çıkarma | `locales/*.js > narcolepsy.symptoms.items` |
| Belirti akışı görünümü | `components.css` |
| WhatsApp paylaşımı | `share.js` |
| Footer görünümü | `layout.css` |
| Genel metin kutusu | `components.css > .scroll-box` |

---

## 11. Teknik borç ve takip edilecek noktalar

Bunlar mevcut sitenin çalışmasını engelleyen hatalar olarak değerlendirilmemelidir; iyileştirme ve bakım maddeleridir.

- Home'da SNS ve ESS sayaçlarını ayrı göstermek.
- `.hero` ve `.hero-subtitle` için istenen tasarım davranışını CSS'e eklemek veya HTML sınıflarını sadeleştirmek.
- `scoring.test.js` içindeki elle kopyalanmış test konfigürasyonlarını `config.js` ile ortaklaştırmak.
- `stats.js` Worker yanıtını kullanmadan önce beklenen veri yapısına karşı doğrulamak.
- `AUTHOR.name` alanını footer'da kullanmak veya gereksizse kaldırmak.
- `schema.sql` içindeki kullanılmayan `tests` başlangıç kaydını değerlendirmek.
- `localStorage` anahtarlarını proje adıyla öneklemek. `lang`, `theme` ve `skipgc` gibi genel anahtarlar aynı origin altındaki başka projelerle çakışabilir. Tema için HTML içindeki satır içi script de aynı anda güncellenmelidir.
- Favicon ve `theme-color` meta etiketlerini eklemek.
- Erişilebilirlik ve farklı tarayıcı/cihaz davranışlarını iyileştirmek.

Bu maddeler arasında SNS ve ESS sayaçlarının ayrı gösterilmesi mevcut ana geliştirme işidir. Diğerleri teknik borç veya isteğe bağlı iyileştirmelerdir.