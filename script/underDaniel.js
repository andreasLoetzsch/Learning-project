let image = document.getElementById("image");
let form = document.getElementById("form");
let backBtn = document.querySelector("#back-button");

function hideSite() {
  backBtn.classList.remove("hidden");
  document.getElementById("form").classList.add("hidden");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;

  image.src = `bilder/${name}-${number}.png`;
  image.classList.remove("hidden");
  hideSite();
});

function btnBack() {
  backBtn.classList.add("hidden");
  document.getElementById("image").classList.add("hidden");
  document.getElementById("form").classList.remove("hidden");
}
