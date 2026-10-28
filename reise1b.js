const tickerItem = document.querySelector(".ticker-item");
const cards = document.querySelectorAll(".matrix-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    tickerItem.style.animationDuration = "6s";

    card.style.opacity = "0.7";
    setTimeout(() => {
      card.style.opacity = "1";
    }, 150);

    setTimeout(() => {
      tickerItem.style.animationDuration = "15s";
    }, 4000);
  });
});

const tickerWrap = document.querySelector(".ticker-wrap");
const clone = tickerItem.cloneNode(true);
tickerWrap.appendChild(clone);
