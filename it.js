document.addEventListener("DOMContentLoaded", () => {
  const barGroups = document.querySelectorAll(".bar-group");

  setTimeout(() => {
    barGroups.forEach((group) => {
      const percent = group.getAttribute("data-percent");
      const bar = group.querySelector(".bar");
      if (bar) {
        bar.style.width = percent + "%";
      }
    });
  }, 200);

  barGroups.forEach((group) => {
    group.addEventListener("click", () => {
      const label = group.querySelector(".bar-label").innerText;
      const percent = group.getAttribute("data-percent");

      console.log(
        `Bereich analysiert: ${label} hält einen Marktanteil von ${percent}%.`,
      );

      group.style.transform = "scale(1.01)";
      setTimeout(() => {
        group.style.transform = "scale(1)";
      }, 100);
    });
  });
});
