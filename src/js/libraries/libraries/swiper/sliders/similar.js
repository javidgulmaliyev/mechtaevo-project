import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

/** @type {HTMLDivElement} */
const similarSlider = document.querySelector(".similar-slider");

if (similarSlider) {
  const swiper = new Swiper(similarSlider, {
    modules: [Keyboard,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    breakpoints: {
      "768.1": {
        slidesPerView: 1.5,
        spaceBetween: 25,
      },
      "1024.1": {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      "1300.1": {
        slidesPerView: 2.5,
        spaceBetween: 25,
      },
      "1700.1": {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      "1920.1": {
        slidesPerView: 3,
        spaceBetween: 75,
      },
    },
    slidesPerView: 1,
    spaceBetween: 25,
    rewind: true,
  });
}
