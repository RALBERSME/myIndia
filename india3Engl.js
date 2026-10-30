const gewaehlteThemen = ["bye"];

const draggables = document.querySelectorAll(".draggable");
const chain = document.getElementById("garlandChain");
const pool = document.getElementById("flowerPool");
const finishBtn = document.getElementById("finishBtn");
const resultMessage = document.getElementById("resultMessage");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () =>
    draggable.classList.add("dragging"),
  );
  draggable.addEventListener("dragend", () =>
    draggable.classList.remove("dragging"),
  );

  draggable.addEventListener(
    "touchstart",
    (e) => {
      draggable.classList.add("dragging");

      e.preventDefault();
    },
    { passive: false },
  );

  draggable.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
      const touch = e.touches[0];

      draggable.style.position = "fixed";
      draggable.style.left = `${touch.clientX - draggable.offsetWidth / 2}px`;
      draggable.style.top = `${touch.clientY - draggable.offsetHeight / 2}px`;
      draggable.style.zIndex = "1000";
    },
    { passive: false },
  );

  draggable.addEventListener("touchend", (e) => {
    draggable.classList.remove("dragging");

    draggable.style.position = "";
    draggable.style.left = "";
    draggable.style.top = "";
    draggable.style.zIndex = "";

    const touch = e.changedTouches[0];
    const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);

    const hitChain = dropTarget?.closest("#chainID");
    const hitPool = dropTarget?.closest("#flowerPool");

    const topic = draggable.getAttribute("data-topic");

    if (hitChain) {
      chain.appendChild(draggable);
      if (!gewaehlteThemen.includes(topic)) {
        gewaehlteThemen.unshift(topic);
      }
    } else if (hitPool) {
      pool.appendChild(draggable);
      const index = gewaehlteThemen.indexOf(topic);
      if (index > -1) {
        gewaehlteThemen.splice(index, 1);
      }
    }
  });
});

chain.addEventListener("dragover", (e) => e.preventDefault());
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

pool.addEventListener("dragover", (e) => e.preventDefault());
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

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () =>
    draggable.classList.add("dragging"),
  );
  draggable.addEventListener("dragend", () =>
    draggable.classList.remove("dragging"),
  );

  draggable.addEventListener(
    "touchstart",
    (e) => {
      draggable.classList.add("dragging");
      e.preventDefault();
    },
    { passive: false },
  );

  draggable.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
      const touch = e.touches[0];

      draggable.style.position = "fixed";
      draggable.style.left = `${touch.clientX - draggable.offsetWidth / 2}px`;
      draggable.style.top = `${touch.clientY - draggable.offsetHeight / 2}px`;
      draggable.style.zIndex = "1000";
      draggable.style.pointerEvents = "none";
    },
    { passive: false },
  );

  draggable.addEventListener("touchend", (e) => {
    draggable.classList.remove("dragging");

    draggable.style.position = "";
    draggable.style.left = "";
    draggable.style.top = "";
    draggable.style.zIndex = "";
    draggable.style.pointerEvents = "";

    const touch = e.changedTouches[0];
    const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);

    const hitChain = dropTarget?.closest("#garlandChain");
    const hitPool = dropTarget?.closest("#flowerPool");

    const topic = draggable.getAttribute("data-topic");

    if (hitChain) {
      chain.appendChild(draggable);
      if (!gewaehlteThemen.includes(topic)) {
        gewaehlteThemen.unshift(topic);
      }
    } else if (hitPool) {
      pool.appendChild(draggable);
      const index = gewaehlteThemen.indexOf(topic);
      if (index > -1) {
        gewaehlteThemen.splice(index, 1);
      }
    }
  });
});
let pageCount = 3;
finishBtn.addEventListener("click", () => {
  localStorage.setItem("indienReiseThemen", JSON.stringify(gewaehlteThemen));

  const extraThemen = gewaehlteThemen.filter((thema) => thema !== "Rundreise");
  let themenText =
    extraThemen.length > 0 ? extraThemen.join(", ") : "keine weiteren Themen";

  resultMessage.innerHTML = `<strong>Super.</strong> Du hast gewählt: Rundreise & <em>${themenText}</em>. Wir beginnen mit der Rundreise.`;
  resultMessage.classList.remove("hidden");

  console.log("Gespeicherte Themenübersicht für Folgeseiten:", gewaehlteThemen);
  console.log(
    "Erfolgreich im Local Storage gespeichert:",
    JSON.parse(localStorage.getItem("indienReiseThemen")),
  );
  setTimeout(() => {
    pageCount++;
    window.location.href = `india${pageCount}.html`;
  }, 2000);
});
