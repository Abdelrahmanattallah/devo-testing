const icon1 = ``;

const translate = {
  en: {
    // START HEADER AND NAV
    home: "home",
    products: "products",
    vendors: "vendors",
    support: "support",
    about: "about",
    blog: "blog",
    english: "English",
    arabic: "Arabic",
    // START DROP DOWN PART
    monitorsDrop: "monitors",
    chairsDrop: "chairs",
    gamingMouseDrop: "gaming mouse",
    mousepadDrop: "mousepad",
    gamingGlassesDrop: "gamming glasses",
    accessoriesDrop: "accessories",
    warrantyDrop: "warranty",
    contactDrop: "contact",
    termsDrop: "terms",
    faqsDrop: "FAQs",
    pressDrop: "press",
    // HEADER INTRO
    headerIntro: "UPGRADE YOUR",
    headerIntroSpan: "GAMING EXPERIENCE",
    headerIntroParagraph:
      "Enjoy immersive gaming experience with the best gaming monitors.",

    headerIntroExplore: `EXPLORE DEVO `,
    // SECTION EXPLORE DEVO HOME
    homeSectionHeading1: "explore devo",
    devoHolder1: "monitor",
    devoHolder2: "chairs",
    devoHolder3: "gaming glasses",
    devoHolder4: "gaming mouse",
    devoHolder5: "mousepad",
    devoHolder6: "accessories",
    // START SECTION BANNERS HOME
    homeBannerHeading1: "Unleash Comfort.",
    homeBannerSpan: "Elevate Style",
    homeBannerParagraph: `Experience the perfect fusion of luxury and performance with Devo’s ergonomic gaming chairs, designed for those who demand the best.`,
    // START SECTION WHERE TO BUY
    homeSectionHeading2: "where to buy",
    // START SECTION BLOG
    homeSectionHeading3: "blog",
    // START FOOTER
    footerColHeader1: "products",
    footerColHeader2: "company",
    footerColHeader3: "Subscribe to our Newsletter",
    footerMonitor: "monitor",
    footerChairs: "chairs",
    footerMousepad: "mousepad",
    footerAccessories: "accessories",
    footerGamingMouse: "gaming mouse",
    footerGamingGlasses: "gaming glasses",
    footerVendors: "vendors",
    footerContact: "contact us",
    footerAbout: "about",
    footerDevo: "devo",
    footerMedia: "media room",
    footerCol3Paragraph: `Stay up to date with news and promotions by signing up for our newsletter`,
    footerCopyRight: "Copyright © 2024",
  },
  ar: {
    // START HEADER AND NAV
    home: "الرئيسية",
    products: "المنتجات",
    vendors: "الموزعين",
    support: "الدعم",
    about: "من نحن",
    blog: "المدونات",
    english: "الإنجليزية",
    arabic: "العربية",
    // START DROP DOWN PART
    monitorsDrop: "شاشات",
    chairsDrop: "كراسي",
    gamingMouseDrop: "ماوس الألعاب",
    mousepadDrop: "لوحة الماوس",
    gamingGlassesDrop: "نظارات الألعاب",
    accessoriesDrop: "إكسسوارات",
    warrantyDrop: "الضمان",
    contactDrop: "اتصل بنا",
    termsDrop: "الشروط",
    faqsDrop: "الأسئلة الشائعة",
    pressDrop: "الصحافة",
    // HEADER INTRO
    headerIntro: "ارتقِ بتجربة",
    headerIntroSpan: "الألعاب الخاصة بك",
    headerIntroParagraph: "استمتع بتجربة ألعاب غامرة مع أفضل شاشات الألعاب.",
    headerIntroExplore: `استكشف ديفو
        
    `,
    // SECTION EXPLORE DEVO HOME
    homeSectionHeading1: " استكشف ديفو",
    devoHolder1: "شاشة",
    devoHolder2: "كراسي",
    devoHolder3: "نظارات الألعاب",
    devoHolder4: "ماوس الألعاب",
    devoHolder5: "لوحة الماوس",
    devoHolder6: "إكسسوارات",
    // START SECTION BANNERS HOME
    homeBannerHeading1: "استمتع بالراحة",
    homeBannerSpan: "ارتقِ بالأناقة.",
    homeBannerParagraph:
      "استمتع بالمزيج المثالي من الفخامة والأداء مع كراسي ديفو المريحة، المصممة لأولئك الذين يبحثون عن الأفضل.",
    // START SECTION WHERE TO BUY
    homeSectionHeading2: " من أين تشتري",
    // START SECTION BLOG
    homeSectionHeading3: "المدونات",
    // START FOOTER
    footerColHeader1: "المنتجات",
    footerColHeader2: "الشركة",
    footerColHeader3: "اشترك في نشرتنا الإخبارية",
    footerMonitor: "شاشة",
    footerChairs: "كراسي",
    footerMousepad: "لوحة الماوس",
    footerAccessories: "إكسسوارات",
    footerGamingMouse: "ماوس الألعاب",
    footerGamingGlasses: "نظارات الألعاب",
    footerVendors: "الموزعين",
    footerContact: "اتصل بنا",
    footerAbout: "من نحن",
    footerDevo: "ديفو",
    footerMedia: "غرفة الإعلام",
    footerCol3Paragraph:
      "ابقَ على اطلاع بأحدث الأخبار والعروض من خلال الاشتراك في نشرتنا الإخبارية.",
    footerCopyRight: "حقوق النشر © 2024",
  },
};

const switchLang = document.querySelector("#switchLang");

document.addEventListener("DOMContentLoaded", () => {
  // الحصول على اللغة المحفوظة أو تعيين "en" كافتراضية
  const savedLanguage = localStorage.getItem("lang") || "en";
  renderTranslation(savedLanguage);
  switchLang.value = savedLanguage; // تعيين اللغة المختارة في select
});

switchLang.addEventListener("change", function (e) {
  const language = e.target.value;
  renderTranslation(language);
  localStorage.setItem("lang", language); // حفظ اللغة المختارة
});

// وظيفة لتطبيق الترجمة على جميع العناصر التي تحتوي على [data-lang]
const renderTranslation = function (language) {
  const allItems = document.querySelectorAll("[data-lang]");
  const header = document.querySelector("header");
  const listAfter = document.querySelector(".list__wall");

  allItems.forEach((item) => {
    try {
      // تطبيق الترجمة بناءً على القيمة في كائن translate
      item.textContent = translate[language][item.dataset.lang];
    } catch (error) {
      console.warn(`Translation for ${item.dataset.lang} is missing.`);
    }
  });

  // إعدادات النصوص والتنسيق حسب اللغة
  if (language === "ar") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
    header.classList.add("left");
    listAfter.style.right = "100%";
  } else {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
    header.classList.remove("left");
    listAfter.style.right = "0";
  }
};
