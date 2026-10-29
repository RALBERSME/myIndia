document.addEventListener("DOMContentLoaded", () => {
  let geladeneThemen =
    JSON.parse(localStorage.getItem("indienReiseThemen")) || [];

  const linkElement = document.getElementById("nextStepLink");
  const endMessage = document.getElementById("noMoreTopics");

  if (geladeneThemen.length > 0) {
    const aktuellesThema = geladeneThemen[0];

    const dateiName = aktuellesThema.toLowerCase() + ".html";

    linkElement.href = dateiName;
    linkElement.innerText = `➥ click here to head straight to: '${aktuellesThema}'`;
    linkElement.classList.remove("hidden");

    linkElement.addEventListener("click", (e) => {
      geladeneThemen.shift();

      if (geladeneThemen.length === 0) {
        localStorage.removeItem("indienReiseThemen");
      } else {
        localStorage.setItem(
          "indienReiseThemen",
          JSON.stringify(geladeneThemen),
        );
      }
    });
  } else {
    endMessage.classList.remove("hidden");
  }
});

const infoTexts = {
  kultur: {
    title: "The 'Golden Triangle'",
    text: ` We start in <strong>Agra</strong>, home of the Taj Mahal. This world-famous monument of white marble is a once-in-a-lifetime sight you simply must see with your own eyes.  <br /><br /> Get to know <strong>Jaipur</strong>! Rajasthan’s "Pink City" fascinates with mighty fortresses (Amber Fort) and the splendid Palace of Winds (Hawa Mahal).
      <br /><br />Then it's off to <strong>New Delhi</strong>. The Indian capital is a melting pot of history and modernity. Pure contrast between the narrow alleys of Old Delhi and the grand avenues of New Delhi.`,
  },
  herz: {
    title: "The Spiritual Heart",
    text: `In <strong>Varanasi</strong>, you step into one of the oldest continuously inhabited cities in the world. The ritual cleansings and the evening Ganga Aarti ceremonies at the ghats of the sacred Ganges River are a deeply profound experience. <br /><br /> Next, head to <strong>Amritsar</strong>, home of the Golden Temple — the holiest site of the Sikh religion. The peaceful atmosphere and the massive community kitchen, which serves free meals to tens of thousands of people every single day, are truly unique.`,
  },
  natur: {
    title: "Romance & Nature",
    text: `Visit  <strong>Udaipur</strong>, often referred to as the "Venice of the East." Located by idyllic lakes in Rajasthan, the city is famous for its white palaces that seem to rise directly out of the water. <br /><br /> Enjoy <strong>Kerala</strong> (Backwaters): In India's lush green South, you can rent a traditional houseboat and glide for days through a network of tropical canals, palm groves, and spice plantations.`,
  },
  goa: {
    title: "Enjoy Goa",
    text: "If you want to unwind after the hustle and bustle of the big cities, the beaches in <strong>South Goa</strong> (e.g., Palolem) offer tranquil days under the palm trees, while the North is famous for its hippie markets and vibrant nightlife.",
  },
};

const buttons = document.querySelectorAll(".info-btn");
const infoBox = document.getElementById("info-box");
const infoTitle = document.getElementById("info-title");
const infoText = document.getElementById("info-text");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetKey = button.getAttribute("data-target");

    if (button.classList.contains("active")) {
      button.classList.remove("active");
      infoBox.classList.add("hidden");
    } else {
      buttons.forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");

      infoTitle.innerHTML = infoTexts[targetKey].title;
      infoText.innerHTML = infoTexts[targetKey].text;

      infoBox.classList.remove("hidden");
    }
  });
});
