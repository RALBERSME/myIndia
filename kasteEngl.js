document.addEventListener("DOMContentLoaded", () => {
  const kastenDaten = {
    brahmanen: {
      title: "1. Brahmins",
      translation: "Traditional Role: Priests, scholars, and teachers",
      description:
        "They stand at the top of the classical hierarchy (born from the mouth of the cosmic being). Their duty was to study and teach the sacred scriptures (Vedas) and to perform sacrificial rituals. They enjoyed the highest social privileges and were considered absolutely pure.",
      color: "#4A90E2",
    },
    kshatriyas: {
      title: "2. Kshatriyas",
      translation: "Traditional Role: Warriors, rulers, and nobles",
      description:
        "Born from the arms of the cosmic being. Their duty was to protect society, exercise temporal power, and govern the land. Kings and soldiers traditionally belonged to this caste.",
      color: "#E2844A",
    },
    vaishyas: {
      title: "3. Vaishyas",
      translation: "Traditional Role: Traders, merchants, and landowners",
      description:
        "Born from the thighs of the cosmic being. They formed the economic backbone of traditional Indian society. Cattle herders, traders, artisans, and farmers fell into this category.",
      color: "#50B83C",
    },
    shudras: {
      title: "4. Shudras",
      translation:
        "Traditional Role: Servants, laborers, and service providers",
      description:
        "Born from the feet of the cosmic being. Their religiously assigned duty was to serve the three higher castes. They represented the broad mass of ordinary laborers and peasants and historically possessed almost no rights.",
      color: "#9B5DE5",
    },
    dalits: {
      title: "Outside the Hierarchy: Dalits",
      translation:
        "Formerly pejorative: 'Untouchables' (Today self-chosen: Dalits = the broken/oppressed)",
      description:
        "They stand completely outside the four-tiered Varna system. Traditionally, they were declared extremely impure and had to perform jobs that no one else would do (e.g., waste removal, leather tanning, street sweeping). For centuries, they suffered massive exclusion and discrimination.",
      color: "#6C757D",
    },
  };

  const layers = document.querySelectorAll(".pyramid-layer");
  const infoBox = document.getElementById("kasten-info-box");
  const infoTitle = document.getElementById("info-title");
  const infoTranslation = document.getElementById("info-translation");
  const infoDescription = document.getElementById("info-description");

  layers.forEach((layer) => {
    layer.addEventListener("click", () => {
      layers.forEach((l) => l.classList.remove("active-layer"));
      layer.classList.add("active-layer");

      const kastenKey = layer.getAttribute("data-target");
      const daten = kastenDaten[kastenKey];

      if (daten) {
        infoTitle.innerText = daten.title;
        infoTranslation.innerText = daten.translation;
        infoDescription.innerText = daten.description;

        infoBox.style.borderColor = daten.color;

        infoBox.style.opacity = 0;
        setTimeout(() => {
          infoBox.style.opacity = 1;
        }, 50);
      }
    });
  });
});
