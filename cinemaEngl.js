document.addEventListener("DOMContentLoaded", () => {
  const enterCinemaBtn = document.getElementById("enterCinemaBtn");
  const lightsToggleBtn = document.getElementById("lightsToggleBtn");
  const continueBtn = document.getElementById("continueBtn");
  const introWrapper = document.getElementById("introWrapper");
  const cinemaScreen = document.getElementById("cinemaScreen");
  const seatingArea = document.getElementById("seatingArea");
  const body = document.body;

  if (enterCinemaBtn) {
    enterCinemaBtn.addEventListener("click", () => {
      introWrapper.classList.add("fade-out");

      seatingArea.classList.add("sink-down");

      setTimeout(() => {
        cinemaScreen.classList.remove("hidden-screen");
        cinemaScreen.classList.add("reveal-screen");
      }, 300);
    });
  }

  if (lightsToggleBtn) {
    lightsToggleBtn.addEventListener("click", () => {
      body.classList.toggle("lights-on");

      if (body.classList.contains("lights-on")) {
        lightsToggleBtn.innerText = "🎬 Licht dimmen";
      } else {
        lightsToggleBtn.innerText = "💡 Licht einschalten";
      }
    });
  }

  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      window.location.href = "specialsEngl.html";
    });
  }

  const youtubeIframe = document.getElementById("youtubeIframe");
  const videoContainer = document.getElementById("videoContainer");
  const fallbackCard = document.getElementById("fallbackCard");

  if (youtubeIframe && fallbackCard) {
    const safetyTimer = setTimeout(() => {
      if (videoContainer) videoContainer.style.display = "none";
      fallbackCard.style.display = "block";
      body.classList.add("lights-on");
    }, 4000);

    youtubeIframe.onload = () => {
      clearTimeout(safetyTimer);
    };
  }
});
