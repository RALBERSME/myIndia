document.addEventListener("DOMContentLoaded", () => {
  const lotusFlower = document.getElementById("lotusFlower");
  const lotusInfoBox = document.getElementById("lotusInfoBox");

  if (lotusFlower && lotusInfoBox) {
    lotusFlower.addEventListener("click", () => {
      lotusFlower.classList.toggle("open");

      lotusInfoBox.classList.toggle("visible");
    });
  }

  const puzzleBoard = document.getElementById("puzzleBoard");
  const secretContent = document.getElementById("puzzleSecretContent");

  const winningLayout = ["1", "2", "3", "4", "5", "6", "7", "8", ""];

  let currentLayout = ["1", "2", "3", "4", "5", "6", "7", "8", ""];

  const shuffleArray = (array) => {
    for (let i = 0; i < 100; i++) {
      const emptyIndex = array.indexOf("");
      const validMoves = [];

      if (emptyIndex >= 3) validMoves.push(emptyIndex - 3);
      if (emptyIndex <= 5) validMoves.push(emptyIndex + 3);
      if (emptyIndex % 3 !== 0) validMoves.push(emptyIndex - 1);
      if (emptyIndex % 3 !== 2) validMoves.push(emptyIndex + 1);

      const randomMove =
        validMoves[Math.floor(Math.random() * validMoves.length)];
      array[emptyIndex] = array[randomMove];
      array[randomMove] = "";
    }
  };

  const renderPuzzle = () => {
    puzzleBoard.innerHTML = "";
    currentLayout.forEach((tile, index) => {
      const tileElement = document.createElement("div");
      tileElement.classList.add("puzzle-tile");

      if (tile === "") {
        tileElement.classList.add("empty");
      } else {
        tileElement.innerText = tile;

        if (tile === "1") tileElement.innerText = "🌱 1";
        if (tile === "3") tileElement.innerText = "🍃 3";
        if (tile === "5") tileElement.innerText = "🌿 5";
        if (tile === "7") tileElement.innerText = "🌳 7";
      }

      tileElement.addEventListener("click", () => moveTile(index));
      puzzleBoard.appendChild(tileElement);
    });
  };

  const moveTile = (index) => {
    const emptyIndex = currentLayout.indexOf("");

    const isAdjacent =
      index === emptyIndex - 3 ||
      index === emptyIndex + 3 ||
      (index === emptyIndex - 1 && index % 3 !== 2) ||
      (index === emptyIndex + 1 && index % 3 !== 0);

    if (isAdjacent) {
      currentLayout[emptyIndex] = currentLayout[index];
      currentLayout[index] = "";

      renderPuzzle();
      checkWinCondition();
    }
  };

  const checkWinCondition = () => {
    const hasWon = currentLayout.every((val, i) => val === winningLayout[i]);
    if (hasWon) {
      secretContent.classList.remove("locked");
      secretContent.classList.add("unlocked");
    }
  };

  shuffleArray(currentLayout);
  renderPuzzle();
});

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
