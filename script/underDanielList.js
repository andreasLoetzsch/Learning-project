let listText = document.getElementById("list-text");
let image = document.getElementById("image");
// let img = document.getElementById("image");

const andreasUnder = [
  "andreas-1.png",
  "andreas-2.png",
  "andreas-3.png",
  "andreas-4.png",
  "andreas-5.png",
  "andreas-6.png",
  "andreas-7.png",
  "andreas-8.png",
  "andreas-9.png",
  "andreas-10.png",
  "andreas-11.png",
  "andreas-12.png",
  "andreas-12.png",
  "andreas-13.png",
];
const marreUnder = [
  "marre-1.png",
  "marre-2.png",
  "marre-3.png",
  "marre-4.png",
  "marre-5.png",
  "marre-6.png",
  "marre-7.png",
];
const timmieUnder = ["timmie-1.png", "timmie-2.png", "timmie-3.png"];
const erikUnder = ["erik-1.png", "erik-2.png"];

let formList = document.getElementById("list");

formList.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputUser = document.querySelector(".input-name-list").value;

  if (inputUser === "andreas") {
    for (let i = 0; i < andreasUnder.length; i++) {
      let listDiv = document.createElement("div");
      let viewBtn = document.createElement("button");
      viewBtn.textContent = "view";

      viewBtn.addEventListener("click", function () {
        image.src = `bilder/andreas-${i + 1}.png`;
        image.classList.remove("hidden");
        hideSite();
      });
      let photo = document.createElement("span");
      photo.style.marginBottom = "5px";
      photo.textContent += andreasUnder[i];
      listDiv.append(photo, viewBtn);
      listText.append(listDiv);
    }
  } else if (inputUser === "marre") {
    for (let i = 0; i < marreUnder.length; i++) {
      let listDiv = document.createElement("div");
      let viewBtn = document.createElement("button");
      viewBtn.textContent = "view";

      viewBtn.addEventListener("click", function () {
        image.src = `bilder/marre-${i + 1}.png`;
        image.classList.remove("hidden");
        hideSite();
      });
      let photo = document.createElement("span");
      photo.style.marginBottom = "5px";
      photo.textContent += marreUnder[i];
      listDiv.append(photo, viewBtn);
      listText.append(listDiv);
    }
  } else if (inputUser === "timmie") {
    for (let i = 0; i < timmieUnder.length; i++) {
      let listDiv = document.createElement("div");
      let viewBtn = document.createElement("button");
      viewBtn.textContent = "view";

      viewBtn.addEventListener("click", function () {
        image.src = `bilder/timmie-${i + 1}.png`;
        image.classList.remove("hidden");
        hideSite();
      });
      let photo = document.createElement("span");
      photo.style.marginBottom = "5px";
      photo.textContent += timmieUnder[i];
      listDiv.append(photo, viewBtn);
      listText.append(listDiv);
    }
  } else if (inputUser === "erik") {
    for (let i = 0; i < erikUnder.length; i++) {
      let listDiv = document.createElement("div");
      let viewBtn = document.createElement("button");
      viewBtn.textContent = "view";

      viewBtn.addEventListener("click", function () {
        image.src = `bilder/erik-${i + 1}.png`;
        image.classList.remove("hidden");
        hideSite();
      });
      let photo = document.createElement("span");
      photo.style.marginBottom = "5px";
      photo.textContent += erikUnder[i];
      listDiv.append(photo, viewBtn);
      listText.append(listDiv);
    }
  }
});
function hideSite() {
  backBtn.classList.remove("hidden");
  document.querySelector(".box-list-outer-container").classList.add("hidden");
}
