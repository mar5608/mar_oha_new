// alert("おはよう");

jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("js-drawer-icon").toggleClass("is-checked");
  jQuery("js-drawer-content").toggleClass("is-checked");
});

// jQuery("#js-drawer-icon").on("click", function (e) {
//     e.preventDefault();
//     jQuery("#js-drawer-icon").toggleClass("is-checked");
//     jQuery("#js-drawer-content").toggleClass("is-checked");
//   });

// JavaScript
// document
//   .querySelector("#js-drawer-icon")
//   .addEventListener("click", function (e) {
//     e.preventDefault(); //標準の動きを無効化しておく
//     //iconに対してつけ外しする
//     document.querySelector("#js-drawer-icon").classList.toggle("is-checked");
//     document.querySelector("#js-drawer-content").classList.toggle("is-checked");
//   });
