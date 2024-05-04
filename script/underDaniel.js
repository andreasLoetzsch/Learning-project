let image = document.getElementById("image");
let form = document.getElementById("form");

function hideSite() {
  document
    .querySelector(".shopping-list-outer-container")
    .classList.add("hidden");
  document.querySelector(".marre-choke-button").classList.add("hidden");
  document.querySelector(".message-btn").classList.add("hidden");
  backBtn.classList.remove("hidden");
  document.getElementById("form").classList.add("hidden");
  document.querySelector(".box-list-outer-container").classList.add("hidden");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;

  image.src = `bilder/${name}-${number}.png`;
  image.classList.remove("hidden");
  hideSite();
});
