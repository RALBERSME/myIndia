const gewaehlteThemen = ["goodbyeEngl"];

const draggables = document.querySelectorAll(".draggable");
const chain = document.getElementById("garlandChain");
const pool = document.getElementById("flowerPool");
const finishBtn = document.getElementById("finishBtn");
const resultMessage = document.getElementById("resultMessage");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

chain.addEventListener("dragover", (e) => {
  e.preventDefault();
});

chain.addEventListener("drop", (e) => {
  e.preventDefault();
  const draggable = document.querySelector(".dragging");
  if (draggable) {
    chain.appendChild(draggable);

    const topic = draggable.getAttribute("data-topic");
    if (!gewaehlteThemen.includes(topic)) {
      gewaehlteThemen.unshift(topic);
    }
  }
});

pool.addEventListener("dragover", (e) => {
  e.preventDefault();
});

pool.addEventListener("drop", (e) => {
  e.preventDefault();
  const draggable = document.querySelector(".dragging");
  if (draggable) {
    pool.appendChild(draggable);

    const topic = draggable.getAttribute("data-topic");
    const index = gewaehlteThemen.indexOf(topic);
    if (index > -1) {
      gewaehlteThemen.splice(index, 1);
    }
  }
});

let pageCount = 3;
finishBtn.addEventListener("click", () => {
  localStorage.setItem("indienReiseThemen", JSON.stringify(gewaehlteThemen));

  const extraThemen = gewaehlteThemen.filter((thema) => thema !== "Rundreise");
  let themenText =
    extraThemen.length > 0 ? extraThemen.join(", ") : "keine weiteren Themen";

  resultMessage.innerHTML = `<strong>Super.</strong> You have chosen: Round trip & <em>${themenText}</em>. Let's start the journey.`;
  resultMessage.classList.remove("hidden");

  console.log("Gespeicherte Themenübersicht für Folgeseiten:", gewaehlteThemen);
  console.log(
    "Erfolgreich im Local Storage gespeichert:",
    JSON.parse(localStorage.getItem("indienReiseThemen")),
  );
  setTimeout(() => {
    pageCount++;
    window.location.href = `india${pageCount}Engl.html`;
  }, 2000);
});
