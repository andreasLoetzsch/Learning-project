const underDanielLink = document.querySelector("#under-daniel-link");
const chokeLink = document.querySelector("#choke-link");
const shoppingLink = document.querySelector("#shopping-link");
const underDanielListLink = document.querySelector("#under-daniel-list-link");
const image = document.getElementById("image");

function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}

underDanielLink.addEventListener("click", function () {
  navigateToPage("under-daniel.html");
});

chokeLink.addEventListener("click", function () {
  navigateToPage("choke.html");
});

shoppingLink.addEventListener("click", function () {
  navigateToPage("shopping-list.html");
});

underDanielListLink.addEventListener("click", function () {
  navigateToPage("under-daniel-list.html");
});

image.src = "Bilder/dif-tifo.png";
