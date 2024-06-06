// alert("おはよう");

/* jQuery */
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

/** JavaScript */

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
