document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const iframe = document.getElementById("web-driver-iframe");
  const placeholder = document.getElementById("iframe-placeholder");

  const webLinkButton = document.getElementById("weblink");

  const previewSection = document.getElementById("preview");

  if (webLinkButton) {
    webLinkButton.style.display = "none";
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      previewSection.scrollIntoView({ behavior: "smooth", block: "start" });
      const targetUrl = card.getAttribute("data-url");

      if (webLinkButton) {
        webLinkButton.href = targetUrl;
        webLinkButton.style.display = "inline-block";
      }

      console.log("🛺 *Brumm-Brumm* Rikscha fährt los Richtung: " + targetUrl);

      if (
        targetUrl.includes("google.com") ||
        targetUrl.includes("github.com") ||
        targetUrl.includes("stackoverflow.com")
      ) {
        iframe.style.display = "none";
        placeholder.style.display = "block";
        placeholder.innerHTML = `
                    <p>🕉️ <strong>Namaste!</strong> Die Sicherheits-Gurus von ${card.querySelector("h3").innerText} erlauben keine fremden Rikschas direkt in diesem Fenster.</p>
                    <p style="color: #FFB800; font-size: 1.6rem; margin: 15px 0;">Nutze den Link oben oder klicke hier!</p>
                    <a href="${targetUrl}" target="_blank" style="display:inline-block; background:#FF6F00; color:white; padding:10px 20px; border-radius:8px; text-decoration:none; font-weight:bold;">Zum Ziel durchbrechen ➔</a>
                `;
      } else {
        placeholder.style.display = "none";
        iframe.style.display = "block";
        iframe.src = targetUrl;
      }
    });
  });
});
