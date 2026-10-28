const bildArray = [
  "Images/delhi1.jpg",
  "Images/delhi2.jpg",
  "Images/delhi3.jpg",
  "Images/delhi4.jpg",
  "Images/delhi5.jpg",
  "Images/delhi6.jpg",
  "Images/delhi7.jpg",
  "Images/delhi8.jpg",
  "Images/delhi9.jpg",
  "Images/delhi10.jpg",
  "Images/delhi11.jpg",
  "Images/delhi12.jpg",
  "Images/delhi13.jpg",
  "Images/delhi14.jpg",
  "Images/delhi15.jpg",
  "Images/delhi16.jpg",
  "Images/delhi17.jpg",
  "Images/delhi18.jpg",
  "Images/delhi19.jpg",
  "Images/delhi20.jpg",
];

const imgA = document.querySelector("#slot-A img");
const imgB = document.querySelector("#slot-B img");
const imgC = document.querySelector("#slot-C img");

let schritt = 0;

function updateGallery() {
  let indexA, indexB, indexC;

  if (schritt === 0) {
    indexA = 0;
    indexB = 0;
    indexC = 0;
  } else {
    indexC = schritt % bildArray.length;

    indexB = schritt - 1 >= 0 ? (schritt - 1) % bildArray.length : 0;

    indexA = schritt - 2 >= 0 ? (schritt - 2) % bildArray.length : 0;
  }

  [imgA, imgB, imgC].forEach((img) => (img.style.opacity = "0.3"));

  setTimeout(() => {
    imgA.src = bildArray[indexA];
    imgB.src = bildArray[indexB];
    imgC.src = bildArray[indexC];

    [imgA, imgB, imgC].forEach((img) => (img.style.opacity = "1"));
  }, 200);

  schritt++;
}

updateGallery();

setInterval(updateGallery, 2000);

function changePage() {
  window.location.href = "india2.html";
}
