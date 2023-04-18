// 스와이퍼
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
  },
});
// 스와이퍼 2
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
  breakpoints: {
    // 화면의 넓이가 300px 이상일 때
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // 화면의 넓이가 600px 이상일 때
    600: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
// 스와이퍼 3 (모바일용)
var swiper = new Swiper(".mySwiper3", {
  autoplay: {
    delay: 3000,
  },
});

// 햄버거 메뉴
const button = () => {
  const burger = document.querySelector(".burger");
  const burger2 = document.querySelector(".burger-menu");
  const text = document.querySelector(".menu_wrap");

  burger.addEventListener("click", () => {
    // 클릭이벤트
    burger.classList.toggle("toggle"); //toggle class가 있으면 제거, 없으면 추가
    console.log(burger2.style.display);
    if (burger2.style.display == "block") {
      burger2.style.display = "none";
      text.style.color = "white";
    } else {
      burger2.style.display = "block";
    }
  });
};
button();

$(document).ready(function () {
  // gnb 메뉴
  var gnb = ".gnb";
  var main = ".mainNav";
  var sub = ".subNav";
  var bg = ".subBg";

  $(gnb).hover(
    function () {
      $(sub + ", " + bg)
        .stop()
        .slideDown("fast");
      $(main).removeClass("active");
    },
    function () {
      $(sub + ", " + bg)
        .stop()
        .slideUp("fast");
      $(main).removeClass("active");
    }
  );

  $(main)
    .first()
    .focus(function () {
      $(gnb).trigger("mouseenter");
      $(this).addClass("active");
    });

  $(main).focus(function () {
    $(main).removeClass("active");
    $(this).addClass("active");
  });

  $(main)
    .first()
    .keydown(function (e) {
      if (e.keyCode == 9) {
        if (e.shithKey) {
          $(gnb).trigger("mouseleave");
          $(this).removeClass("active");
        }
      }
    });

  $(sub)
    .last()
    .find("li:last a")
    .keydown(function (e) {
      if (e.keyCode == 9) {
        if (!e.shiftKey) {
          $(gnb).trigger("mouseleave");
          $(this).removeClass("active");
        }
      }
    });
  $(sub)
    .find("li:last a")
    .focus(function () {
      $(main).removeClass("active");
      $(this).parents(sub).prev().addClass("active");
    });

  // $(".sub_gnb").hide();
  // let navBtn = document.getElementsByClassName("on");
  // console.log(navBtn);

  // function navBtnVal() {
  //   console.log(1);
  //   $(this).next("ul").slideToggle("visible");
  // }

  // for (let i = 0; i < navBtn.length; i++) {
  //   // console.log(navBtn[i]);
  //   $(navBtn[i]).on("mouseover", navBtnVal);
  //   $(navBtn[i]).on("mouseout", navBtnVal);
  // }

  // gnb 아코디언
  $(".burger-menu .menu_wrap .subgnb").hide();
  $(".gnbNav").click(function (e) {
    e.preventDefault();
    console.log(1);
    if ($(this).next().is(":visible")) {
      $(this).next().stop().slideUp(250);
      $(this).removeClass("active");
    } else {
      $(this).siblings(".gnbNav .subgnb").stop().slideUp();
      $(this).siblings(".gnbNav").removeClass("active");
      $(this).next().stop().slideDown(250);
      $(this).addClass("active");
    }
  });

  // q&a 아코디언
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
