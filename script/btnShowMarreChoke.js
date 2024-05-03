// göm undan allt förutom videon och gör den fullscreen
// och ha en back knapp så du kommer till första sidan igen
let chokeMarre = document.getElementById("marre-choke");
let backBtn = document.getElementById("back-button");

function marreChoke() {
  chokeMarre.play();
  chokeMarre.classList.remove("hidden");
  document
    .querySelector(".shopping-list-outer-container")
    .classList.add("hidden");
  document.querySelector(".marre-choke-button").classList.add("hidden");
  document.querySelector(".message-btn").classList.add("hidden");
  backBtn.classList.remove("hidden");
  document.getElementById("form").classList.add("hidden");
  chokeMarre.requestFullscreen();
}
function btnBack() {
  chokeMarre.classList.add("hidden");
  document
    .querySelector(".shopping-list-outer-container")
    .classList.remove("hidden");
  document.querySelector(".marre-choke-button").classList.remove("hidden");
  document.querySelector(".message-btn").classList.remove("hidden");
  backBtn.classList.add("hidden");
  chokeMarre.pause();
  chokeMarre.currentTime = 0;
  document.getElementById("image").classList.add("hidden");
  document.getElementById("form").classList.remove("hidden");
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    chokeMarre.classList.add("hidden");
    document
      .querySelector(".shopping-list-outer-container")
      .classList.remove("hidden");
    document.querySelector(".marre-choke-button").classList.remove("hidden");
    document.querySelector(".message-btn").classList.remove("hidden");
    backBtn.classList.add("hidden");
    chokeMarre.pause();
    chokeMarre.currentTime = 0;
    document.getElementById("form").classList.remove("hidden");
    document.getElementById("image").classList.add("hidden");
  }
});

console.log(e.key);
