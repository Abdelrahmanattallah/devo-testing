// //

// // Array of Background Images for the Slider
// const images = [
//   "assets/layout/header/images/hero-section-min.png",
//   "assets/layout/header/images/keyboard-banner-testpng.png",
//   "assets/layout/header/images/chairs-banner.png",
//   "assets/layout/header/images/keyboard-banner-testpng.png",
//   "assets/layout/header/images/blog-section.png",
// ];

// // Elements
// const heroSection = document.querySelector("header");
// const btnLeft = document.querySelector(".header__control--left");
// const btnRight = document.querySelector(".header__control--right");
// const dotContainer = document.querySelector(".slider__bullets");

// let curSlide = 0;
// const maxSlide = images.length;
// const intervalTime = 5000; // زمن الانتقال التلقائي (بالملي ثانية)
// let slideInterval;

// // Function to Change Background Image
// const goToSlide = function (slide) {
//   heroSection.style.backgroundImage = `url(${images[slide]})`;
//   activateDot(slide);
// };

// // Create Dots Based on Number of Images
// const createDots = function () {
//   dotContainer.innerHTML = ""; // Clear existing dots
//   images.forEach((_, i) => {
//     dotContainer.insertAdjacentHTML(
//       "beforeend",
//       `<li class="dots__dot" data-slide="${i}"></li>`
//     );
//   });
// };

// // Activate Current Dot
// const activateDot = function (slide) {
//   document.querySelectorAll(".slider__bullets li").forEach((dot) => {
//     dot.classList.remove("active");
//   });
//   document
//     .querySelector(`.slider__bullets li[data-slide="${slide}"]`)
//     .classList.add("active");
// };

// // Go to Next Slide
// const nextSlide = function () {
//   curSlide = (curSlide + 1) % maxSlide;
//   goToSlide(curSlide);
// };

// // Go to Previous Slide
// const prevSlide = function () {
//   curSlide = (curSlide - 1 + maxSlide) % maxSlide;
//   goToSlide(curSlide);
// };

// // Auto Slide Function
// const startAutoSlide = function () {
//   slideInterval = setInterval(nextSlide, intervalTime);
// };

// // Stop Auto Slide Function
// const stopAutoSlide = function () {
//   clearInterval(slideInterval);
// };

// // Initialization Function
// const init = function () {
//   createDots();
//   goToSlide(0);
//   startAutoSlide(); // Start auto-sliding on initialization
// };
// init();

// // Event Handlers
// btnRight.addEventListener("click", function () {
//   stopAutoSlide();
//   nextSlide();
//   startAutoSlide(); // Restart auto-slide after manual navigation
// });

// btnLeft.addEventListener("click", function () {
//   stopAutoSlide();
//   prevSlide();
//   startAutoSlide(); // Restart auto-slide after manual navigation
// });

// // Dot Navigation
// dotContainer.addEventListener("click", function (e) {
//   if (e.target.tagName === "LI") {
//     const { slide } = e.target.dataset;
//     stopAutoSlide();
//     goToSlide(Number(slide));
//     startAutoSlide(); // Restart auto-slide after manual navigation
//   }
// });
// Array of Background Images for the Slider
const images = [
  "assets/layout/header/images/hero-section-min.png",
  "assets/layout/header/images/keyboard-banner-testpng.png",
  "assets/layout/header/images/chairs-banner.png",
  "assets/layout/header/images/keyboard-banner-testpng.png",
  "assets/layout/header/images/blog-section.png",
];

// Elements
const heroSection = document.querySelector("header");
const btnLeft = document.querySelector(".header__control--left");
const btnRight = document.querySelector(".header__control--right");
const dotContainer = document.querySelector(".slider__bullets");

let curSlide = 0;
const maxSlide = images.length;
const intervalTime = 5000; // زمن الانتقال التلقائي (بالملي ثانية)
let slideInterval;

// Function to Change Background Image
const goToSlide = function (slide) {
  heroSection.style.backgroundImage = `url(${images[slide]})`;
  activateDot(slide);
};

// Create Dots Based on Number of Images
const createDots = function () {
  dotContainer.innerHTML = ""; // Clear existing dots
  images.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<li class="dots__dot" data-slide="${i}"></li>`
    );
  });
};

// Activate Current Dot
const activateDot = function (slide) {
  document.querySelectorAll(".slider__bullets li").forEach((dot) => {
    dot.classList.remove("active");
  });
  document
    .querySelector(`.slider__bullets li[data-slide="${slide}"]`)
    .classList.add("active");
};

// Go to Next Slide
const nextSlide = function () {
  curSlide = (curSlide + 1) % maxSlide;
  goToSlide(curSlide);
};

// Go to Previous Slide
const prevSlide = function () {
  curSlide = (curSlide - 1 + maxSlide) % maxSlide;
  goToSlide(curSlide);
};

// Auto Slide Function
const startAutoSlide = function () {
  slideInterval = setInterval(nextSlide, intervalTime);
};

// Stop Auto Slide Function
const stopAutoSlide = function () {
  clearInterval(slideInterval);
};

// Function to check the language and adjust slider behavior
const adjustSliderForLanguage = function (language) {
  if (language === "ar") {
    // Set static background image for Arabic and stop slider
    heroSection.style.backgroundImage = `url("assets/layout/header/images/hero-flipped-min.png")`;
    stopAutoSlide(); // Stop the slider
    dotContainer.style.display = "none"; // Hide dots if slider is inactive
  } else {
    // Reset the slider for English language
    dotContainer.style.display = "flex"; // Show dots
    createDots(); // Create dots based on images
    goToSlide(0); // Start from the first slide
    startAutoSlide(); // Start auto-sliding
  }
};

// Initialization Function
const init = function () {
  const savedLanguage = localStorage.getItem("lang") || "en";
  adjustSliderForLanguage(savedLanguage); // Adjust slider based on initial language
};
init();

// Event Handlers for Navigation
btnRight.addEventListener("click", function () {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

btnLeft.addEventListener("click", function () {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

// Dot Navigation
dotContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    const { slide } = e.target.dataset;
    stopAutoSlide();
    goToSlide(Number(slide));
    startAutoSlide();
  }
});

// Update slider behavior when language changes
const switchLang = document.querySelector("#switchLang");
switchLang.addEventListener("change", function (e) {
  const language = e.target.value;
  localStorage.setItem("lang", language);
  adjustSliderForLanguage(language); // Adjust slider when language changes
});
