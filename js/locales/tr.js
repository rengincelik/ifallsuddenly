// Türkçe
export default {
  meta: {
	  title: "Aniden Düşüyorum",
    description: "Hızlı Ön Tarama",
    dateLocale: "tr-TR",
  },

	site: { name: "Aniden Düşüyorum" },

  nav: {
    aria: "Ana menü",
    home: "Ana sayfa",
    about: "Hakkımda",
    narcolepsy: "Narkolepsi",
    test: "Test",
  },

  lang: { label: "Dil" },

	theme: { toggle: "Koyu tema" },

  refs: {
    title: "Kaynaklar",
    cite: "Kaynak {n}",
  },

	about: {
		lead: "Katapleksi yaşamak ilginç bir deneyim, ama onu tanımlamak daha da ilginç. Tam bu noktada tek bir cümle hayatımı değiştirdi: ani kas kontrolü kaybı.",
		p1: "Neredeyse kendimi bildim bileli uyku ile ilgili problemlerim vardı. Ama 15 yıldır yaşadığım kas kontrolü kayıplarının uykuyla ilgili olabileceğini asla düşünmemiştim. Geceleri uyumaktan korkar hale gelmiştim. Uyku felci ve halüsinasyonlar yaşıyordum ama ne olduklarını bilmiyordum, anlatacak kelimem de yoktu.",
		p2: "Sonra bu kelimeyi araştırdım. Bende görülen, ilgili ya da ilgisiz olabilecek diğer semptomları da tek tek listeleyip araştırdım. Kesişim kümesinde karşıma narkolepsi tip 1 çıktı. Başka bir olasılık var mı diye de baktım, ama ani kas kontrolü kaybı bu hastalığa neredeyse özgü bir işaretti. Yaşadıklarımın ne olduğunu ve neden olduğunu öğrendiğimde rahatladım. Adını bilmek, korkunun yarısını alıyormuş.",
		p3: "Hangi uzmana gitmem gerektiğini ve doktora hangi belirtileri anlatmam gerektiğini araştırdım, gerekli testleri yaptırdım ve teşhisimi aldım. Şimdi tedavi sürecindeyim. Tedavi kararları kişiye özeldir ve doktor kontrolünde alınmalıdır, bu yüzden bu sayfada ilaç ayrıntılarına girmiyorum.",
		p4: "Araştırırken bu testlere rastladım ve benim sonuçlarımın bu hastalığa sahip bireylerinkiyle paralel olduğunu gördüm. Narkolepsi, birinci basamak sağlık hizmetinde kolay fark edilen bir hastalık değil. Belirtileri gözden kaçabiliyor, genel taramalarda ortaya çıkmıyor ve teşhis için özel testler gerekiyor. Bu noktada basit bir soru testinin bile önemli bir ipucu verebilmesi beni çok etkiledi.",
		p5: "Ben de belirtilerimi görmezden geliyordum. Haberlerde ya da filmlerde gösterilen uç örneklerden biri değildim ve karşılaştığım hiç kimse 15 yıl boyunca “bu bir hastalık olabilir” demedi. Bu yüzden asıl soru şu: yaşadığın sorun kısa süreli ve geçici mi, yoksa uzun süredir devam eden ve ciddiye alınması gereken bir şey mi? Bu testlerin buna fikir vermesi için bu sayfayı yaptım. Bir teşhis koymuyor, ama doğru kapıyı çalıp çalmaman gerektiğini düşündürebilir.",
		big: "Ben bunu bir kelimeyle buldum. Bu site, o kelimeyi arayan başka birine daha hızlı ulaşsın diye var.",
	},

  home: {

	  title: "<span>Gece uyuyamıyorum.</span> <span>Gündüz uyanık kalamıyorum.</span>",
	  subtitle: "Uyku her zaman göründüğü kadar basit olmayabilir.",
	  start: "Teste geç",
    views: "görüntülenme",
    tests: "tamamlanan test",
  },

  // body: paragraf dizisi. "## " ile başlayan satır başlık olur. [@anahtar] kaynak numarası ekler (js/references.js).
// js/locales/tr.js içindeki `narcolepsy` bloğuna eklenecek / taşınacak parçalar.
//
// 1) Mevcut `narcolepsy.body` dizisinin İLK paragrafını (tanım paragrafı) body'den KES,
//    aşağıdaki `intro` dizisine taşı. [@anahtar] alıntıları aynen gelir, kaynak listesi
//    tanım kutusunun altında ayrıca çıkar. Geri kalan paragraflar body'de aynen kalır.
// 2) `symptoms` bloğunu yapıştır.

	narcolepsy: {
		title: "Narkolepsi",tocLabel: "Bölümler",

		intro: [
			"Narkolepsi, beynin uyku-uyanıklık döngüsünü düzgün düzenleyememesine bağlı, kronik nörolojik bir aşırı uykululuk hastalığıdır.[@scammell2015][@bassetti2021] Genellikle ergenlikte ya da genç yetişkinlikte başlar ve ömür boyu sürer.[@dauvilliers2007]",
			"Kataplektik narkolepsi dünyada yetişkinlerin yaklaşık %0,02'sini, yani yaklaşık 2.000 kişide 1'ini etkiler.[@dauvilliers2007] Belirtiler çoğu zaman narkolepsi olarak tanınmaz ve çalışmalar tanıya kadar geçen ortalama sürenin 15 yıla kadar çıkabildiğini bildirir.[@thorpy2014]",
		],

		symptoms: {
			title: "Narkolepsinin 5 temel belirtisi",
			lead: "Narkolepside belirtiler genellikle beş başlıkta toplanır. Hepsi her kişide görülmez ve ortaya çıkış sırası değişebilir. Aşağıdaki akış, belirtilerin günün hangi anında kendini gösterebildiğini özetler.",
			items: [
				{
					when: "Gün boyu",
					title: "Aşırı gündüz uykululuğu",
					body: "Yeterince uyunmuş olsa bile gün içinde bastıran uyku hali. Konuşurken, yemek yerken ya da çalışırken karşı konulması zor, kısa uyku atakları yaşanabilir. Kısa bir şekerleme çoğu zaman bir süre ferahlatır.",
				},
				{
					when: "Duygu anında",
					title: "Katapleksi",
					body: "Kahkaha, şaşkınlık ya da heyecan gibi duygularla birdenbire kas gücünün kaybı. Çene düşebilir, dizler boşalabilir. Kişi bu sırada bilinçlidir; genellikle saniyelerden birkaç dakikaya kadar sürer. Her narkolepsi türünde görülmez.",
				},
				{
					when: "Uyku geçişlerinde",
					title: "Halüsinasyonlar",
					body: "Uykuya geçiş sırasında gerçek gibi görünen görüntüler, sesler ya da odada biri varmış hissi. Çoğu zaman gerçek olmadıkları sonradan fark edilir, ama o an korkutucu olabilir.",
				},
				{
					when: "Uyku geçişlerinde",
					title: "Uyku felci",
					body: "Zihin uyanıkken bedeni hareket ettirememe hali. Kişi bilinçlidir ama kıpırdayamaz ve konuşamaz. Genellikle saniyelerden birkaç dakikaya kadar sürer ve kendiliğinden geçer.",
				},
				{
					when: "Gece",
					title: "Bölünmüş gece uykusu",
					body: "Gece boyunca sık uyanmalar ve hafif, kesintili uyku. Gündüz bu kadar uykulu olunmasına rağmen gece uykusunun bölünmesi, narkolepsinin tipik özelliklerinden biridir.",
				},
			],
			note: "Bu belirtilerden birinin görülmesi narkolepsi olduğu anlamına gelmez; uyku felci ve halüsinasyonlar narkolepsisi olmayan kişilerde de zaman zaman olabilir. Bu sitedeki testler tanı koymaz. Belirtiler günlük yaşamı etkiliyorsa bir uyku uzmanına başvurmak gerekir.",
		},

		body: [

			"## Nedeni",
			"Tip 1 narkolepsinin ayırt edici özelliği, hipotalamusun lateral bölgesindeki oreksin (hipokretin) üreten sinir hücrelerinin kaybıdır.[@nishino2000][@thannickal2000] En olası açıklama otoimmün bir süreçtir.[@dauvilliers2007][@bassetti2021]",
			"Genetik yatkınlık: kataplektik narkolepsisi olanların neredeyse tamamı HLA-DQB1*06:02 aleline sahiptir.[@mignot2001]",
			"Çevresel tetikleyiciler: şimdiye kadar saptanan en güçlü çevresel risk, hem enfeksiyon hem aşı yoluyla influenza A (H1N1)'dir.[@bonvalet2017]",

			"## Beş belirti",
			"Narkolepsi, gece uykusunun bölünmesini de içeren beş belirtiyle (pentad) tanımlanır.[@dauvilliers2007]",
			"1. Aşırı gündüz uykululuğu. Her hastada vardır: sürekli uykulu olma ve gün boyunca karşı konulamaz uyku atakları.[@scammell2015]",
			"2. Katapleksi. Kahkaha, heyecan ya da öfke gibi güçlü duyguların tetiklediği, bilinç açıkken ani ve kısa süreli kas gücü kaybı.[@sturzenegger2004]",
			"3. Uyku felci. Uykuya dalarken ya da uyanırken geçici olarak hareket edememe veya konuşamama.[@dauvilliers2007]",
			"4. Hipnagojik / hipnopompik halüsinasyonlar. Uykuya dalarken ya da uyanırken yaşanan canlı, çoğu zaman korkutucu algılar.[@dauvilliers2007]",
			"5. Bölünen gece uykusu. Gündüz uykulu olunmasına rağmen gece sık hareket etme ve sık uyanma.[@dauvilliers2007]",

			"## Türleri",
			"Uluslararası Uyku Bozuklukları Sınıflaması (3. baskı) iki tür ayırır.[@aasm2014][@sateia2014]",
			"Tip 1 (NT1): katapleksi vardır ya da beyin-omurilik sıvısında (BOS) hipokretin-1 düzeyi düşüktür (110 pg/mL veya altı).",
			"Tip 2 (NT2): katapleksi yoktur, BOS hipokretin-1 düzeyi normaldir ya da ölçülmemiştir.",

			"## Tanı nasıl konur",
			"Kesin tanı, kapsamlı bir klinik ve laboratuvar değerlendirmesi gerektirir.[@aasm2014]",
			"Gece polisomnografisi (PSG), gece uykusunun yapısına bakar ve obstrüktif uyku apnesi gibi diğer nedenleri dışlar.",
			"Çoklu Uyku Latansı Testi (MSLT), uykuya ne kadar hızlı daldığınızı (ortalama 8 dakika veya daha kısa) ve uykuya dalıştan hemen sonra REM uykusunun başlayıp başlamadığını (iki veya daha fazla uyku başlangıcı REM dönemi) ölçer.[@aasm2014][@littner2005]",
			"Bu sitedeki test olan İsviçre Narkolepsi Ölçeği (SNS), Tip 1 narkolepsi için kullanılan, beş soruluk kısa bir tarama aracıdır ve soruları uykuya dalamamayı, sabahları dinlenmemiş uyanmayı, gündüz şekerlemesini ve katapleksinin iki belirtisini (diz çözülmesi ve çene düşmesi) sorar. Farklı toplumlarda yapılan çalışmalar, Tip 1 narkolepsiyi diğer uykululuk nedenlerinden yüksek duyarlılık ve özgüllükle ayırdığını göstermiştir.[@sturzenegger2004][@sturzenegger2018][@bargiotas2019] Ölçeğin Türkçe sürümünün geçerlik ve güvenirliği gösterilmiştir.[@demir2023] Tip 2'yi saptayamaz ve bir tarama aracı tanının yerini tutmaz.[@bargiotas2019]",
			"BOS hipokretin-1 ölçümü, Tip 1 narkolepsi için altın standart biyobelirteçtir.[@nishino2000]",

			"## Tedavi",
			"Tedavi, ilaçları davranışsal önlemlerle birleştirir ve genellikle ömür boyu sürdürülmesi gerekir.[@bassetti2021]",
			"Planlı gündüz şekerlemeleri ve çeşitli ilaçlar uykululuğu azaltır, başka ilaçlar da katapleksiyi azaltır. Seçim kişinin belirtilerine bağlıdır ve bir uzman tarafından yapılır.[@bassetti2021]",
			"Oreksin reseptör agonistleri, doğrudan hipokretin eksikliğini hedefleyen yeni bir yaklaşımdır. Ağustos 2026'da FDA, oral bir oreksin reseptör-2 (OX2R) agonisti olan oveporexton'u (Orzeyful) yetişkinlerde Tip 1 narkolepsi için onayladı. Oreksin sinyalinin kaybını doğrudan hedefleyen ilk ilaçtır.[@fda2026]",

			"## Sonra ne yapmalı",
			"Bu belirtiler size tanıdık geliyorsa bir nöroloji ya da uyku tıbbı uzmanına başvurun. Uykululuğunuzun, kas güçsüzlüğünüzün ve uyku sorunlarınızın ne zaman olduğunu ve kullandığınız ilaçları not edip yanınızda götürün.",
			"Hiçbir ilacı kendi kendinize başlamayın, bırakmayın ya da değiştirmeyin. Tarama testi yalnızca ilk adımdır.",
		],
	},

  test: {
    title: "Kendini test et",
    switchLabel: "Test seç",
    progress: "Soru {n} / {total}",
    prev: "← Geri",
    next: "İleri →",
    finish: "Sonucu gör",
    tip: "{min}–{max} tuşlarıyla cevapla, ok tuşlarıyla ya da sağa sola kaydırarak gez.",
  },

  // Testler: her test kendi adı, alt başlığı, soruları, seçenekleri, sonuç mesajları ve PDF özetiyle ayrı bir blok.
  // Yeni test: config.js > TESTS'e ekle, buraya tests.<id> bloğu ekle (ARCHITECTURE.md > Yeni test ekleme).
  tests: {
    sns: {
      name: "İsviçre Narkolepsi Ölçeği (SNS)",
      subtitle: "İsviçre Narkolepsi Ölçeği (SNS)",
		// Bu yönerge bize aittir (ESS'inki gibi lisanslı değildir), serbestçe düzenlenebilir.
		intro: [
			"Bu beş soru bazı durumların sana ne sıklıkla olduğunu soruyor.",
			"Genelde nasıl olduğunu düşün ve sana en uygun cevabı seç.",
			"Doğru ya da yanlış cevap yok, her soruyu cevaplaman gerekiyor.",
			"Bu, Tip 1 narkolepsi için bir tarama aracıdır, tanı değildir.",
		],
      // GEÇİCİ TÜRKÇE METİN: Resmi SNS-TR (Demir ve ark. 2023) metni makalede yok. Yazarlardan alınınca bununla değiştir.
      // Soru sırası ve seçenek sayısı skorlamayı belirler (config.js), değiştirme.
      questions: [
        "Ne sıklıkla uykuya dalamıyorsunuz?",
        "Ne sıklıkla sabahları kendinizi kötü ya da yeterince dinlenmemiş hissediyorsunuz?",
        "Ne sıklıkla gün içinde şekerleme yapıyorsunuz?",
        "Gülme, mutluluk ya da öfke gibi duygular sırasında ne sıklıkla dizlerinizde güçsüzlük ya da çözülme yaşadınız?",
        "Gülme, mutluluk ya da öfke gibi duygular sırasında ne sıklıkla çenenizde düşme (sarkma) yaşadınız?",
      ],

      scale: ["Hiç", "Nadiren (ayda birden az)", "Bazen (ayda 1–3 kez)", "Sık (haftada 1–2 kez)", "Neredeyse her zaman"],

      // Q3'ün seçenekleri farklıdır (index 2)
      scales: {
        2: ["Hiç", "İsterdim ama yapamıyorum", "Haftada 1–2 kez", "Haftada 3–5 kez", "Neredeyse her gün"],
      },

      messages: {
        suspect: {
          title: "Cevapların narkolepside görülen bir örüntüyle uyuşuyor",
          body: "Bu bir tarama sonucudur, tanı değildir. Bir nöroloji veya uyku uzmanından randevu al, belirtilerini not edip yanında götür. Yalnız değilsin.",
        },
        unlikely: {
          title: "Cevapların tipik örüntüyle uyuşmuyor",
          body: "Bu, bir sorun olmadığı anlamına gelmez. Bu ölçek yalnızca Tip 1 narkolepsiye bakar ve bazı kişileri kaçırabilir. Gündüzleri hâlâ çok uykuluysan bir hekimle konuş, çünkü uykululuğun birçok başka nedeni vardır.",
        },
      },

    },

    ess: {
      name: "Epworth Uykululuk Ölçeği (ESS)",
      subtitle: "Epworth Uykululuk Ölçeği (ESS)",

      // Yönerge ve maddeler lisanslı metindir (Mapi Research Trust, ESS_AU1.0_tur-TR1_10NOV2022). Değiştirme.
      intro: [
        "Aşağıdaki durumlarda sadece yorgun hissediyor olmak yerine, uyuklamaya ya da uykuya dalmaya ne kadar eğilimlisiniz?",
        "Bu ankete yakın zamanlardaki olağan yaşam biçiminizi düşünerek cevap veriniz.",
        "Bunlardan bazılarını yakın zamanda yapmamış olsanız bile, olsaydı sizi nasıl etkilemiş olacağını bulmaya çalışınız.",
        "Her soruyu yapabileceğiniz en iyi biçimde cevaplandırmanız önemlidir.",
      ],

      questions: [
        "Otururken ve okurken",
        "TV seyrederken",
        "Umumi bir yerde (örn. sinema, tiyatro ya da bir toplantıda) bir şey yapmadan otururken",
        "Bir arabada bir saat boyunca ara vermeden yolcu olarak bulunurken",
        "Öğleden sonra koşullar izin verdiğinde dinlenmek için uzanırken",
        "Biriyle oturup konuşurken",
        "Alkol almadığınız bir öğle yemeği sonrası sessizce otururken",
        "Bir arabada, trafikte birkaç dakika duruyorken",
      ],

      scale: ["Hiç uyuklama yok", "Uyuklama ihtimali hafif", "Uyuklama ihtimali orta düzeyde", "Uyuklama ihtimali yüksek"],

      // Bant başlıkları yazarın yorum adlarının karşılığıdır (ESS Scaling and Scoring v2.0). Gövde metinleri bize aittir, lisanslı değildir.
      messages: {
        lowerNormal: {
          title: "Normal aralıkta, düşük gündüz uykululuğu",
          body: "Skorun normal aralığın alt kısmında. Yine de gündüzleri alışılmadık derecede uykulu hissediyorsan ya da seni endişelendiren başka belirtiler varsa bir hekimle konuş. Tek başına bir skor hiçbir şeyi dışlamaz.",
        },
        higherNormal: {
          title: "Normal aralıkta, yüksek gündüz uykululuğu",
          body: "Skorun normal aralıkta, ama üst kısmında. Birçok sağlıklı insan bu aralıkta çıkar. Uykululuk günlük hayatını zorluyorsa bir hekime söyle.",
        },
        mild: {
          title: "Hafif düzeyde aşırı gündüz uykululuğu",
          body: "Skorun hafif düzeyde aşırı gündüz uykululuğuna işaret ediyor. Nedenleri çok olabilir: yetersiz uyku ya da uyku apnesi gibi uyku bozuklukları. Özellikle sık tekrarlıyorsa bir hekimle konuşmaya değer.",
        },
        moderate: {
          title: "Orta düzeyde aşırı gündüz uykululuğu",
          body: "Skorun orta düzeyde aşırı gündüz uykululuğuna işaret ediyor. Nedenleri çok olabilir, bir hekim ya da uyku uzmanı bunları araştırabilir. Araba kullanırken dikkatli ol, uykulu hissediyorsan kullanma.",
        },
        severe: {
          title: "Ağır düzeyde aşırı gündüz uykululuğu",
          body: "Skorun ağır düzeyde aşırı gündüz uykululuğuna işaret ediyor. Lütfen yakın zamanda bir hekime ya da uyku uzmanına başvur. Uykulu hissediyorsan araç ya da makine kullanma.",
        },
      },


      copyright: "ESS © MW Johns 1990-1997. Lisans ile kullanılır",
    },
  },

  result: {
    cover: "Silerek gör",
    hint: "Parmağınla ya da fareyle silerek sonucu gör.",
    skip: "Silmeden göster",
    edit: "Cevapları düzenle",
    restart: "Baştan başla",
    score: "Skor: {score} / {max}",
  },

  share: {
    button: "WhatsApp'ta paylaş",
  },

  footer: {
	  role: "Designed & developed by Rengin Çelik",
    note: "Bu sayfa bir teşhis aracı değildir. Yalnızca bir nöroloji veya uyku uzmanına gitmen gerekip gerekmediği konusunda fikir verir. Cevapların bu cihazdan çıkmaz, hiçbir yere kaydedilmez.",
    statsNote: "Bu site yalnızca ziyaret ve tamamlanan test sayısını anonim olarak sayar. Cevapların ve sonucun hiçbir yere gönderilmez.",
  },
};