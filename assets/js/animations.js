// // START SECTION OBSERVING FADE ANIMATIONS
// !MINE FIRST CHOICE
// const allSections = document.querySelectorAll(".section");
// const sectionObserverCallback = function (entries, observe) {
//   const [entry] = entries;
//   // Gaurd Clasue
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove("section--hidden");
//   observe.unobserve(entry.target);
// };

// const sectionObserverOptions = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.15,
// };

// const sectionsObserver = new IntersectionObserver(
//   sectionObserverCallback,
//   sectionObserverOptions
// );

// allSections.forEach((sec) => {
//   sectionsObserver.observe(sec);
//   sec.classList.add("section--hidden");
// });

// // START IMAGES LAZY LODAING

// const allImgs = document.querySelectorAll(".features__img");
// const imgsObserverCallback = function (entries, observer) {
//   const [entry] = entries;
//   // GAURD CLAUSE
//   if (!entry.isIntersecting) return;
//   entry.target.src = entry.target.dataset.src;
//   observer.unobserve(entry.target);
//   entry.target.addEventListener("load", function () {
//     this.classList.remove("lazy-img");
//   });
// };

// const imgsObserverOptions = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0,
// };

// const imgsObserver = new IntersectionObserver(
//   imgsObserverCallback,
//   imgsObserverOptions
// );

// allImgs.forEach((img) => {
//   imgsObserver.observe(img);
// });

// !UNHANCED CODE
// START OBSERVING SECTIONS AND IMAGES
const allSections = document.querySelectorAll(".section");

const observerCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    // إظهار الـ section عند اقترابها من الشاشة
    entry.target.classList.remove("section--hidden");

    // الحصول على جميع الصور داخل الـ section
    const lazyImages = entry.target.querySelectorAll(
      ".features__img[data-src]"
    );

    lazyImages.forEach((img) => {
      img.src = img.dataset.src;

      // إزالة كلاس "lazy-img" عند اكتمال تحميل الصورة
      img.addEventListener("load", function () {
        img.classList.remove("lazy-img");
      });
    });

    // إيقاف مراقبة الـ section بعد ظهورها
    observer.unobserve(entry.target);
  });
};

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(
  observerCallback,
  observerOptions
);

// إعداد المراقبة على كل section وإضافة class "section--hidden"
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// !SECOND CHOICE
// // START OBSERVING SECTIONS AND IMAGES
// const allSections = document.querySelectorAll(".section");

// // إعداد المراقب
// const observerCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) return;

//     // الحصول على جميع الصور داخل الـ section
//     const lazyImages = entry.target.querySelectorAll(".features__img[data-src]");
//     let imagesLoaded = 0;

//     if (lazyImages.length === 0) {
//       // إذا لم يكن هناك صور في القسم، إظهار القسم فوراً
//       entry.target.classList.remove("section--hidden");
//       observer.unobserve(entry.target);
//     } else {
//       // تحميل كل صورة داخل القسم ومراقبة اكتمال تحميلها
//       lazyImages.forEach((img) => {
//         img.src = img.dataset.src;

//         // حدث تحميل الصورة
//         img.addEventListener("load", function () {
//           // إزالة تأثير التلاشي عن الصورة
//           img.classList.remove("lazy-img");
//           imagesLoaded++;

//           // إذا تم تحميل جميع الصور في القسم، إظهار القسم بالكامل
//           if (imagesLoaded === lazyImages.length) {
//             entry.target.classList.remove("section--hidden");
//             observer.unobserve(entry.target);
//           }
//         });
//       });
//     }
//   });
// };

// const observerOptions = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.15,
// };

// const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);

// // إضافة class "section--hidden" وإعداد المراقبة
// allSections.forEach((section) => {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
// });
