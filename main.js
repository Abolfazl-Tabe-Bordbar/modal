var show_model_btn = document.getElementById("show_modal");
var close_modal_btn = document.getElementById("close_modal");
var section_modal = document.getElementById("modal");
var back_modal = document.getElementById("back_modal");
show_model_btn.addEventListener("click", function () {
  section_modal.style.display = "flex";
  gsap.from("#modal_content", {opacity: 0, y: -100, duration: 1});
});
close_modal_btn.addEventListener("click", function () {
    section_modal.style.display = "none";
});
document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "o" && event.shiftKey) {
    section_modal.style.display = "flex";
    gsap.from("#modal_content", {opacity: 0, y: -100, duration: 1});
  }
});
back_modal.addEventListener("click",function (event) {
    event.stopPropagation();
    section_modal.style.display = "none";
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    section_modal.style.display = "none";
  }
});
