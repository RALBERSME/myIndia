document.addEventListener("DOMContentLoaded", () => {
  const indiaText = document.getElementById("indiaText");
  const mapContainer = document.getElementById("mapContainer");
  const welcomeMessage = document.getElementById("welcomeMessage");

  setTimeout(() => {
    indiaText.classList.add("fade-out");
    mapContainer.classList.add("fade-in");
  }, 2300);

  setTimeout(() => {
    welcomeMessage.classList.add("show");
    setTimeout(() => {
      welcomeMessage.innerHTML =
        "<h5>click <br>on the country <br> to start <br>your trip</h5>";
    }, 2600);
  }, 4600);
});
