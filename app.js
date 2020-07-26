document.querySelector(".button").addEventListener("mouseover", function () {
  document.querySelector(".pop-up").style.display = "flex";
});
document.querySelector(".pop-up").addEventListener("mouseout", function () {
  document.querySelector(".pop-up").style.display = "none";
});
