// göm undan allt förutom videon och gör den fullscreen
// och ha en back knapp så du kommer till första sidan igen
let chokeMarre = document.getElementById("marre-choke");
let backBtn = document.getElementById("back-button");
let chokeErik = document.getElementById("erik-choke");
let chokeTimmie = document.getElementById("timmie-choke");

function marreChoke() {
  chokeMarre.play();
  chokeMarre.classList.remove("hidden");
  document.querySelector(".marre-choke-button").classList.add("hidden");
  document.querySelector(".erik-choke-button").classList.add("hidden");
  document.querySelector(".timmie-choke-button").classList.add("hidden");
  backBtn.classList.remove("hidden");
  chokeMarre.requestFullscreen();
}
function erikChoke() {
  chokeErik.play();
  chokeErik.classList.remove("hidden");
  document.querySelector(".marre-choke-button").classList.add("hidden");
  document.querySelector(".erik-choke-button").classList.add("hidden");
  document.querySelector(".timmie-choke-button").classList.add("hidden");
  backBtn.classList.remove("hidden");
  chokeErik.requestFullscreen();
}
function timmieChoke() {
  chokeTimmie.play();
  chokeTimmie.classList.remove("hidden");
  document.querySelector(".marre-choke-button").classList.add("hidden");
  document.querySelector(".erik-choke-button").classList.add("hidden");
  document.querySelector(".timmie-choke-button").classList.add("hidden");
  backBtn.classList.remove("hidden");
  chokeTimmie.requestFullscreen();
}
function btnBack() {
  chokeMarre.classList.add("hidden");
  chokeErik.classList.add("hidden");
  chokeTimmie.classList.add("hidden");
  document.querySelector(".marre-choke-button").classList.remove("hidden");
  backBtn.classList.add("hidden");
  chokeMarre.pause();
  chokeMarre.currentTime = 0;
  chokeErik.pause();
  chokeErik.currentTime = 0;
  chokeErik.pause();
  chokeMarre.currentTime = 0;
  document.querySelector(".erik-choke-button").classList.remove("hidden");
  document.querySelector(".timmie-choke-button").classList.remove("hidden");
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    chokeMarre.classList.add("hidden");
    chokeErik.classList.add("hidden");
    chokeTimmie.classList.add("hidden");
    document.querySelector(".marre-choke-button").classList.remove("hidden");
    backBtn.classList.add("hidden");
    chokeMarre.pause();
    chokeMarre.currentTime = 0;
    chokeErik.pause();
    chokeErik.currentTime = 0;
    chokeErik.pause();
    chokeMarre.currentTime = 0;
    document.querySelector(".erik-choke-button").classList.remove("hidden");
    document.querySelector(".timmie-choke-button").classList.remove("hidden");
  }
});
