 // core version + autoplay + navigation modules
import Swiper, { Autoplay, Navigation } from "swiper";

// configure Swiper to use module
  Swiper.use([Autoplay, Navigation]);

const slider = () => {
  // init Swiper
  /* const swiper = */ new Swiper(".slider", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
  });
};

export default slider;
