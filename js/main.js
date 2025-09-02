////////////////////////////////////////////////////////////////////////////////////////
// Swiper
///////////////////////////////////////////////////////////////////////////////////////
function initSwipers() {
  // const caseSlider01 = document.querySelector(".top_pediatric-cases");
  // if (caseSlider01) {
  //   const caseSlider01Instance = new Swiper(caseSlider01, {
  //     loop: true,
  //     speed: 1500,
  //     allowTouchMove: false,
  //     slidesPerView: 1.11,
  //     spaceBetween: 15,
  //     autoplay: {
  //       delay: 5000,
  //       disableOnInteraction: false,
  //     },
  //     breakpoints: {
  //       769: {
  //         slidesPerView: 3,
  //         spaceBetween: 24,
  //       },
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next", // 変更
  //       prevEl: ".swiper-button-prev", // 変更
  //     },
  //   });
  // }
  // const infinitSlider = document.querySelector(".top_infinit-slider");
  // if (infinitSlider) {
  //   const infinitSliderInstance = new Swiper(infinitSlider, {
  //     loop: true,
  //     speed: 8000,
  //     allowTouchMove: false,
  //     slidesPerView: 2.5,
  //     spaceBetween: 15,
  //     freeMode: {
  //       enabled: true,
  //       momentum: false,
  //       sticky: true,
  //     },
  //     autoplay: {
  //       delay: 0,
  //       disableOnInteraction: false,
  //     },
  //     breakpoints: {
  //       769: {
  //         slidesPerView: 4.5,
  //         spaceBetween: 30,
  //       },
  //     },
  //   });
  // }
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
//ヘッダーのinstaボタン
//////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn-insta");
  const instaWrap = document.querySelector(".insta-wrap");
  // ボタンをクリックしたら表示切替
  btn.addEventListener("click", function (e) {
    e.stopPropagation(); // ボタンクリックが外側判定されないようにする
    instaWrap.classList.toggle("active");
  });
  // insta-wrap 内クリック時は閉じないようにする
  instaWrap.addEventListener("click", function (e) {
    e.stopPropagation();
  });
  // ドキュメント全体クリック時に閉じる
  document.addEventListener("click", function () {
    if (instaWrap.classList.contains("active")) {
      instaWrap.classList.remove("active");
    }
  });
});

///////////////////////////////////////////
//ドロワーメニュー インスタ アコーディオン
///////////////////////////////////////////
$(".accordion-content").hide();
$(".insta_accordion-trigger").on("click", function (e) {
  e.preventDefault(); // a要素に変える場合の保険
  const $btn = $(this);
  const $panel = $btn.next(".accordion-content"); // 兄弟を取得
  $btn.toggleClass("open");
  $panel.stop(true, true).slideToggle("fast");
});

///////////////////////////////////////////
//無限スライダ-
///////////////////////////////////////////
const track = document.querySelector(".slider-track");
if (track) {
  track.innerHTML += track.innerHTML;
}

////////////////////////////////////////////////////////////////////////////////////////
// GSAP アニメーション
///////////////////////////////////////////////////////////////////////////////////////
//フェードイン
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

//さりげないパララックス
const parallaxElements = document.querySelectorAll(".parallax");
if (parallaxElements.length > 0) {
  parallaxElements.forEach((element) => {
    let yValue = 150;
    element.classList.forEach((cls) => {
      if (/^y-?\d+$/.test(cls)) {
        yValue = parseInt(cls.replace("y", ""), 10);
      }
    });
    gsap.fromTo(
      element,
      { y: yValue },
      {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
}
//さりげないパララックス（背景画像）
const parallaxBgElements = document.querySelectorAll(".parallax-bg");
if (parallaxBgElements.length > 0) {
  parallaxBgElements.forEach((element) => {
    let yValue = 20;
    element.classList.forEach((cls) => {
      if (/^y-?\d+$/.test(cls)) {
        yValue = parseInt(cls.replace("y", ""), 10);
      }
    });
    gsap.fromTo(
      element,
      { backgroundPosition: `center ${50 + yValue}%` },
      {
        backgroundPosition: `center ${50 - yValue}%`,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
}

//スクロールで横スライド_about_value
const aboutValueSection = document.querySelector(".pin-wrap");
if (aboutValueSection) {
  const rowScroll = aboutValueSection.querySelector(".row-scroll");
  gsap.to(rowScroll, {
    x: () =>
      -(rowScroll.scrollWidth - document.documentElement.clientWidth) + "px",
    ease: "none",
    scrollTrigger: {
      trigger: aboutValueSection,
      start: "top top",
      end: () =>
        "+=" + (rowScroll.scrollWidth - document.documentElement.clientWidth),
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
}

//スクロールトリガーで.about_visionのトップが画面ボトムと重なったら、.circle要素がscale(0.2)から(1)になる
const aboutVisionSection = document.querySelector(".about_vision .content");
if (aboutVisionSection) {
  const circleElement = aboutVisionSection.querySelector(".circle");
  gsap.fromTo(
    circleElement,
    { scale: 0 },
    {
      scale: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: aboutVisionSection,
        start: "top 50%",
        end: "top top",
        scrub: true,
        // markers: true,
      },
    }
  );
}
