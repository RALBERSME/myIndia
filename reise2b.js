/**
 * Initialisiert ein interaktives Bilder-Karussell anhand seiner ID.
 * @param {string} carouselId
 */
function initializeCarousel(carouselId) {
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

  function updateCarousel() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
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
    autoSlideInterval = setInterval(nextSlide, 6000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  startAutoSlide();

  container.addEventListener("mouseenter", stopAutoSlide);
  container.addEventListener("mouseleave", startAutoSlide);
}

document.addEventListener("DOMContentLoaded", () => {
  initializeCarousel("carousel-varanasi");
  initializeCarousel("carousel-amritsar");
});
