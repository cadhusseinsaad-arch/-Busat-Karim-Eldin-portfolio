const langButtons = document.querySelectorAll('.lang-btn');
const i18nElements = document.querySelectorAll('[data-i18n]');

const translations = {
    de: {
        lang: 'de',
        dir: 'ltr',
        eyebrow: 'Historisches Portfolio',
        heading: 'Deutschland: Geschichte, Kultur und Erfolge',
        subheading: 'Entdecke wichtige Stationen der deutschen Geschichte in einem eleganten Design, das zur deutschen Gesellschaft passt.',
        introTitle: 'Warum Deutschland?',
        introText: 'Deutschland besitzt ein reiches historisches Erbe und einen starken kulturellen und wirtschaftlichen Einfluss in Europa und weltweit. Diese Seite präsentiert die wichtigsten Punkte in modernem Stil.',
        timelineTitle: 'Wichtige historische Meilensteine',
        milestone1: 'Ende des Heiligen Römischen Reiches und Beginn einer neuen Epoche deutscher Staatenbildung.',
        milestone2: 'Gründung des Deutschen Kaiserreichs, Beginn einer starken industriellen und kulturellen Phase.',
        milestone3: 'Gründung der Bundesrepublik Deutschland und der DDR, später Wiedervereinigung 1990.',
        todayTitle: 'Heute',
        milestone4: 'Deutschland bleibt ein führendes Land in Technologie, Kultur und demokratischer Entwicklung in Europa.',
        valuesTitle: 'Deutsche Werte',
        valuesText: 'Systematik, Rechtsstaatlichkeit, Innovation und kulturelle Vielfalt sind zentrale Werte, die den deutschen Geist widerspiegeln.',
        value1Title: 'Professionalität',
        value1Text: 'Organisiertes Arbeiten und Qualitätsbewusstsein in allen Bereichen.',
        value2Title: 'Nachhaltigkeit',
        value2Text: 'Umweltbewusstsein und Entwicklung langfristiger Lösungen.',
        value3Title: 'Vielfalt',
        value3Text: 'Zusammenleben verschiedener Kulturen und Respekt vor Traditionen.',
        calloutTitle: 'Kurzüberblick',
        calloutText: 'Diese Website wurde so gestaltet, dass sie eine attraktive, benutzerfreundliche Präsentation bietet, die sowohl den professionellen als auch den kulturellen Stil berücksichtigt.',
        footerText: '© 2026 | Portfolio zur großen Geschichte Deutschlands'
    },
    ar: {
        lang: 'ar',
        dir: 'rtl',
        eyebrow: 'بورتفوليو تاريخي',
        heading: 'ألمانيا: التاريخ، الثقافة، والإنجازات',
        subheading: 'اكتشف أهم المحطات في تاريخ ألمانيا بتصميم أنيق يناسب المجتمع الألماني.',
        introTitle: 'لماذا ألمانيا؟',
        introText: 'تمتلك ألمانيا إرثًا تاريخيًا غنيًا وتأثيرًا اقتصاديًا وثقافيًا قويًا في أوروبا والعالم. يعرض هذا الموقع أهم النقاط بأسلوب عصري.',
        timelineTitle: 'محطات تاريخية بارزة',
        milestone1: 'نهاية الإمبراطورية الرومانية المقدسة وبداية عصر جديد من تشكيل الدول الألمانية.',
        milestone2: 'توحد الإمبراطورية الألمانية وبداية فترة قوية صناعيًا وثقافيًا.',
        milestone3: 'تأسيس جمهورية ألمانيا الاتحادية وجمهورية ألمانيا الديمقراطية، ثم الوحدة في 1990.',
        todayTitle: 'اليوم',
        milestone4: 'تواصل ألمانيا دورها القيادي في التكنولوجيا والثقافة والديمقراطية في أوروبا.',
        valuesTitle: 'القيم الألمانية',
        valuesText: 'المنهجية، احترام القانون، الابتكار والتنوع الثقافي هي قيم تعكس الروح الألمانية.',
        value1Title: 'الاحترافية',
        value1Text: 'العمل المنظم والالتزام بالجودة في جميع المجالات.',
        value2Title: 'الاستدامة',
        value2Text: 'الاهتمام بالبيئة وتطوير حلول طويلة الأمد.',
        value3Title: 'التنوع',
        value3Text: 'التعايش بين ثقافات مختلفة واحترام التقاليد.',
        calloutTitle: 'عرض موجز',
        calloutText: 'تم تصميم هذا الموقع ليكون واجهة جذابة وسهلة الاستخدام، تعكس الطابع الراقي والمهني.',
        footerText: '© 2026 | بورتفوليو عن التاريخ العظيم لألمانيا'
    },
    en: {
        lang: 'en',
        dir: 'ltr',
        eyebrow: 'Historical Portfolio',
        heading: 'Germany: History, Culture, and Achievements',
        subheading: 'Explore key moments in German history with an elegant design that suits the German community.',
        introTitle: 'Why Germany?',
        introText: 'Germany has a rich historical legacy and a strong cultural and economic influence across Europe and the world. This site presents the most important points in a modern style.',
        timelineTitle: 'Key Historical Milestones',
        milestone1: 'End of the Holy Roman Empire and the start of a new era of German state formation.',
        milestone2: 'Creation of the German Empire, beginning a powerful industrial and cultural phase.',
        milestone3: 'Founding of the Federal Republic of Germany and the GDR, later reunification in 1990.',
        todayTitle: 'Today',
        milestone4: 'Germany continues to lead in technology, culture, and democratic development in Europe.',
        valuesTitle: 'German Values',
        valuesText: 'Systematic thinking, rule of law, innovation, and cultural diversity are central values reflecting the German spirit.',
        value1Title: 'Professionalism',
        value1Text: 'Organized work and commitment to quality in all areas.',
        value2Title: 'Sustainability',
        value2Text: 'Environmental awareness and the development of long-term solutions.',
        value3Title: 'Diversity',
        value3Text: 'Living together with different cultures and respecting traditions.',
        calloutTitle: 'Overview',
        calloutText: 'This website is designed to offer an attractive, user-friendly presentation that respects both professional and cultural style.',
        footerText: '© 2026 | Portfolio about Germany’s great history'
    }
};

function setLanguage(lang) {
    const translation = translations[lang] || translations.de;
    document.documentElement.lang = translation.lang;
    document.body.dir = translation.dir;

    i18nElements.forEach(el => {
        const key = el.dataset.i18n;
        if (translation[key]) {
            el.textContent = translation[key];
        }
    });

    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        setLanguage(button.dataset.lang);
    });
});

setLanguage('de');
