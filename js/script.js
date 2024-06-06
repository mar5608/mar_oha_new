// alert("おはよう");

/* jQuery */
/*js-drawer*/
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();

  if (jQuery(this).parent().hasClass("is-open")) {
    // thisで押した要素を取得する
    jQuery(this).parent().removeClass("is-open");
    // スライドしながら戻る
    jQuery(this).next().slideUp();
  } else {
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
  }
});

/**  swiper */
const swiper = new Swiper("#js-gallery-swiper", {
  spaceBetween: 82, //横のカードとの間
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: "#js-gallery-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-gallery-next",
    prevEl: "#js-gallery-prev",
  },
});

/** modal */
jQuery(".js-modal-open").on("click", function (e) {
  e.preventDefault();

  jQuery("#js-about-modal")[0].showModal();
});

jQuery(".js-modal-close").on("click", function (e) {
  e.preventDefault();

  jQuery("#js-about-modal")[0].close();
});

/** スムーススクロール*/
/** drawer 制御 */
jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});

jQuery('a[href^="#"]').on("click", function (e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;
  jQuery("html,body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing" // swing or liner
  );
  // jQuery("html,body").animate(
  //   {
  //     scrollTop: 0,
  //   },
  //   1000,
  //   "swing" // swing or liner
  // );
});

/** topに戻る */
jQuery(window).on("scroll", function () {
  if (100 < jQuery(window).scrollTop()) {
    jQuery("#js-pagetop").addClass("is-show");
  } else {
    jQuery("#js-pagetop").removeClass("is-show");
  }
});

/**
 * JavaScript
 * */
/*js-drawer*/
// const drawerIcon = document.querySelector("#js-drawer-icon");
// const drawerContent = document.querySelector("#js-drawer-content");

// if (drawerIcon) {
//   //drawerIconがあった時のみ実施
//   drawerIcon.addEventListener("click", function (e) {
//     e.preventDefault(); //標準の動きを無効化しておく
//     //iconに対してつけ外しする
//     drawerIcon.classList.toggle("is-checked");
//     drawerContent.classList.toggle("is-checked");
//   });
// }

/** modal */
// const modalOpenItems = document.querySelectorAll(".js-modal-open");
// const modalCloseItems = document.querySelectorAll(".js-modal-close");
// const aboutModal = document.querySelector("#js-about-modal");

// modalOpenItems.forEach(function (modalOpenItem) {
//   modalOpenItem.addEventListener("click", function (e) {
//     e.preventDefault();

//     if (aboutModal) {
//       aboutModal.showModal();
//     }
//   });
// });

// modalCloseItems.forEach(function (modalCloseItem) {
//   modalCloseItem.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (aboutModal) {
//       aboutModal.close();
//     }
//   });
// });

/** topに戻る */
// const pageTop = document.querySelector("#js-pagetop");
// window.addEventListener("scroll", function () {
//   if (100 < this.window.scrollY) {
//     pageTop.classList.add("is-show");
//   } else {
//     pageTop.classList.remove("is-show");
//   }
// });
