/*
1. ska ha prametrar som skickas till den: titel och description
status = warning, error, success
title = string
description = string
*/

function messageBox({ status = "", title = "", description = "" }) {
  let mainComp = document.querySelector(".main-component");
  let msgBoxOuter = document.createElement("div");
  let msgBox = document.createElement("div");
  let msgBoxHeader = document.createElement("div");
  let msgBoxBody = document.createElement("div");
  let msgBoxTitle = document.createElement("span");
  let msgBoxDescription = document.createElement("span");

  if (status == "warning") {
    msgBox.style.backgroundColor = "orange";
  } else if (status == "success") {
    msgBox.style.backgroundColor = "green";
    msgBoxTitle.style.color = "blue";
  } else if (status == "error") {
    msgBox.style.backgroundColor = "red";
  }

  msgBoxTitle.textContent = title;
  msgBoxDescription.textContent = description;

  msgBox.classList.add("message-box-container");
  msgBoxHeader.classList.add("message-box-header");
  msgBoxTitle.classList.add("message-box-title");
  msgBoxBody.classList.add("message-box-body");
  msgBoxDescription.classList.add("message-box-description");
  msgBoxOuter.classList.add("message-box-outer-container");

  if (document.querySelectorAll(".message-box-outer-container").length == 0) {
    mainComp.append(msgBoxOuter);
  }

  let msgBoxOuterQuery = document.querySelectorAll(
    ".message-box-outer-container"
  )[0];

  msgBoxBody.append(msgBoxDescription);
  msgBoxHeader.append(msgBoxTitle);
  msgBox.append(msgBoxHeader);
  msgBox.append(msgBoxBody);
  msgBoxOuterQuery.append(msgBox);

  setTimeout(function () {
    msgBox.remove();
  }, 10000);
}
