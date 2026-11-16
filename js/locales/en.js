// İngilizce (varsayılan dil). Başka dillerde eksik kalan anahtarlar buradan gelir.
export default {
  meta: {
    title: "I Fall Suddenly",
    description: "Sleep isn’t always as simple as it seems.",
    dateLocale: "en-GB",
  },

  site: { name: "I Fall Suddenly" },

  nav: {
    aria: "Main menu",
    home: "Home",
    about: "About me",
    narcolepsy: "Narcolepsy",
    test: "Test",
  },

  lang: { label: "Language" },
	theme: { toggle: "Dark theme" },

  refs: {
	  prompt: "Click to view sources for this section",
	  title: "Sources",
    cite: "Source {n}",
  },

	about: {
		// Hikaye: lead + big tek cümle gibi okunur (big vurgulu cümle). p1–p7 sırayla paragraf.
		lead: "Experiencing cataplexy is an interesting thing, but describing it is even more interesting. At that exact point, a single phrase changed my life:",
		big: "Sudden loss of muscle control.",
		p1: "I'd had sleep problems for almost as long as I can remember. I put those unbearable bouts of daytime sleepiness (EDS, Excessive Daytime Sleepiness) down to plain tiredness. I had reached the point of being afraid to go to sleep at night, because the moment I lay down, sleep paralysis would settle over me, and frightening hypnagogic hallucinations, drifting between reality and dream, wouldn't leave me alone. I didn't know what any of it was, and I had no words to describe it.",
		p2: "So I started researching those words, and the sudden episodes of muscle weakness I was having, in other words, cataplexy attacks. I listed my other symptoms, related or seemingly unrelated, and looked into each one. In the intersection, I found Type 1 narcolepsy. I checked whether anything else could explain it, but this picture, especially combined with cataplexy, turned out to be an almost unique sign of this condition. When I learned what I was experiencing and why, I felt relieved. Knowing the name takes away half the fear.",
		p3: "I researched which specialist to see and which symptoms to describe to the doctor, had the necessary tests done (sleep studies such as an overnight polysomnography and an MSLT the next day), and got my diagnosis. I'm now in treatment. Treatment decisions are personal and should be made under a doctor's supervision, so I don't go into medication details on this page.",
		p4: "While researching, I came across these questionnaires and saw that my results closely matched those of people with this condition. Narcolepsy isn't easily picked up in primary care. Its symptoms are easy to overlook, it doesn't show up in general screenings, and diagnosis requires specialized tests. That a simple questionnaire could be such a meaningful signal really struck me.",
		p5: "I was ignoring my own symptoms, too. I wasn't one of the extreme cases you see in the news or in films, and for 15 years no one I met ever said 'this could be an illness.' So the real question is: is what you're experiencing short-term and temporary, or long-standing and worth taking seriously? I built this page so these tests can give you an idea. They don't diagnose anything, but they can help you decide whether it's worth knocking on the right door.",
		p6: "Below, you'll find two screening tests. The Epworth Sleepiness Scale (ESS) measures general daytime sleepiness, while the Swiss Narcolepsy Scale (SNS) focuses specifically on Type 1 narcolepsy symptoms. You can find a more detailed breakdown of narcolepsy further down the page.",
		p7: "I found this through a single phrase. This site exists so that anyone searching for that phrase can get there faster."
	},
  home: {
	  title: "<span>Can't sleep at night.</span> <span>Can't stay awake by day.</span>",
    subtitle: "Sleep isn't always as simple as it seems.",
    start: "Take the test",
    views: "page views",
    tests: "tests completed",
  },

	narcolepsy: {
		title: "Narcolepsy",tocLabel: "Sections",

		intro: [
			"Narcolepsy is a chronic neurological disorder of hypersomnolence in which the brain cannot properly regulate the sleep-wake cycle.[@scammell2015][@bassetti2021] It usually begins in the teenage years or young adulthood and stays for life.[@dauvilliers2007]",
			"Narcolepsy with cataplexy affects roughly 0.02% of adults worldwide, about 1 in 2,000.[@dauvilliers2007] Symptoms are often not recognized as narcolepsy, and studies report an average delay of up to 15 years before the diagnosis is made.[@thorpy2014]",
		],

		symptoms: {
			title: "The 5 main symptoms of narcolepsy",
			lead: "Symptoms usually fall into five groups. Not everyone has all of them, and the order they appear in can vary. The flow below shows when in the day each one can show up.",
			items: [
				{
					image: "assets/symptoms/eds.svg",
					when: "All day",
					title: "Excessive daytime sleepiness",
					body: "Heavy sleepiness through the day even after enough sleep, with sudden sleep attacks that are hard to resist.",
				},
				{
					image: "assets/symptoms/cataplexy.svg",
					when: "Strong emotions",
					title: "Cataplexy",
					body: "Sudden loss of muscle strength triggered by emotions like laughter, while you stay awake and aware.",
				},
				{
					image: "assets/symptoms/hallucinations.svg",
					when: "Sleep transitions",
					title: "Hallucinations",
					body: "Vivid, often frightening images or sounds as you fall asleep or wake up.",
				},
				{
					image: "assets/symptoms/sleep-paralysis.svg",
					when: "Sleep transitions",
					title: "Sleep paralysis",
					body: "Briefly being unable to move or speak while your mind is awake.",
				},
				{
					image: "assets/symptoms/dns.svg",
					when: "At night",
					title: "Disrupted nighttime sleep",
					body: "Frequent awakenings and light, fragmented sleep during the night.",
				},
			],
			note: "Having one of these symptoms does not mean a person has narcolepsy; sleep paralysis and hallucinations can also happen from time to time in people without it. The tests on this site do not diagnose. If symptoms affect daily life, it is worth seeing a sleep specialist.",
		},
    body: [

      "## The five symptoms",
      "Narcolepsy is described by a symptom pentad, which includes fragmented night sleep. Not everyone has all five, and the order they appear in can vary.[@dauvilliers2007]",
      "1. Excessive daytime sleepiness. Present in every patient: constant sleepiness and irresistible sleep attacks during the day.[@scammell2015]",
      "2. Cataplexy. A sudden, brief loss of muscle tone triggered by strong emotions such as laughter, excitement or anger, while you stay conscious.[@sturzenegger2004] Cataplexy is one of the criteria for Type 1 and does not occur in Type 2.[@aasm2014]",
      "3. Sleep paralysis. Being temporarily unable to move or speak while falling asleep or waking up.[@dauvilliers2007] It happens when the muscle relaxation of REM sleep carries on into wakefulness; it is often frightening and can come with vivid, dream-like hallucinations.[@sharpless2016] It also occurs in people without narcolepsy: a review pooling 35 studies found that 7.6% of the general population had at least one episode in their lifetime, and about 28% of students.[@sharpless2011] Insufficient and disrupted sleep are among the factors that raise the risk.[@sharpless2016]",
      "4. Hypnagogic / hypnopompic hallucinations. Vivid, often frightening experiences at sleep onset or on waking.[@dauvilliers2007] They are common in narcolepsy but do not by themselves mean narcolepsy: in an interview survey of 4,972 people in the UK, 37% reported hallucinations while falling asleep and 12.5% on waking. They were more common in people with insomnia or excessive daytime sleepiness.[@ohayon1996]",
      "5. Disrupted night sleep. Frequent movement and awakenings during the night, even though you are sleepy during the day.[@dauvilliers2007] It is a common complaint in narcolepsy and a frequent finding on night sleep recordings, described as frequent, brief awakenings with difficulty getting back to sleep.[@roth2013] According to one review, about 61% of untreated patients and about 40% of treated patients report disturbed night sleep.[@maski2022] Expert opinion is that it can be a treatment target too.[@roth2013]",

		"## Cause",
		"The hallmark of Type 1 narcolepsy is the loss of orexin (hypocretin) neurons in the lateral hypothalamus.[@nishino2000][@thannickal2000] The most likely explanation is an autoimmune process.[@dauvilliers2007][@bassetti2021]",
		"Genetic susceptibility: the HLA-DQB1*06:02 allele is very common in people with narcolepsy with cataplexy.[@mignot2001] In one study it was found in 93% of people with typical cataplexy and in 17% of controls.[@mignot2002] So the allele is linked to risk, but carrying it does not by itself mean having the disease.",
		"Environmental triggers: the strongest environmental risk identified so far is influenza A (H1N1) infection.[@bonvalet2017] In a study from China, narcolepsy onset was most frequent in April and least frequent in November. After the 2009-2010 H1N1 pandemic, onsets rose about threefold, and the peak in onsets followed the flu peak by 5 to 7 months.[@han2011] These findings show an association, not proof of cause.[@han2011]",

      "## Types",
      "The International Classification of Sleep Disorders (3rd edition) separates two types.[@aasm2014][@sateia2014]",
      "Type 1 (NT1): cataplexy is present, or the hypocretin-1 level in cerebrospinal fluid (CSF) is low (110 pg/mL or less).",
      "Type 2 (NT2): no cataplexy, and CSF hypocretin-1 is normal or has not been measured.",
      "The HLA-DQB1*06:02 allele is less common in Type 2: in one study 56% in narcolepsy without cataplexy, against 93% in typical cataplexy.[@mignot2002]",

      "## How it is diagnosed",
      "A formal diagnosis needs a full clinical and laboratory work-up.[@aasm2014]",
      "Overnight polysomnography (PSG) looks at the structure of night sleep and rules out other causes, such as obstructive sleep apnea.",
      "The Multiple Sleep Latency Test (MSLT) measures how quickly you fall asleep (an average of 8 minutes or less) and whether REM sleep starts within minutes of sleep onset (two or more sleep-onset REM periods).[@aasm2014][@littner2005]",
      "The Swiss Narcolepsy Scale (SNS), the test on this site, is a short five-question screening tool for Type 1 narcolepsy, and its questions ask about trouble falling asleep, feeling unrefreshed in the morning, daytime naps, and the two signs of cataplexy: knees buckling and the jaw sagging. Several studies in different populations found that it separates Type 1 narcolepsy from other causes of sleepiness with high sensitivity and specificity.[@sturzenegger2004][@sturzenegger2018][@bargiotas2019] A Turkish version has been validated.[@demir2023] It does not detect Type 2, and a screening tool does not replace a diagnosis.[@bargiotas2019]",
      "CSF hypocretin-1 measurement is the gold-standard biomarker for Type 1 narcolepsy.[@nishino2000]",
      "In one study, a hypocretin-1 level below 110 pg/mL was diagnostic for narcolepsy, and levels above 200 pg/mL were considered normal. The measurement is most useful in people with cataplexy and when the MSLT is hard to interpret, for example in people taking psychoactive drugs.[@mignot2002]",

      "## Treatment",
      "Treatment combines medication with behavioral measures and usually has to continue for life.[@bassetti2021]",
      "Several medicines reduce sleepiness, and other medicines reduce cataplexy. The choice depends on your symptoms and is made by a specialist.[@bassetti2021]",
      "The 2021 guideline of the American Academy of Sleep Medicine gives strong recommendations for several medicines in adults with narcolepsy. According to its authors, medication should not be the only treatment; sleep hygiene, school or work accommodations and cognitive behavioral therapy belong in the plan too.[@maski2021]",
      "Scheduled naps are not right for every patient. In a randomized study, adding two short naps did not change symptoms on average; only patients who stayed profoundly sleepy despite stimulant medicines benefited from scheduled sleep. Keeping regular night sleep times did reduce perceived symptom severity.[@rogers2001] Multiple short naps have also been reported to help manage excessive daytime sleepiness in patients on medication.[@takahashi2003]",
      "Orexin receptor agonists are a newer approach aimed directly at the hypocretin deficiency. In August 2026 the FDA approved oveporexton (Orzeyful), an oral orexin receptor-2 (OX2R) agonist, for adults with Type 1 narcolepsy. It is the first medicine designed to target the loss of orexin signaling itself.[@fda2026] In a phase 2 trial, 112 adults with Type 1 narcolepsy took the medicine or a placebo for eight weeks; wakefulness, daytime sleepiness and cataplexy improved clearly compared with placebo. The most common side effects were insomnia (48%) and urinary urgency and frequency.[@dauvilliers2025]",

      "## What to do next",
      "If these symptoms sound familiar, see a neurologist or a sleep medicine specialist. Write down when your sleepiness, muscle weakness and sleep problems happen and which medicines you take, and bring the note with you.",
      "Do not start, stop or change any medicine on your own. A screening test is only a first step.",
      "This test only looks for Type 1 narcolepsy. Sleepiness has many other causes, such as sleep apnea or not getting enough sleep, and a sleep clinic can look at all of them.",
    ],
  },

  test: {
    title: "Test yourself",
    switchLabel: "Choose a test",
    progress: "Question {n} / {total}",
    prev: "← Back",
    next: "Next →",
    finish: "See result",
    tip: "Answer with keys {min}–{max}, move with the arrow keys, or swipe left and right.",
  },

  // Testler: her test kendi adı, alt başlığı, soruları, seçenekleri, sonuç mesajları ve PDF özetiyle ayrı bir blok.
  // Yeni test: config.js > TESTS'e ekle, buraya tests.<id> bloğu ekle (ARCHITECTURE.md > Yeni test ekleme).
  tests: {
    sns: {
      name: "Swiss Narcolepsy Scale (SNS)",
      subtitle: "Quick Narcolepsy Screening",
		// Bu yönerge bize aittir (ESS'inki gibi lisanslı değildir), serbestçe düzenlenebilir.
		intro: [
			"These five questions ask how often certain things happen to you.",
			"Think about how things usually are for you, and pick the answer that fits best.",
			"There are no right or wrong answers, and you need to answer every question.",
			"This is a screening tool for Type 1 narcolepsy, not a diagnosis.",
		],
      // Sorular ve seçenekler Sturzenegger ve ark. 2018, Tablo 1'den (CC BY-NC). Skorlama config.js'te; metni değiştirme.
      questions: [
        "How often are you unable to fall asleep?",
        "How often do you feel bad or not well rested in the morning?",
        "How often do you take a nap during the day?",
        "How often have you experienced weak knees/buckling of the knees during emotions like laughing, happiness, or anger?",
        "How often have you experienced sagging of the jaw during emotions like laughing, happiness, or anger?",
      ],

      scale: ["Never", "Rarely (less than once a month)", "Sometimes (1–3 times a month)", "Often (1–2 times a week)", "Almost always"],

      // Q3'ün seçenekleri farklıdır (index 2)
      scales: {
        2: ["Never", "I would like to, but cannot", "1–2 times a week", "3–5 times a week", "Almost daily"],
      },

      messages: {
        suspect: {
          title: "Your answers match a pattern seen in narcolepsy",
          body: "This is a screening result, not a diagnosis. Please book an appointment with a neurologist or sleep specialist, and bring notes on your symptoms. You're not alone.",
        },
        unlikely: {
          title: "Your answers don't match the typical pattern",
          body: "That doesn't mean nothing is going on. This scale looks only for Type 1 narcolepsy and can miss some people. If you are still very sleepy during the day, talk to a doctor, because sleepiness has many other causes.",
        },
      },

    },

    ess: {
      name: "Epworth Sleepiness Scale (ESS)",
      subtitle: "Assess your level of daytime sleepiness",

      // Yönerge ve maddeler lisanslı metindir (Mapi Research Trust, ESS_AU1.0_eng-US2). Değiştirme.
      intro: [
        "How likely are you to doze off or fall asleep in the following situations, in contrast to just feeling tired?",
        "This refers to your usual way of life recently.",
        "Even if you haven’t done some of these things recently, try to figure out how they would have affected you.",
        "It is important that you answer each item as best as you can.",
      ],

      questions: [
        "Sitting and reading",
        "Watching TV",
        "Sitting inactive in a public place (e.g., a theater or a meeting)",
        "As a passenger in a car for an hour without a break",
        "Lying down to rest in the afternoon when circumstances permit",
        "Sitting and talking to someone",
        "Sitting quietly after a lunch without alcohol",
        "In a car, while stopped for a few minutes in traffic",
      ],

      scale: ["No chance of dozing", "Slight chance of dozing", "Moderate chance of dozing", "High chance of dozing"],

      // Bant başlıkları yazarın yorum adlarıdır (ESS Scaling and Scoring v2.0). Gövde metinleri bize aittir, lisanslı değildir.
      messages: {
        lowerNormal: {
          title: "Lower normal daytime sleepiness",
          body: "Your score is in the lower part of the normal range. If you still feel unusually sleepy during the day, or have other symptoms that worry you, talk to a doctor. A score on its own does not rule anything out.",
        },
        higherNormal: {
          title: "Higher normal daytime sleepiness",
          body: "Your score is in the normal range, on the higher side. Many healthy people score here. If sleepiness gets in the way of your daily life, mention it to a doctor.",
        },
        mild: {
          title: "Mild excessive daytime sleepiness",
          body: "Your score points to mild excessive daytime sleepiness. It has many possible causes, such as not sleeping enough or sleep disorders like sleep apnea. It is worth talking to a doctor, especially if it keeps happening.",
        },
        moderate: {
          title: "Moderate excessive daytime sleepiness",
          body: "Your score points to moderate excessive daytime sleepiness. It has many possible causes, and a doctor or sleep specialist can look into them. Be careful when driving, and don't drive if you feel drowsy.",
        },
        severe: {
          title: "Severe excessive daytime sleepiness",
          body: "Your score points to severe excessive daytime sleepiness. Please see a doctor or sleep specialist soon. Don't drive or use machinery when you feel drowsy.",
        },
      },


      copyright: "ESS © MW Johns 1990-1997. Used under License",
    },
  },

  result: {
    cover: "Scratch to reveal",
    hint: "Scratch with your finger or mouse to see the result.",
    skip: "Show without scratching",
    edit: "Edit answers",
    restart: "Start over",
    score: "Score: {score} / {max}",
  },

  share: {
    button: "Share on WhatsApp",
  },

  footer: {
    role: "Designed & developed by Rengin Çelik",
    note: "This page is not a diagnostic tool. It only gives an idea of whether you should see a neurologist or sleep specialist. Your answers never leave this device and are not stored anywhere.",
    statsNote: "This site only counts visits and completed tests, anonymously. Your answers and results are never sent.",
  },
};