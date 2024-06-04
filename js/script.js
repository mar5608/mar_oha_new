// alert("おはよう");

/* jQuery */
// jQuery("#js-drawer-icon").on("click", function (e) {
//   e.preventDefault();
//   jQuery("#js-drawer-icon").toggleClass("is-checked");
//   jQuery("#js-drawer-content").toggleClass("is-checked");
// });

const drawerIcon = document.querySelector("#js-drawer-icon");
const drawerContent = document.querySelector("#js-drawer-content");

/* JavaScript */
if (drawerIcon) {
  //drawerIconがあった時のみ実施
  drawerIcon.addEventListener("click", function (e) {
    e.preventDefault(); //標準の動きを無効化しておく
    //iconに対してつけ外しする
    drawerIcon.classList.toggle("is-checked");
    drawerContent.classList.toggle("is-checked");
  });
}
