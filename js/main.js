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
      slidesPerView: 3,
      spaceBetween: 24,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
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
      slidesPerView: 3,
      spaceBetween: 24,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
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
      slidesPerView: 4.5,
      spaceBetween: 30,
      freeMode: {
        enabled: true,
        momentum: false,
        sticky: true,
      },
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
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
// $(".hambager").on("click", function () {
//   navOpen();
// });
// let navFlg = false;
// function navOpen() {
//   if (!navFlg) {
//     $(".hamberger-wrap").addClass("is-ham-open");
//     $(".drawer-menu").addClass("is-drawermenu-open");
//     $("header").addClass("is-drawermenu-header");
//     navFlg = true;
//   } else {
//     $(".hamberger-wrap").removeClass("is-ham-open");
//     $(".drawer-menu").removeClass("is-drawermenu-open");
//     $("header").removeClass("is-drawermenu-header");
//     navFlg = false;
//   }
// }
// // ページ内リンクをクリックしたときにメニューを閉じる
// $('.drawer-menu a[href^="#"]').on("click", function () {
//   if (navFlg) {
//     navOpen(); // メニューが開いている場合は閉じる
//   }
// });

///////////////////////////////////////////
//サイドバー アコーディオン
///////////////////////////////////////////
// $(".sidebar-accordion nav").hide(); // 初期状態で非表示
// $(".sidebar-accordion p").on("click", function (e) {
//   $(this).next("nav").slideToggle("fast");
//   if ($(this).hasClass("open")) {
//     $(this).removeClass("open");
//   } else {
//     $(this).addClass("open");
//   }
// });

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
