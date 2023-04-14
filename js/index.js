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
// 스와이퍼2
var swiper2 = new Swiper(".mySwiper2", {
  autoplay: {
    delay: 4000,
  },
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// AOS
// AOS.init();

$(document).ready(function () {
  $(".sub_gnb").hide();
  let navBtn = document.getElementsByClassName("on");
  console.log(navBtn);

  function navBtnVal() {
    console.log(1);
    let navBtn = $(this).next("ul").slideToggle("visible");
    // $(this).find("li").toggleClass("visible");
  }

  for (let i = 0; i < navBtn.length; i++) {
    // console.log(navBtn[i]);
    $(navBtn[i]).on("mouseover", navBtnVal);
    $(navBtn[i]).on("mouseout", navBtnVal);
  }

  // 아코디언
  //   $(".accordion .content").eq(0).show();
  $(".accordion .content").hide();
  $(".accordion .q-box").click(function (e) {
    e.preventDefault();
    console.log(1);
    // $(this).animate(
    //   {
    //     rotate: "180deg",
    //   },
    //   100
    // );
    $(this).siblings(".accordion .content").slideUp();
    $(this).next().stop().slideToggle(250);
    $(this).toggleClass("active");
    $(this).siblings(".accordion .content").removeClass("active");
  });
});
