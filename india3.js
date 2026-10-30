const gewaehlteThemen = ["goodbye"];

const draggables = document.querySelectorAll(".draggable");
const chain = document.getElementById("garlandChain");
const pool = document.getElementById("flowerPool");
const finishBtn = document.getElementById("finishBtn");
const resultMessage = document.getElementById("resultMessage");

// --- Bestehender Maus-Code (bleibt gleich) ---
draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () =>
    draggable.classList.add("dragging"),
  );
  draggable.addEventListener("dragend", () =>
    draggable.classList.remove("dragging"),
  );

  // --- NEU: Touch-Events für mobile Geräte ---
  draggable.addEventListener(
    "touchstart",
    (e) => {
      draggable.classList.add("dragging");
      // Verhindert Scrollen des Bildschirms während des Ziehens
      e.preventDefault();
    },
    { passive: false },
  );

  draggable.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
      const touch = e.touches[0];

      // Element visuell dem Finger folgen lassen
      draggable.style.position = "fixed";
      draggable.style.left = `${touch.clientX - draggable.offsetWidth / 2}px`;
      draggable.style.top = `${touch.clientY - draggable.offsetHeight / 2}px`;
      draggable.style.zIndex = "1000";
    },
    { passive: false },
  );

  draggable.addEventListener("touchend", (e) => {
    draggable.classList.remove("dragging");

    // Zurücksetzen der fixierten Positionierung
    draggable.style.position = "";
    draggable.style.left = "";
    draggable.style.top = "";
    draggable.style.zIndex = "";

    // Prüfen, über welchem Element der Finger losgelassen wurde
    const touch = e.changedTouches[0];
    const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);

    // Finde heraus, ob das Ziel die Kette oder der Pool ist (oder deren Kinder)
    const hitChain = dropTarget?.closest("#chainID"); // Ersetzen Sie #chainID mit Ihrem echten Selektor für 'chain'
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

// --- Bestehender Maus-Drop-Code (bleibt gleich) ---
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
