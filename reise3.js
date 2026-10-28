/**
 * Initialisiert ein universelles Karussell (für Bilder und Videos) anhand seiner ID.
 *
 * @param {string} carouselId
 */
function initializeAdvancedCarousel(carouselId) {
  const container = document.getElementById(carouselId);
  if (!container) return;

  const slidesContainer = container.querySelector(".carousel-slides");
  const slides = container.querySelectorAll(".carousel-slide");
  const prevBtn = container.querySelector(".carousel-btn.prev");
  const nextBtn = container.querySelector(".carousel-btn.next");
  const dotsContainer = container.querySelector(".carousel-dots");

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoSlideInterval;

  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("carousel-dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".carousel-dot");

  function stopAllVideos() {
    const iframes = container.querySelectorAll(".carousel-slide iframe");
    iframes.forEach((iframe) => {
      try {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*",
        );
      } catch (e) {
        console.error("YouTube-Player konnte nicht pausiert werden:", e);
      }
    });
  }

  function updateCarousel() {
    stopAllVideos();

    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });

    const currentSlide = slides[currentIndex];
    if (currentSlide && currentSlide.classList.contains("video-slide")) {
      stopAutoSlide();
    } else if (!container.matches(":hover")) {
      startAutoSlide();
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  function startAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);

    if (
      slides[currentIndex] &&
      !slides[currentIndex].classList.contains("video-slide")
    ) {
      autoSlideInterval = setInterval(nextSlide, 6000);
    }
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  startAutoSlide();

  container.addEventListener("mouseenter", stopAutoSlide);
  container.addEventListener("mouseleave", () => {
    if (
      slides[currentIndex] &&
      !slides[currentIndex].classList.contains("video-slide")
    ) {
      startAutoSlide();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeAdvancedCarousel("carousel-udaipur");
  initializeAdvancedCarousel("carousel-kerala");
});
