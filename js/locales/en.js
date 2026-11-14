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
    title: "Sources",
    cite: "Source {n}",
  },

	about: {
		lead: "Experiencing cataplexy is an odd thing, but describing it is even odder. That is exactly where a single phrase changed my life: sudden loss of muscle control.",
		p1: "I'd had problems with sleep for almost as long as I can remember. But I never imagined that the muscle control losses I'd been having for 15 years could be related to sleep. I had grown afraid of going to sleep at night. I was having sleep paralysis and hallucinations, but I didn't know what they were, and I had no words to describe them.",
		p2: "Then I looked that phrase up. I listed every other symptom I had, related or not, and researched them one by one. Where they all overlapped, I found narcolepsy type 1. I checked for other possibilities too, but sudden loss of muscle control is an almost unique sign of this disease. Finding out what was happening to me, and why, was a relief. They say knowing the name takes away half the fear.",
		p3: "I researched which specialist to see and which symptoms to describe to the doctor, had the necessary tests done, and got my diagnosis. I'm now in treatment. Treatment decisions are personal and should be made under a doctor's supervision, so I don't go into medication details on this page.",
		p4: "While researching, I came across these tests and saw that my results were in line with those of people who have this condition. Narcolepsy is not easy to spot in primary care. Its symptoms can be overlooked, it doesn't show up in general screenings, and diagnosis requires specialised tests. It struck me that even a simple questionnaire could give such an important clue.",
		p5: "I was ignoring my symptoms too. I wasn't one of the extreme examples shown in the news or in films, and in 15 years nobody I met ever said, 'this could be an illness.' So the real question is this: is the problem you're having short-lived and temporary, or has it been going on for a long time and needs to be taken seriously? I made this page so these tests can give you an idea. They don't diagnose anything, but they may help you decide whether to knock on the right door.",
		big: "I found it with a single phrase. This site exists so that someone searching for that phrase can get there faster.",
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
					when: "All day",
					title: "Excessive daytime sleepiness",
					body: "A heavy sleepiness that builds during the day even after enough sleep. Short, hard-to-resist sleep attacks can happen while talking, eating or working. A short nap often feels refreshing for a while.",
				},
				{
					when: "Strong emotions",
					title: "Cataplexy",
					body: "A sudden loss of muscle strength triggered by emotions such as laughter, surprise or excitement. The jaw may drop or the knees may give way. The person stays conscious, and it usually lasts from seconds to a couple of minutes. It does not occur in every type of narcolepsy.",
				},
				{
					when: "Sleep transitions",
					title: "Hallucinations",
					body: "Images, sounds or a feeling that someone is in the room, appearing as sleep begins or ends. The person usually realizes afterwards that they were not real, but in the moment they can be frightening.",
				},
				{
					when: "Sleep transitions",
					title: "Sleep paralysis",
					body: "Being unable to move or speak while the mind is awake. The person is conscious but cannot move. It usually lasts from a few seconds to a few minutes and passes by itself.",
				},
				{
					when: "At night",
					title: "Disrupted nighttime sleep",
					body: "Frequent awakenings and light, fragmented sleep during the night. Broken night sleep despite such strong daytime sleepiness is one of the typical features of narcolepsy.",
				},
			],
			note: "Having one of these symptoms does not mean a person has narcolepsy; sleep paralysis and hallucinations can also happen from time to time in people without it. The tests on this site do not diagnose. If symptoms affect daily life, it is worth seeing a sleep specialist.",
		},
    body: [

      "## Cause",
      "The hallmark of Type 1 narcolepsy is the loss of orexin (hypocretin) neurons in the lateral hypothalamus.[@nishino2000][@thannickal2000] The most likely explanation is an autoimmune process.[@dauvilliers2007][@bassetti2021]",
      "Genetic susceptibility: almost all people with narcolepsy with cataplexy carry the HLA-DQB1*06:02 allele.[@mignot2001]",
      "Environmental triggers: the strongest environmental risk identified so far is influenza A (H1N1), through both infection and vaccination.[@bonvalet2017]",

      "## The five symptoms",
      "Narcolepsy is described by a symptom pentad, which includes fragmented night sleep.[@dauvilliers2007]",
      "1. Excessive daytime sleepiness. Present in every patient: constant sleepiness and irresistible sleep attacks during the day.[@scammell2015]",
      "2. Cataplexy. A sudden, brief loss of muscle tone triggered by strong emotions such as laughter, excitement or anger, while you stay conscious.[@sturzenegger2004]",
      "3. Sleep paralysis. Being temporarily unable to move or speak while falling asleep or waking up.[@dauvilliers2007]",
      "4. Hypnagogic / hypnopompic hallucinations. Vivid, often frightening experiences at sleep onset or on waking.[@dauvilliers2007]",
      "5. Disrupted night sleep. Frequent movement and awakenings during the night, even though you are sleepy during the day.[@dauvilliers2007]",

      "## Types",
      "The International Classification of Sleep Disorders (3rd edition) separates two types.[@aasm2014][@sateia2014]",
      "Type 1 (NT1): cataplexy is present, or the hypocretin-1 level in cerebrospinal fluid (CSF) is low (110 pg/mL or less).",
      "Type 2 (NT2): no cataplexy, and CSF hypocretin-1 is normal or has not been measured.",

      "## How it is diagnosed",
      "A formal diagnosis needs a full clinical and laboratory work-up.[@aasm2014]",
      "Overnight polysomnography (PSG) looks at the structure of night sleep and rules out other causes, such as obstructive sleep apnea.",
      "The Multiple Sleep Latency Test (MSLT) measures how quickly you fall asleep (an average of 8 minutes or less) and whether REM sleep starts within minutes of sleep onset (two or more sleep-onset REM periods).[@aasm2014][@littner2005]",
      "The Swiss Narcolepsy Scale (SNS), the test on this site, is a short five-question screening tool for Type 1 narcolepsy, and its questions ask about trouble falling asleep, feeling unrefreshed in the morning, daytime naps, and the two signs of cataplexy: knees buckling and the jaw sagging. Several studies in different populations found that it separates Type 1 narcolepsy from other causes of sleepiness with high sensitivity and specificity.[@sturzenegger2004][@sturzenegger2018][@bargiotas2019] A Turkish version has been validated.[@demir2023] It does not detect Type 2, and a screening tool does not replace a diagnosis.[@bargiotas2019]",
      "CSF hypocretin-1 measurement is the gold-standard biomarker for Type 1 narcolepsy.[@nishino2000]",

      "## Treatment",
      "Treatment combines medication with behavioral measures and usually has to continue for life.[@bassetti2021]",
      "Scheduled daytime naps and several medicines reduce sleepiness, and other medicines reduce cataplexy. The choice depends on your symptoms and is made by a specialist.[@bassetti2021]",
      "Orexin receptor agonists are a newer approach aimed directly at the hypocretin deficiency. In August 2026 the FDA approved oveporexton (Orzeyful), an oral orexin receptor-2 (OX2R) agonist, for adults with Type 1 narcolepsy. It is the first medicine designed to target the loss of orexin signaling itself.[@fda2026]",

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