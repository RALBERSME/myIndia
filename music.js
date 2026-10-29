document.addEventListener("DOMContentLoaded", () => {
  const badges = document.querySelectorAll(".thema-badge");
  const displayBox = document.getElementById("thema-info-display");

  badges.forEach((badge) => {
    badge.addEventListener("click", () => {
      badges.forEach((b) => b.classList.remove("active-badge"));
      badge.classList.add("active-badge");

      const description = badge.getAttribute("data-desc");

      if (displayBox) {
        displayBox.innerText = description;
        displayBox.style.fontStyle = "normal";

        displayBox.style.transform = "scale(1.005)";
        setTimeout(() => {
          displayBox.style.transform = "scale(1)";
        }, 100);
      }
    });
  });
});
