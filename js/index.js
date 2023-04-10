// 스와이퍼
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    // 화면의 넓이가 320px 이상일 때
    300: {
      spaceBetween: 20,
    },
    // 화면의 넓이가 640px 이상일 때
    670: {
      spaceBetween: 40,
    },
    900: {
      spaceBetween: 40,
    },
  },
});

// AOS
AOS.init();
