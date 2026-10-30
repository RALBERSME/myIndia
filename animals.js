const posterContainer = document.getElementById("posterContainer");
const posterImage = document.getElementById("posterImage");

if (posterContainer && posterImage) {
  const isSmallDevice = () => window.innerWidth <= 768;

  posterContainer.addEventListener("click", (e) => {
    if (!isSmallDevice()) return;

    posterContainer.classList.toggle("zoomed-in");

    if (!posterContainer.classList.contains("zoomed-in")) {
      posterImage.style.transformOrigin = `center center`;
    } else {
      zoomEffect(e);
    }
  });

  const zoomEffect = (e) => {
    if (!isSmallDevice() || !posterContainer.classList.contains("zoomed-in"))
      return;

    const rect = posterContainer.getBoundingClientRect();

    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    if (!clientX || !clientY) return;

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    posterImage.style.transformOrigin = `${x}% ${y}%`;
  };

  posterContainer.addEventListener("mousemove", zoomEffect);
  posterContainer.addEventListener("touchmove", zoomEffect);
}

document.addEventListener("DOMContentLoaded", () => {
  const introOverlay = document.getElementById("header-intro-overlay");
  if (introOverlay) {
    setTimeout(() => {
      introOverlay.classList.add("fade-out");
    }, 1500);
  }

  const popRows = document.querySelectorAll(".pop-row");

  const checkScrollVisibility = () => {
    const triggerPoint = window.innerHeight * 0.8;
    popRows.forEach((row) => {
      const rowTop = row.getBoundingClientRect().top;
      if (rowTop < triggerPoint) {
        row.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", checkScrollVisibility);
  checkScrollVisibility();
});

document.addEventListener("DOMContentLoaded", () => {
  const popRows = document.querySelectorAll(".pop-row");

  const checkScrollVisibility = () => {
    const triggerPoint = window.innerHeight * 0.8;

    popRows.forEach((row) => {
      const rowTop = row.getBoundingClientRect().top;

      if (rowTop < triggerPoint) {
        row.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", checkScrollVisibility);

  checkScrollVisibility();
});

const playlistItems = document.querySelectorAll(".playlist-item");
const mainCinemaScreen = document.getElementById("mainCinemaScreen");
const mainVideoTitle = document.getElementById("mainVideoTitle");
const mainVideoDesc = document.getElementById("mainVideoDesc");

if (playlistItems.length > 0 && mainCinemaScreen) {
  playlistItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("active")) return;

      playlistItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      const miniVideoHTML = item.querySelector(".mini-video-box").innerHTML;

      const targetTitle = item.getAttribute("data-title");
      const targetDesc = item.getAttribute("data-desc");

      mainCinemaScreen.classList.add("video-bounce");

      mainCinemaScreen.innerHTML = miniVideoHTML;

      mainVideoTitle.innerText = targetTitle;
      mainVideoDesc.innerText = targetDesc;

      setTimeout(() => {
        mainCinemaScreen.classList.remove("video-bounce");
      }, 400);
    });
  });
}
