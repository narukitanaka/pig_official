////////////////////////////////////////////////////////////////////////////////////////
// Swiper
///////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  // スマホ判定
  function isMobile() {
    return window.innerWidth <= 750;
  }
  let swiper;
  function initSwiper() {
    if (isMobile() && !swiper) {
      swiper = new Swiper(".ourbrand-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          init: function () {
            updatePagination();
          },
          slideChange: function () {
            updatePagination();
          },
        },
      });
    } else if (!isMobile() && swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }
  function updatePagination() {
    if (swiper) {
      const currentSlide = document.querySelector(".current-slide");
      const current = (swiper.activeIndex + 1).toString().padStart(2, "0");
      currentSlide.textContent = current;
    }
  }
  initSwiper();
  window.addEventListener("resize", initSwiper);
});

////////////////////////////////////////////////////////////////////////////////////////
//Swiper;
////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const pad2 = (n) => String(n).padStart(2, "0");

  /**
   * 各スライダーの数字付きページネーションを初期化
   * @param {object} cfg
   *  - container: スワイパー本体セレクタ
   *  - next / prev: ナビゲーションボタンのセレクタ
   *  - pagination: 数字表示の親（この中に .current-slide / .total-slides がある想定）
   */
  const makeNumberedSwiper = ({ container, next, prev, pagination }) => {
    const root = document.querySelector(container);
    const pag = document.querySelector(pagination);
    if (!root || !pag) return null;

    const currentEl = pag.querySelector(".current-slide");
    const totalEl = pag.querySelector(".total-slides");

    // 合計スライド数（loopを考慮して duplicate を除外）
    const count = root.querySelectorAll(
      ".swiper-slide:not(.swiper-slide-duplicate)"
    ).length;
    if (totalEl) totalEl.textContent = pad2(count);

    const instance = new Swiper(root, {
      slidesPerView: 1,
      spaceBetween: 20,
      // 必要なら breakpoints を追加してOK
      // breakpoints: { 751: { slidesPerView: 1, spaceBetween: 24 } },
      navigation: { nextEl: next, prevEl: prev },
      // loop: true, // 使う場合はコメント解除。currentはrealIndexで更新されます
      on: {
        init() {
          const idx = (this.realIndex ?? this.activeIndex) + 1;
          if (currentEl) currentEl.textContent = pad2(idx);
        },
        slideChange() {
          const idx = (this.realIndex ?? this.activeIndex) + 1;
          if (currentEl) currentEl.textContent = pad2(idx);
        },
      },
    });

    return instance;
  };

  // 3つのスライダーを初期化（クラス名を揃えて使ってください）
  const buyingSwiper = makeNumberedSwiper({
    container: ".buying-swiper",
    next: ".buying-swiper-button-next",
    prev: ".buying-swiper-button-prev",
    pagination: ".buying-swiper_pagenation",
  });

  const repairSwiper = makeNumberedSwiper({
    container: ".repair-swiper",
    next: ".repair-swiper-button-next",
    prev: ".repair-swiper-button-prev",
    pagination: ".repair-swiper_pagenation",
  });

  const saleSwiper = makeNumberedSwiper({
    container: ".sale-swiper",
    next: ".sale-swiper-button-next",
    prev: ".sale-swiper-button-prev",
    pagination: ".sale-swiper_pagenation",
  });

  const osakaSwiper = makeNumberedSwiper({
    container: ".osaka-swiper",
    next: ".osaka-swiper-button-next",
    prev: ".osaka-swiper-button-prev",
    pagination: ".osaka-swiper_pagenation",
  });

  const tokyoSwiper = makeNumberedSwiper({
    container: ".tokyo-swiper",
    next: ".tokyo-swiper-button-next",
    prev: ".tokyo-swiper-button-prev",
    pagination: ".tokyo-swiper_pagenation",
  });
});

//同じページ内の.buying-swiperと.repair-swiperと.sale-swiperがpcとスマホの両方で動く.ourbrand-swiperと同じ仕様のswiperを作成。同じ画面内の各ページネーションが連動しないようにする
document.addEventListener("DOMContentLoaded", function () {
  // スマホ判定
  function isMobile() {
    return window.innerWidth <= 750;
  }
  let buyingSwiper;
  let repairSwiper;
  let saleSwiper;
  let osakaSwiper;
  let tokyoSwiper;

  function initBuyingSwiper() {
    if (isMobile() && !buyingSwiper) {
      buyingSwiper = new Swiper(".buying-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".buying-swiper-button-next",
          prevEl: ".buying-swiper-button-prev",
        },
        on: {
          init: function () {
            updateBuyingPagination();
          },
          slideChange: function () {
            updateBuyingPagination();
          },
        },
      });
    } else if (!isMobile() && buyingSwiper) {
      buyingSwiper.destroy(true, true);
      buyingSwiper = null;
    }
  }
  function updateBuyingPagination() {
    if (buyingSwiper) {
      const currentSlide = document.querySelector(
        ".buying-swiper .current-slide"
      );
      const current = (buyingSwiper.activeIndex + 1)
        .toString()
        .padStart(2, "0");
      currentSlide.textContent = current;
    }
  }

  function initRepairSwiper() {
    if (isMobile() && !repairSwiper) {
      repairSwiper = new Swiper(".repair-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".repair-swiper .swiper-button-next",
          prevEl: ".repair-swiper .swiper-button-prev",
        },
        on: {
          init: function () {
            updateRepairPagination();
          },
          slideChange: function () {
            updateRepairPagination();
          },
        },
      });
    } else if (!isMobile() && repairSwiper) {
      repairSwiper.destroy(true, true);
      repairSwiper = null;
    }
  }
  function updateRepairPagination() {
    if (repairSwiper) {
      const currentSlide = document.querySelector(
        ".repair-swiper .current-slide"
      );
      const current = (repairSwiper.activeIndex + 1)
        .toString()
        .padStart(2, "0");
      currentSlide.textContent = current;
    }
  }

  function initSaleSwiper() {
    if (isMobile() && !saleSwiper) {
      saleSwiper = new Swiper(".sale-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".sale-swiper .swiper-button-next",
          prevEl: ".sale-swiper .swiper-button-prev",
        },
        on: {
          init: function () {
            updateSalePagination();
          },
          slideChange: function () {
            updateSalePagination();
          },
        },
      });
    } else if (!isMobile() && saleSwiper) {
      saleSwiper.destroy(true, true);
      saleSwiper = null;
    }
  }
  function updateSalePagination() {
    if (saleSwiper) {
      const currentSlide = document.querySelector(
        ".sale-swiper .current-slide"
      );
      const current = (saleSwiper.activeIndex + 1).toString().padStart(2, "0");
      currentSlide.textContent = current;
    }
  }

  function initOsakaSwiper() {
    if (isMobile() && !osakaSwiper) {
      osakaSwiper = new Swiper(".osaka-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".osaka-swiper .swiper-button-next",
          prevEl: ".osaka-swiper .swiper-button-prev",
        },
        on: {
          init: function () {
            updateOsakaPagination();
          },
          slideChange: function () {
            updateOsakaPagination();
          },
        },
      });
    } else if (!isMobile() && osakaSwiper) {
      osakaSwiper.destroy(true, true);
      osakaSwiper = null;
    }
  }
  function updateOsakaPagination() {
    if (osakaSwiper) {
      const currentSlide = document.querySelector(
        ".osaka-swiper .current-slide"
      );
      const current = (osakaSwiper.activeIndex + 1).toString().padStart(2, "0");
      currentSlide.textContent = current;
    }
  }

  function initTokyoSwiper() {
    if (isMobile() && !tokyoSwiper) {
      tokyoSwiper = new Swiper(".tokyo-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".tokyo-swiper .swiper-button-next",
          prevEl: ".tokyo-swiper .swiper-button-prev",
        },
        on: {
          init: function () {
            updateTokyoPagination();
          },
          slideChange: function () {
            updateTokyoPagination();
          },
        },
      });
    } else if (!isMobile() && tokyoSwiper) {
      tokyoSwiper.destroy(true, true);
      tokyoSwiper = null;
    }
  }
  function updateTokyoPagination() {
    if (tokyoSwiper) {
      const currentSlide = document.querySelector(
        ".tokyo-swiper .current-slide"
      );
      const current = (tokyoSwiper.activeIndex + 1).toString().padStart(2, "0");
      currentSlide.textContent = current;
    }
  }

  initBuyingSwiper();
  initRepairSwiper();
  initSaleSwiper();
  initOsakaSwiper();
  initTokyoSwiper();
  window.addEventListener("resize", function () {
    initBuyingSwiper();
    initRepairSwiper();
    initSaleSwiper();
    initOsakaSwiper();
    initTokyoSwiper();
  });
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
//一覧ページ　カテゴリーアコーディオン（スマホのみ）
///////////////////////////////////////////
$(".accordion-hide").hide();
$(".cate_accordion-trigger").on("click", function (e) {
  e.preventDefault(); // a要素に変える場合の保険
  const $btn = $(this);
  const $panel = $btn.next(".accordion-hide"); // 兄弟を取得
  $btn.toggleClass("open");
  $panel.stop(true, true).slideToggle("fast");
});

///////////////////////////////////////////
//事業内容ページのアコーディオン（スマホのみ）
///////////////////////////////////////////
function initBusinessAccordion() {
  if (window.innerWidth <= 750) {
    $(".business_acord_hide").hide();
    $(".business_acord_trigger").removeClass("open");

    // .business_selling 内の最初のアコーディオンを開く
    $(".business_selling .business_acord_trigger").first().addClass("open");
    $(".business_selling .business_acord_hide").first().show();

    // .business_brans 内の最初のアコーディオンを開く
    $(".business_brand .business_acord_trigger").first().addClass("open");
    $(".business_brand .business_acord_hide").first().show();
  } else {
    $(".business_acord_hide").show();
    $(".business_acord_trigger").removeClass("open");
  }
}
// 初期化実行
initBusinessAccordion();

$(".business_acord_trigger").on("click", function (e) {
  if (window.innerWidth <= 750) {
    e.preventDefault();
    const $btn = $(this);
    const $panel = $btn.next(".business_acord_hide");
    $btn.toggleClass("open");
    $panel.stop(true, true).slideToggle("fast");
  }
});
$(window).on("resize", function () {
  initBusinessAccordion();
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
//////////////////////////////////////////////////////
//フェードイン
//////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////
//順番にフェードイン
//////////////////////////////////////////////////////
const orderFadeInSections = document.querySelectorAll(".order-fadeIn");
if (orderFadeInSections.length > 0) {
  orderFadeInSections.forEach((section) => {
    const fadeChildElements = section.querySelectorAll(".fadeChild");
    if (fadeChildElements.length > 0) {
      gsap.from(fadeChildElements, {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.6, // 0.3秒ずつ遅延
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          once: true,
        },
      });
    }
  });
}

//////////////////////////////////////////////////////
//さりげないパララックス
//////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////
//さりげないパララックス（背景画像）
//////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////
//スクロールで横スライド_about_value
//////////////////////////////////////////////////////
const aboutValueSection = document.querySelector(".pin-wrap");
if (aboutValueSection) {
  const rowScroll = aboutValueSection.querySelector(".row-scroll");

  // px→vw換算関数
  const pxToVw = (px, base) => (window.innerWidth * px) / base;

  // PC/SPで基準を切り替え
  const getExtra = () => {
    if (window.innerWidth <= 750) {
      // SP基準：750px
      return pxToVw(-30, 750); // ← 30pxぶんの余白をvw換算
    } else {
      // PC基準：1920px
      return pxToVw(-210, 1920); // ← 210pxぶんの余白をvw換算
    }
  };

  const getDistance = () =>
    rowScroll.scrollWidth - document.documentElement.clientWidth - getExtra();

  gsap.to(rowScroll, {
    x: () => -getDistance() + "px",
    ease: "none",
    scrollTrigger: {
      trigger: aboutValueSection,
      start: "top top",
      end: () => "+=" + getDistance(),
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
}

//////////////////////////////////////////////////////
//スクロールトリガーで.about_visionのトップが画面ボトムと重なったら、.circle要素がscale(0.2)から(1)になる
//////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////
//ファーストビューアニメーション
//////////////////////////////////////////////////////
const fvSection = document.querySelector(".fv");
if (fvSection) {
  const mainCopy = fvSection.querySelector(".main-copy");
  const subCopy = fvSection.querySelector(".sub-copy");
  const header = document.querySelector("header");
  const fvTopics = fvSection.querySelector(".fv_topics");

  const tl = gsap.timeline();

  tl.fromTo(
    mainCopy,
    { opacity: 0, scale: 0, y: 40 },
    { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
  )
    .fromTo(
      subCopy,
      { opacity: 0, scale: 0, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.4" // 前のアニメーションと0.4秒重ねる
    )
    .fromTo(
      [header, fvTopics],
      {
        opacity: 0,
        y: function (index) {
          return index === 0 ? -40 : 40;
        },
      },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    );
}
