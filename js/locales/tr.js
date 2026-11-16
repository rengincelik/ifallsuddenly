// Türkçe
export default {
  meta: {
	  title: "I Fall Suddenly",
    description: "Hızlı Ön Tarama",
    dateLocale: "tr-TR",
  },

	site: { name: "I Fall Suddenly" },

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
	  prompt: "Bu bölümdeki kaynakları görmek için tıklayın",
    title: "Kaynaklar",
    cite: "Kaynak {n}",
  },

	about: {
		// Hikaye: lead + big tek cümle gibi okunur (big vurgulu cümle). p1–p7 sırayla paragraf.
		lead: "Katapleksi yaşamak ilginç bir deneyim, ama onu tanımlamak daha da ilginç. Tam bu noktada tek bir cümle hayatımı değiştirdi:",
		big: "Ani kas kontrolü kaybı.",
		p1: "Neredeyse kendimi bildim bileli uyku ile ilgili problemlerim vardı. Gün içindeki o dayanılmaz EDS (Aşırı Gündüz Uykululuğu / Excessive Daytime Sleepiness) hallerini sadece yorgunluğa yoruyordum. Geceleri uyumaktan korkar hale gelmiştim; çünkü uzandığım an üstüme çöken, halk arasında karabasan olarak bilinen uyku felci (sleep paralysis) ve gerçeklikle rüya arasında gidip gelen o korkutucu hipnagojik halüsinasyonlar yakamı bırakmıyordu. Ne olduklarını bilmiyordum, anlatacak kelimem de yoktu.",
		p2: "Sonra bu kelimeleri ve yaşadığım ani kas güçsüzlüğü ataklarını, yani katapleksiyi araştırmaya başladım. Bende görülen, ilgili ya da ilgisiz olabilecek diğer semptomları da tek tek listeleyip araştırdım. Kesişim kümesinde karşıma Tip 1 narkolepsi çıktı. Başka bir olasılık var mı diye de baktım, ama özellikle katapleksi ile birleşen bu tablo bu hastalığa neredeyse özgü bir işaretti. Yaşadıklarımın ne olduğunu ve neden olduğunu öğrendiğimde rahatladım. Adını bilmek, korkunun yarısını alıyormuş.",
		p3: "Hangi uzmana gitmem gerektiğini ve doktora hangi belirtileri anlatmam gerektiğini araştırdım, gerekli testleri (tüm gece polisomnografisi ve ertesi gün yapılan MSLT gibi uyku testlerini) yaptırdım ve teşhisimi aldım. Şimdi tedavi sürecindeyim. Tedavi kararları kişiye özeldir ve doktor kontrolünde alınmalıdır, bu yüzden bu sayfada ilaç ayrıntılarına girmiyorum.",
		p4: "Araştırırken bu soru testlerine rastladım ve benim sonuçlarımın bu hastalığa sahip bireylerinkiyle paralel olduğunu gördüm. Narkolepsi, birinci basamak sağlık hizmetinde kolay fark edilen bir hastalık değil. Belirtileri gözden kaçabiliyor, genel taramalarda ortaya çıkmıyor ve teşhis için özel testler gerekiyor. Bu noktada basit bir soru testinin bile önemli bir ipucu verebilmesi beni çok etkiledi.",
		p5: "Ben de belirtilerimi görmezden geliyordum. Haberlerde ya da filmlerde gösterilen uç örneklerden biri değildim ve karşılaştığım hiç kimse 15 yıl boyunca 'bu bir hastalık olabilir' demedi. Bu yüzden asıl soru şu: Yaşadığın sorun kısa süreli ve geçici mi, yoksa uzun süredir devam eden ve ciddiye alınması gereken bir şey mi? Bu testlerin buna fikir vermesi için bu sayfayı yaptım. Bir teşhis koymuyor, ama doğru kapıyı çalıp çalmaman gerektiğini düşündürebilir.",
		p6: "Aşağıda iki tarama testi göreceksiniz. Epworth (ESS) gün içi genel uykululuk düzeyinizi ölçer; İsviçre Narkolepsi Ölçeği (SNS) ise özellikle Tip 1 narkolepsi belirtilerine odaklanır. Narkolepsi hakkında daha ayrıntılı bilgiyi sayfanın devamında bulabilirsiniz.",
		p7: "Ben bunu bir kelimeyle buldum. Bu site, o kelimeyi arayan başka birine daha hızlı ulaşsın diye var."
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
					image: "assets/symptoms/eds.svg",
					when: "Gün boyu",
					title: "Aşırı gündüz uykululuğu",
					body: "Yeterince uyunsa bile gün boyu süren uyku hali ve karşı konulması zor ani uyku atakları.",
				},
				{
					image: "assets/symptoms/cataplexy.svg",
					when: "Duygu anında",
					title: "Katapleksi",
					body: "Kahkaha gibi duygularla ani kas gücü kaybı. Kişi bu sırada bilinçlidir.",
				},
				{
					image: "assets/symptoms/hallucinations.svg",
					when: "Uyku geçişlerinde",
					title: "Halüsinasyonlar",
					body: "Uykuya dalarken ya da uyanırken görülen canlı, çoğu zaman korkutucu görüntü ve sesler.",
				},
				{
					image: "assets/symptoms/sleep-paralysis.svg",
					when: "Uyku geçişlerinde",
					title: "Uyku felci",
					body: "Zihin uyanıkken kısa süreliğine hareket edememe ve konuşamama.",
				},
				{
					image: "assets/symptoms/dns.svg",
					when: "Gece",
					title: "Bölünmüş gece uykusu",
					body: "Gece boyunca sık uyanmalar ve hafif, kesintili uyku.",
				},
			],
			note: "Bu belirtilerden birinin görülmesi narkolepsi olduğu anlamına gelmez; uyku felci ve halüsinasyonlar narkolepsisi olmayan kişilerde de zaman zaman olabilir. Bu sitedeki testler tanı koymaz. Belirtiler günlük yaşamı etkiliyorsa bir uyku uzmanına başvurmak gerekir.",
		},

		body: [
			"## Beş belirti",
			"Narkolepsi, gece uykusunun bölünmesini de içeren beş belirtiyle (pentad) tanımlanır. Hepsi her kişide görülmez ve ortaya çıkış sırası değişebilir.[@dauvilliers2007]",
			"1. Aşırı gündüz uykululuğu. Her hastada vardır: sürekli uykulu olma ve gün boyunca karşı konulamaz uyku atakları.[@scammell2015]",
			"2. Katapleksi. Kahkaha, heyecan ya da öfke gibi güçlü duyguların tetiklediği, bilinç açıkken ani ve kısa süreli kas gücü kaybı.[@sturzenegger2004] Katapleksi Tip 1'in tanı ölçütlerinden biridir, Tip 2'de görülmez.[@aasm2014]",
			"3. Uyku felci. Uykuya dalarken ya da uyanırken geçici olarak hareket edememe veya konuşamama.[@dauvilliers2007] Bu, REM uykusundaki kas gevşekliğinin bilinç açıkken sürmesidir; çoğu zaman korkutucudur ve canlı, rüya benzeri halüsinasyonlar eşlik edebilir.[@sharpless2016] Narkolepsisi olmayanlarda da görülür: 35 çalışmayı birleştiren bir derlemede genel nüfusun %7,6'sı hayatında en az bir atak yaşamış, öğrencilerde bu oran yaklaşık %28 olmuştur.[@sharpless2011] Yetersiz ve bölünmüş uyku riski artıran etkenler arasındadır.[@sharpless2016]",
			"4. Hipnagojik / hipnopompik halüsinasyonlar. Uykuya dalarken ya da uyanırken yaşanan canlı, çoğu zaman korkutucu algılar.[@dauvilliers2007] Narkolepside sık görülürler ama tek başına narkolepsi anlamına gelmezler: İngiltere'de 4972 kişiyle yapılan görüşmede katılımcıların %37'si uykuya dalarken, %12,5'i uyanırken halüsinasyon bildirmiştir. Uykusuzluk ya da aşırı gündüz uykululuğu olanlarda daha sık görülmüşlerdir.[@ohayon1996]",
			"5. Bölünen gece uykusu. Gündüz uykulu olunmasına rağmen gece sık hareket etme ve sık uyanma.[@dauvilliers2007] Narkolepside sık bir şikâyet ve gece uykusu kayıtlarında sık rastlanan bir bulgudur; sık, kısa uyanmalar ve tekrar uykuya dönmekte zorluk olarak tarif edilir.[@roth2013] Bir derlemeye göre tedavi almayan hastaların yaklaşık %61'i, tedavi alanların yaklaşık %40'ı gece uykusunda bozulma bildirmiştir.[@maski2022] Uzman görüşü, bunun da tedavi hedefi olabileceği yönündedir.[@roth2013]",

			"## Nedeni",
			"Tip 1 narkolepsinin ayırt edici özelliği, hipotalamusun lateral bölgesindeki oreksin (hipokretin) üreten sinir hücrelerinin kaybıdır.[@nishino2000][@thannickal2000] En olası açıklama otoimmün bir süreçtir.[@dauvilliers2007][@bassetti2021]",
			"Genetik yatkınlık: kataplektik narkolepsisi olanlarda HLA-DQB1*06:02 aleli çok sık görülür.[@mignot2001] Bir çalışmada tipik kataplekside bu oran %93, kontrol grubunda %17 bulundu.[@mignot2002] Yani alel riskle ilişkilidir ama tek başına hastalık anlamına gelmez.",
			"Çevresel tetikleyiciler: şimdiye kadar saptanan en güçlü çevresel risk influenza A (H1N1) enfeksiyonudur.[@bonvalet2017] Çin'de yapılan bir çalışmada narkolepsi başlangıcı en sık nisanda, en seyrek kasımda görüldü. 2009-2010 H1N1 salgınından sonra başlangıçlar yaklaşık üç kat arttı ve grip tepesi ile başlangıç tepesi arasında 5-7 ay fark vardı.[@han2011] Bu bulgular bir ilişkiyi gösterir, kesin nedensellik kanıtı değildir.[@han2011]",

			"## Türleri",
			"Uluslararası Uyku Bozuklukları Sınıflaması (3. baskı) iki tür ayırır.[@aasm2014][@sateia2014]",
			"Tip 1 (NT1): katapleksi vardır ya da beyin-omurilik sıvısında (BOS) hipokretin-1 düzeyi düşüktür (110 pg/mL veya altı).",
			"Tip 2 (NT2): katapleksi yoktur, BOS hipokretin-1 düzeyi normaldir ya da ölçülmemiştir.",
			"Tip 2'de HLA-DQB1*06:02 aleli daha seyrek bulunur: bir çalışmada kataplekisiz narkolepside %56, tipik kataplekide %93.[@mignot2002]",

			"## Tanı nasıl konur",
			"Kesin tanı, kapsamlı bir klinik ve laboratuvar değerlendirmesi gerektirir.[@aasm2014]",
			"Gece polisomnografisi (PSG), gece uykusunun yapısına bakar ve obstrüktif uyku apnesi gibi diğer nedenleri dışlar.",
			"Çoklu Uyku Latansı Testi (MSLT), uykuya ne kadar hızlı daldığınızı (ortalama 8 dakika veya daha kısa) ve uykuya dalıştan hemen sonra REM uykusunun başlayıp başlamadığını (iki veya daha fazla uyku başlangıcı REM dönemi) ölçer.[@aasm2014][@littner2005]",
			"Bu sitedeki test olan İsviçre Narkolepsi Ölçeği (SNS), Tip 1 narkolepsi için kullanılan, beş soruluk kısa bir tarama aracıdır ve soruları uykuya dalamamayı, sabahları dinlenmemiş uyanmayı, gündüz şekerlemesini ve katapleksinin iki belirtisini (diz çözülmesi ve çene düşmesi) sorar. Farklı toplumlarda yapılan çalışmalar, Tip 1 narkolepsiyi diğer uykululuk nedenlerinden yüksek duyarlılık ve özgüllükle ayırdığını göstermiştir.[@sturzenegger2004][@sturzenegger2018][@bargiotas2019] Ölçeğin Türkçe sürümünün geçerlik ve güvenirliği gösterilmiştir.[@demir2023] Tip 2'yi saptayamaz ve bir tarama aracı tanının yerini tutmaz.[@bargiotas2019]",
			"BOS hipokretin-1 ölçümü, Tip 1 narkolepsi için altın standart biyobelirteçtir.[@nishino2000]",
			"Bir çalışmada 110 pg/mL altındaki hipokretin-1 düzeyi narkolepsi için tanısal bulunmuş, 200 pg/mL üzeri normal sayılmıştır. Ölçüm en çok katapleksili hastalarda ve MSLT'nin yorumlanmasının güç olduğu durumlarda, örneğin psikoaktif ilaç kullananlarda işe yarar.[@mignot2002]",

			"## Tedavi",
			"Tedavi, ilaçları davranışsal önlemlerle birleştirir ve genellikle ömür boyu sürdürülmesi gerekir.[@bassetti2021]",
			"Çeşitli ilaçlar uykululuğu, başka ilaçlar katapleksiyi azaltır. Seçim kişinin belirtilerine bağlıdır ve bir uzman tarafından yapılır.[@bassetti2021]",
			"Amerikan Uyku Tıbbı Akademisi'nin 2021 kılavuzu, yetişkin narkolepsisinde birkaç ilaç için güçlü öneri verir. Kılavuzu hazırlayanlara göre ilaç tek başına yeterli tedavi olmamalıdır; uyku hijyeni, okul ya da iş uyarlamaları ve bilişsel davranışçı terapi de plana girmelidir.[@maski2021]",
			"Planlı şekerlemeler her hastaya önerilmez. Randomize bir çalışmada iki kısa şekerleme eklemek belirtileri ortalama olarak değiştirmedi; yalnızca uyarıcı ilaçlara rağmen çok uykulu kalan hastalar planlı uykudan yarar gördü. Gece uykusu saatlerini düzenlemek ise algılanan belirti şiddetini azalttı.[@rogers2001] İlaç kullanan hastalarda birden fazla kısa şekerlemenin aşırı gündüz uykululuğunu yönetmede etkili olduğu da bildirilmiştir.[@takahashi2003]",
			"Oreksin reseptör agonistleri, doğrudan hipokretin eksikliğini hedefleyen yeni bir yaklaşımdır. Ağustos 2026'da FDA, oral bir oreksin reseptör-2 (OX2R) agonisti olan oveporexton'u (Orzeyful) yetişkinlerde Tip 1 narkolepsi için onayladı. Oreksin sinyalinin kaybını doğrudan hedefleyen ilk ilaçtır.[@fda2026] Faz 2 çalışmada Tip 1 narkolepsili 112 yetişkin sekiz hafta boyunca ilaç ya da plasebo aldı; uyanıklık, gündüz uykululuğu ve katapleksi plaseboya göre belirgin düzeldi. En sık yan etkiler uykusuzluk (%48) ile idrar sıklığı ve sıkışmasıydı.[@dauvilliers2025]",

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