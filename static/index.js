// // const img = document.getElementById("img");
// // img.addEventListener("change", getColor);
// // function getColor(e) {
// //   return e.target.value;
// // }

// // const col = document.getElementById("color");
// // const h = document.querySelector("h2");

// // col.addEventListener("change", function (e) {
// //   h.style.setProperty("--h2-color", e.target.value);
// // });

// let colorWell;
// const defaultColor = "#0000ff";

// window.addEventListener("load", startup, false);
// function startup() {
//   colorWell = document.querySelector("#color");
//   colorWell.value = defaultColor;
//   colorWell.addEventListener("input", updateFirst, false);
//   colorWell.addEventListener("change", updateAll, false);
//   colorWell.select();
// }
// function updateFirst(event) {
//   const h = document.querySelector("h2");
//   if (h) {
//     h.style.color = event.target.value;
//   }
// }
// function updateAll(event) {
//   document.querySelectorAll("h").forEach((h) => {
//     h.style.color = event.target.value;
//   });
// }

// let bg;
// const img = "./img.webp";

// window.addEventListener("load", startup, false);
// function startup() {
//   bg = document.querySelector("#img");
//   bg.value = img;
//   bg.addEventListener("input", updateFirst, false);
//   bg.addEventListener("change", updateAll, false);
//   bg.select();
// }
// function updateFirst(event) {
//   const h = document.querySelector(".right");
//   if (h) {
//     h.style. = event.target.value;
//   }
// }
// function updateAll(event) {
//   document.querySelectorAll(".right").forEach((h) => {
//     h.style.color = event.target.value;
//   });
// }
