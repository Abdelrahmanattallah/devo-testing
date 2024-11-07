// START IMPORTING FILES
import "./animations.js";
import "./translate.js";

const displayImg = document.querySelector("#displayImg");
const allImgs = document.querySelectorAll("[data-img]");

allImgs.forEach((item) => {
  item.addEventListener("mouseenter", function (e) {
    const imgSrc = e.currentTarget.dataset.img;
    displayImg.src = imgSrc;
  });
  item.addEventListener("mouseleave", function (e) {
    displayImg.src = displayImg.dataset.src;
  });
});
