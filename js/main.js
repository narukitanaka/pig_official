////////////////////////////////////////////////////////////////////////////////////////
// Fv過ぎるとヘッダーを固定
///////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", function () {
//   const header = document.querySelector("header");
//   const fvHeight = document.querySelector(".fv").offsetHeight;

//   function handleScroll() {
//     if (window.scrollY > fvHeight) {
//       header.classList.add("fixed");
//     } else {
//       header.classList.remove("fixed");
//     }
//   }

//   window.addEventListener("scroll", handleScroll);
// });

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const fvHeight = document.querySelector(".fv").offsetHeight;

  function handleScroll() {
    if (window.innerWidth > 768) {
      if (window.scrollY > fvHeight) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    } else {
      if (window.scrollY > 50) {
        // スマホ時は画面の一番上から50px離れたら固定を付与
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    }
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll); // リサイズ時にも処理を適用
});

////////////////////////////////////////////////////////////////////////////////////////
// Swiper
///////////////////////////////////////////////////////////////////////////////////////
function initSwipers() {
  const caseSlider01 = document.querySelector(".top_pediatric-cases");
  if (caseSlider01) {
    const caseSlider01Instance = new Swiper(caseSlider01, {
      loop: true,
      speed: 1500,
      allowTouchMove: false,
      slidesPerView: 1.11,
      spaceBetween: 15,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        769: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next", // 変更
        prevEl: ".swiper-button-prev", // 変更
      },
    });
  }

  const caseSlider02 = document.querySelector(".top_adult-cases");
  if (caseSlider02) {
    const caseSlider02Instance = new Swiper(caseSlider02, {
      loop: true,
      speed: 1500,
      allowTouchMove: false,
      slidesPerView: 1.11,
      spaceBetween: 15,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        769: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next", // 変更
        prevEl: ".swiper-button-prev", // 変更
      },
    });
  }

  const infinitSlider = document.querySelector(".top_infinit-slider");
  if (infinitSlider) {
    const infinitSliderInstance = new Swiper(infinitSlider, {
      loop: true,
      speed: 8000,
      allowTouchMove: false,
      slidesPerView: 2.5,
      spaceBetween: 15,
      freeMode: {
        enabled: true,
        momentum: false,
        sticky: true,
      },
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        769: {
          slidesPerView: 4.5,
          spaceBetween: 30,
        },
      },
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initSwipers();
});

///////////////////////////////////////////
//ハンバーガーメニュー
//////////////////////////////////////////
$(".hambager").on("click", function () {
  navOpen();
});
let navFlg = false;
function navOpen() {
  if (!navFlg) {
    $(".hamberger-wrap").addClass("is-ham-open");
    $(".drawer-menu").addClass("is-drawermenu-open");
    $("header").addClass("is-drawermenu-header");
    navFlg = true;
  } else {
    $(".hamberger-wrap").removeClass("is-ham-open");
    $(".drawer-menu").removeClass("is-drawermenu-open");
    $("header").removeClass("is-drawermenu-header");
    navFlg = false;
  }
}

///////////////////////////////////////////
//ドロワーメニュー アコーディオン
///////////////////////////////////////////
$(".drawer-nav .child-menu").hide();
$(".drawer-nav .parent-menu").on("click", function (e) {
  if ($(e.target).is("a")) return;
  const $targetMenu = $(this).children(".child-menu");
  if ($targetMenu.is(":visible")) {
    $targetMenu.slideUp("400");
    $(this).removeClass("open");
  } else {
    $(".drawer-nav .child-menu").slideUp("400");
    $(".drawer-nav li").removeClass("open");
    $targetMenu.slideDown("400");
    $(this).addClass("open");
  }
});

////////////////////////////////////////////////////////////////////////////////////////
// GSAP アニメーション
///////////////////////////////////////////////////////////////////////////////////////
// GSAPフェードイン
const textElements = document.querySelectorAll(".fadeIn");
if (textElements.length > 0) {
  textElements.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element, // 各要素をトリガーに
        start: "top 60%",
        once: true,
      },
    });
  });
}
